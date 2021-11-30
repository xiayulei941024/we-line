export interface MyRoute {
  component?: string | (() => Promise<typeof import("*.vue")>);
  path?: string;
  name?: string;
  meta?: {
    name?: string;
    icon?: string;
    hide?: boolean;
  };
  children?: Array<MyRoute>;
  redirect?: MyRoute | string;
}
