function typeOf(obj: any): any {
  const toString: any = Object.prototype.toString;
  const map: any = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object"
  };
  return map[toString.call(obj)];
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function clone(data: any): any {
  const t = typeOf(data);
  let o: any;

  if (t === "array") {
    o = [];
  } else if (t === "object") {
    o = {};
  } else {
    return data;
  }

  if (t === "array") {
    for (let i = 0; i < data.length; i++) {
      o.push(clone(data[i]));
    }
  } else if (t === "object") {
    for (const i in data) {
      o[i] = clone(data[i]);
    }
  }
  return o;
}
