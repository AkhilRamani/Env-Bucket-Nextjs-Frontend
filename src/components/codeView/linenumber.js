export function withLineNumbers(
    highlight,
    options
  ) {
    const opts = {
      class: "codejar-linenumbers",
      wrapClass: "codejar-wrap",
      width: "35px",
      backgroundColor: "rgba(128, 128, 128, 0.15)",
      color: "",
      ...options
    }
  
    let lineNumbers
    return function (editor) {
      highlight(editor)
  
      if (!lineNumbers) {
        lineNumbers = init(editor, opts)
        editor.addEventListener("scroll", () => lineNumbers.style.top = `-${editor.scrollTop}px`);
      }
  
      const code = editor.textContent || ""
      const linesCount = code.replace(/\n+$/, "\n").split("\n").length + 1
  
      let text = ""
      for (let i = 1; i < linesCount; i++) {
        text += `${i}\n`
      }
  
      lineNumbers.innerText = text
    }
  }