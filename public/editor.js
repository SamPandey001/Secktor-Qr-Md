let mode = "css"
const editor = CodeMirror.fromTextArea(code, {
  lineNumbers: true,
  styleActiveLine: true,
  matchBrackets: true,
  scrollbarStyle: "overlay",
  Tab: "indentMore",
  defaultTab: function(cm) {
    if (cm.somethingSelected()) cm.indentSelection("add");
    else cm.replaceSelection("  ", "end");
  },
  mode
})
editor.setOption("theme", "highcontrast-dark")
const x = document.querySelector(".code")
const ro = new ResizeObserver(entries => {
  editor.setSize(x.offsetWidth, x.offsetHeight)
})
ro.observe(document.querySelector(".code-container"))

const changeMode = () => {
  mode = mode === "css" ? "javascript" : "css"
  editor.setOption("mode", mode)
}
