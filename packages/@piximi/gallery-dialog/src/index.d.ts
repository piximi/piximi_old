declare module "*.css" {
  interface ClassList {
    [name: string]: string;
  }

  const classes: ClassList;

  export = classes;
}
