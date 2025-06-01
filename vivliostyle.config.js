module.exports = {
  title: "Vivliostyle SandBox",
  author: "相戸ゆづな",
  language: "ja",
  size: "A5",
  // theme: "css/content-style.css",
  entry: [
    {path:"docs/section/sc-chapter1.md", theme: "./css/section-title"},
    {path:"docs/content/chapter1.md", theme: "./css/content-style"},
  ],
  output: ["output.pdf"]
};
