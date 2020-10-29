// const MarkdownIt = require('markdown-it');
import MarkdownIt from 'markdown-it';

const initMarkdownIt = () => {
  const editor = document.querySelector("#editor");
  const preview = document.querySelector("#preview");
  const md = new MarkdownIt();

  editor.addEventListener("keyup", (event) => {
    const result = md.render(editor.value);
    preview.innerHTML = result;
  });
};

export { initMarkdownIt };
