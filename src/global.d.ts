declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
// svg.d.ts
declare module "*.svg" {
  const content: string;
  export default content;
}
