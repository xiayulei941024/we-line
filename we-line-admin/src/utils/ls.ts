/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $ls: any;
  }
}
export default class Ls {
  source: Storage;
  constructor() {
    this.source = window.localStorage;
    this.initRun();
  }
  initRun(): void {
    /*
     * set 存储方法
     * @ param {String}     key 键
     * @ param {String}     value 值，存储的值可能是数组/对象，不能直接存储，需要转换 JSON.stringify
     * @ param {String}     expired 过期时间，以分钟为单位
     */
    const reg = new RegExp("__expires__");
    const data = this.source;
    const list = Object.keys(data);
    if (list.length > 0) {
      list.map((key) => {
        if (!reg.test(key)) {
          const now = Date.now();
          const expires = data[`${key}__expires__`] || Number(Date.now) + 1;
          if (now >= expires) {
            this.remove(key);
          }
        }
        return key;
      });
    }
  }

  set(key: string, value: any, expired?: number): any {
    /*
     * set 存储方法
     * @ param {String}     key 键
     * @ param {String}     value 值，
     * @ param {String}     expired 过期时间，以毫秒为单位，非必须
     */
    const source = this.source;
    source[key] = JSON.stringify(value);
    if (expired) {
      source[`${key}__expires__`] = Date.now() + expired;
    }
    return value;
  }

  get(key: string): any {
    /*
     * get 获取方法
     * @ param {String}     key 键
     * @ param {String}     expired 存储时为非必须字段，所以有可能取不到，默认为 Date.now+1
     */
    const source = this.source;
    const expired = source[`${key}__expires__`] || Number(Date.now) + 1;
    const now = Date.now();

    if (now >= expired) {
      this.remove(key);
      return;
    }
    const value = source[key] ? JSON.parse(source[key]) : source[key];
    return value;
  }

  remove(key: string): any {
    const data = this.source;
    const value = data[key];
    delete data[key];
    delete data[`${key}__expires__`];
    return value;
  }
}
