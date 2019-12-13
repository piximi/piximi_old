declare module '*.css' {
  interface ClassList {
    [name: string]: string
  }

  const classes: ClassList;

  export = classes;
}

declare module '*.gif' {
  const image: any;

  export = image;
}

declare module "*.json" {
  const content: any;

  export = content;
}

declare module '*.png' {
  const image: any;

  export = image;
}
