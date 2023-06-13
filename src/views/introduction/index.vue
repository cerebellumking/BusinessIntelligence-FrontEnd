<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div v-html="innerHTML" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduction',
  data() {
    return {
      innerHTML: `
<!doctype html>
<html>
<head>
<meta charset='UTF-8'><meta name='viewport' content='width=device-width initial-scale=1'>

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext' rel='stylesheet' type='text/css' /><style type='text/css'>html {overflow-x: initial !important;}:root { --bg-color: #ffffff; --text-color: #333333; --select-text-bg-color: #B5D6FC; --select-text-font-color: auto; --monospace: "Lucida Console",Consolas,"Courier",monospace; --title-bar-height: 20px; }
.mac-os-11 { --title-bar-height: 28px; }
html { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4, h5 { white-space: pre-wrap; }
body { margin: 0px; padding: 0px; height: auto; inset: 0px; font-size: 1rem; line-height: 1.42857143; overflow-x: hidden; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; tab-size: 4; background-position: inherit; background-repeat: inherit; }
iframe { margin: auto; }
a.url { word-break: break-all; }
a:active, a:hover { outline: 0px; }
.in-text-selection, ::selection { text-shadow: none; background: var(--select-text-bg-color); color: var(--select-text-font-color); }
#write { margin: 0px auto; height: auto; width: inherit; word-break: normal; word-wrap: break-word; position: relative; white-space: normal; overflow-x: visible; padding-top: 36px; }
#write.first-line-indent p { text-indent: 2em; }
#write.first-line-indent li p, #write.first-line-indent p * { text-indent: 0px; }
#write.first-line-indent li { margin-left: 2em; }
.for-image #write { padding-left: 8px; padding-right: 8px; }
body.typora-export { padding-left: 30px; padding-right: 30px; }
.typora-export .footnote-line, .typora-export li, .typora-export p { white-space: pre-wrap; }
.typora-export .task-list-item input { pointer-events: none; }
@media screen and (max-width: 500px) {
  body.typora-export { padding-left: 0px; padding-right: 0px; }
  #write { padding-left: 20px; padding-right: 20px; }
}
#write li > figure:last-child { margin-bottom: 0.5rem; }
#write ol, #write ul { position: relative; }
img { max-width: 100%; vertical-align: middle; image-orientation: from-image; }
button, input, select, textarea { color: inherit; font-family: inherit; font-size: inherit; font-style: inherit; font-variant-caps: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; }
input[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }
*, ::after, ::before { box-sizing: border-box; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre { width: inherit; }
#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p { position: relative; }
p { line-height: inherit; }
h1, h2, h3, h4, h5, h6 { break-after: avoid-page; break-inside: avoid; orphans: 4; }
p { orphans: 4; }
h1 { font-size: 2rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
.md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p { margin-top: 1rem; margin-bottom: 1rem; }
.hidden { display: none; }
.md-blockmeta { color: rgb(204, 204, 204); font-weight: 700; font-style: italic; }
a { cursor: pointer; }
sup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.7); color: rgb(85, 85, 85); border-radius: 4px; cursor: pointer; }
sup.md-footnote a, sup.md-footnote a:hover { color: inherit; text-transform: inherit; text-decoration: inherit; }
#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; }
figure { overflow-x: auto; margin: 1.2em 0px; max-width: calc(100% + 16px); padding: 0px; }
figure > table { margin: 0px; }
thead, tr { break-inside: avoid; break-after: auto; }
thead { display: table-header-group; }
table { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }
table.md-table td { min-width: 32px; }
.CodeMirror-gutters { border-right-width: 0px; background-color: inherit; }
.CodeMirror-linenumber { -webkit-user-select: none; }
.CodeMirror { text-align: left; }
.CodeMirror-placeholder { opacity: 0.3; }
.CodeMirror pre { padding: 0px 4px; }
.CodeMirror-lines { padding: 0px; }
div.hr:focus { cursor: none; }
#write pre { white-space: pre-wrap; }
#write.fences-no-line-wrapping pre { white-space: pre; }
#write pre.ty-contain-cm { white-space: normal; }
.CodeMirror-gutters { margin-right: 4px; }
.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; position: relative !important; background-position: inherit; background-repeat: inherit; }
.md-fences-adv-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }
#write .md-fences.mock-cm { white-space: pre-wrap; }
.md-fences.md-fences-with-lineno { padding-left: 0px; }
#write.fences-no-line-wrapping .md-fences.mock-cm { white-space: pre; overflow-x: auto; }
.md-fences.mock-cm.md-fences-with-lineno { padding-left: 8px; }
.CodeMirror-line, twitterwidget { break-inside: avoid; }
svg { break-inside: avoid; }
.footnotes { opacity: 0.8; font-size: 0.9rem; margin-top: 1em; margin-bottom: 1em; }
.footnotes + .footnotes { margin-top: 0px; }
.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; line-height: normal; font-weight: 400; text-align: left; box-sizing: content-box; direction: ltr; background-position: 0px 0px; }
li div { padding-top: 0px; }
blockquote { margin: 1rem 0px; }
li .mathjax-block, li p { margin: 0.5rem 0px; }
li blockquote { margin: 1rem 0px; }
li { margin: 0px; position: relative; }
blockquote > :last-child { margin-bottom: 0px; }
blockquote > :first-child, li > :first-child { margin-top: 0px; }
.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; white-space: normal; }
#write .footnote-line { white-space: pre-wrap; }
@media print {
  body, html { border: 1px solid transparent; height: 99%; break-after: avoid; break-before: avoid; font-variant-ligatures: no-common-ligatures; }
  #write { margin-top: 0px; border-color: transparent !important; padding-top: 0px !important; padding-bottom: 0px !important; }
  .typora-export * { print-color-adjust: exact; }
  .typora-export #write { break-after: avoid; }
  .typora-export #write::after { height: 0px; }
  .is-mac table { break-inside: avoid; }
  #write > p:nth-child(1) { margin-top: 0px; }
  .typora-export-show-outline .typora-export-sidebar { display: none; }
  figure { overflow-x: visible; }
}
.footnote-line { margin-top: 0.714em; font-size: 0.7em; }
a img, img a { cursor: pointer; }
pre.md-meta-block { font-size: 0.8rem; min-height: 0.8rem; white-space: pre-wrap; background-color: rgb(204, 204, 204); display: block; overflow-x: hidden; }
p > .md-image:only-child:not(.md-img-error) img, p > img:only-child { display: block; margin: auto; }
#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img { left: -2em; position: relative; }
p > .md-image:only-child { display: inline-block; width: 100%; }
#write .MathJax_Display { margin: 0.8em 0px 0px; }
.md-math-block { width: 100%; }
.md-math-block:not(:empty)::after { display: none; }
.MathJax_ref { fill: currentcolor; }
[contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus { outline: 0px; box-shadow: none; }
.md-task-list-item { position: relative; list-style-type: none; }
.task-list-item.md-task-list-item { padding-left: 0px; }
.md-task-list-item > input { position: absolute; top: 0px; left: 0px; margin-left: -1.2em; margin-top: calc(1em - 10px); border: none; }
.math { font-size: 1rem; }
.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-radius: 10px; }
.md-toc-content { position: relative; margin-left: 0px; }
.md-toc-content::after, .md-toc::after { display: none; }
.md-toc-item { display: block; color: rgb(65, 131, 196); }
.md-toc-item a { text-decoration: none; }
.md-toc-inner:hover { text-decoration: underline; }
.md-toc-inner { display: inline-block; cursor: pointer; }
.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: 700; }
.md-toc-h2 .md-toc-inner { margin-left: 2em; }
.md-toc-h3 .md-toc-inner { margin-left: 4em; }
.md-toc-h4 .md-toc-inner { margin-left: 6em; }
.md-toc-h5 .md-toc-inner { margin-left: 8em; }
.md-toc-h6 .md-toc-inner { margin-left: 10em; }
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }
  .md-toc-h4 .md-toc-inner { margin-left: 5em; }
  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }
  .md-toc-h6 .md-toc-inner { margin-left: 8em; }
}
a.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }
.footnote-line a:not(.reversefootnote) { color: inherit; }
.reversefootnote { font-family: ui-monospace, sans-serif; }
.md-attr { display: none; }
.md-fn-count::after { content: "."; }
code, pre, samp, tt { font-family: var(--monospace); }
kbd { margin: 0px 0.1em; padding: 0.1em 0.6em; font-size: 0.8em; color: rgb(36, 39, 41); background-color: rgb(255, 255, 255); border: 1px solid rgb(173, 179, 185); border-radius: 3px; box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset; white-space: nowrap; vertical-align: middle; }
.md-comment { color: rgb(162, 127, 3); opacity: 0.6; font-family: var(--monospace); }
code { text-align: left; }
a.md-print-anchor { white-space: pre !important; border: none !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: 0px !important; text-shadow: initial !important; background-position: 0px 0px !important; }
.os-windows.monocolor-emoji .md-emoji { font-family: "Segoe UI Symbol", sans-serif; }
.md-diagram-panel > svg { max-width: 100%; }
[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; height: auto; }
[lang="mermaid"] .node text { font-size: 1rem; }
table tr th { border-bottom-width: 0px; }
video { max-width: 100%; display: block; margin: 0px auto; }
iframe { max-width: 100%; width: 100%; border: none; }
.highlight td, .highlight tr { border: 0px; }
mark { background-color: rgb(255, 255, 0); color: rgb(0, 0, 0); }
.md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong { color: inherit; }
.md-expand mark .md-meta { opacity: 0.3 !important; }
mark .md-meta { color: rgb(0, 0, 0); }
@media print {
  .typora-export h1, .typora-export h2, .typora-export h3, .typora-export h4, .typora-export h5, .typora-export h6 { break-inside: avoid; }
}
.md-diagram-panel .messageText { stroke: none !important; }
.md-diagram-panel .start-state { fill: var(--node-fill); }
.md-diagram-panel .edgeLabel rect { opacity: 1 !important; }
.md-fences.md-fences-math { font-size: 1em; }
.md-fences-advanced:not(.md-focus) { padding: 0px; white-space: nowrap; border: 0px; }
.md-fences-advanced:not(.md-focus) { background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit; background-repeat: inherit; }
.typora-export-show-outline .typora-export-content { max-width: 1440px; margin: auto; display: flex; flex-direction: row; }
.typora-export-sidebar { width: 300px; font-size: 0.8rem; margin-top: 80px; margin-right: 18px; }
.typora-export-show-outline #write { --webkit-flex: 2; flex: 2 1 0%; }
.typora-export-sidebar .outline-content { position: fixed; top: 0px; max-height: 100%; overflow: hidden auto; padding-bottom: 30px; padding-top: 60px; width: 300px; }
@media screen and (max-width: 1024px) {
  .typora-export-sidebar, .typora-export-sidebar .outline-content { width: 240px; }
}
@media screen and (max-width: 800px) {
  .typora-export-sidebar { display: none; }
}
.outline-content li, .outline-content ul { margin-left: 0px; margin-right: 0px; padding-left: 0px; padding-right: 0px; list-style: none; overflow-wrap: anywhere; }
.outline-content ul { margin-top: 0px; margin-bottom: 0px; }
.outline-content strong { font-weight: 400; }
.outline-expander { width: 1rem; height: 1.428571429rem; position: relative; display: table-cell; vertical-align: middle; cursor: pointer; padding-left: 4px; }
.outline-expander::before { content: ""; position: relative; font-family: Ionicons; display: inline-block; font-size: 8px; vertical-align: middle; }
.outline-item { padding-top: 3px; padding-bottom: 3px; cursor: pointer; }
.outline-expander:hover::before { content: ""; }
.outline-h1 > .outline-item { padding-left: 0px; }
.outline-h2 > .outline-item { padding-left: 1em; }
.outline-h3 > .outline-item { padding-left: 2em; }
.outline-h4 > .outline-item { padding-left: 3em; }
.outline-h5 > .outline-item { padding-left: 4em; }
.outline-h6 > .outline-item { padding-left: 5em; }
.outline-label { cursor: pointer; display: table-cell; vertical-align: middle; text-decoration: none; color: inherit; }
.outline-label:hover { text-decoration: underline; }
.outline-item:hover { border-color: rgb(245, 245, 245); background-color: var(--item-hover-bg-color); }
.outline-item:hover { margin-left: -28px; margin-right: -28px; border-left-width: 28px; border-left-style: solid; border-left-color: transparent; border-right-width: 28px; border-right-style: solid; border-right-color: transparent; }
.outline-item-single .outline-expander::before, .outline-item-single .outline-expander:hover::before { display: none; }
.outline-item-open > .outline-item > .outline-expander::before { content: ""; }
.outline-children { display: none; }
.info-panel-tab-wrapper { display: none; }
.outline-item-open > .outline-children { display: block; }
.typora-export .outline-item { padding-top: 1px; padding-bottom: 1px; }
.typora-export .outline-item:hover { margin-right: -8px; border-right-width: 8px; border-right-style: solid; border-right-color: transparent; }
.typora-export .outline-expander::before { content: "+"; font-family: inherit; top: -1px; }
.typora-export .outline-expander:hover::before, .typora-export .outline-item-open > .outline-item > .outline-expander::before { content: "−"; }
.typora-export-collapse-outline .outline-children { display: none; }
.typora-export-collapse-outline .outline-item-open > .outline-children, .typora-export-no-collapse-outline .outline-children { display: block; }
.typora-export-no-collapse-outline .outline-expander::before { content: "" !important; }
.typora-export-show-outline .outline-item-active > .outline-item .outline-label { font-weight: 700; }
.md-inline-math-container mjx-container { zoom: 0.95; }
mjx-container { break-inside: avoid; }


.CodeMirror { height: auto; }
.CodeMirror.cm-s-inner { background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit; background-repeat: inherit; }
.CodeMirror-scroll { overflow: auto hidden; z-index: 3; }
.CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler { background-color: rgb(255, 255, 255); }
.CodeMirror-gutters { border-right-width: 1px; border-right-style: solid; border-right-color: rgb(221, 221, 221); background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; white-space: nowrap; background-position: inherit; background-repeat: inherit; }
.CodeMirror-linenumber { padding: 0px 3px 0px 5px; text-align: right; color: rgb(153, 153, 153); }
.cm-s-inner .cm-keyword { color: rgb(119, 0, 136); }
.cm-s-inner .cm-atom, .cm-s-inner.cm-atom { color: rgb(34, 17, 153); }
.cm-s-inner .cm-number { color: rgb(17, 102, 68); }
.cm-s-inner .cm-def { color: rgb(0, 0, 255); }
.cm-s-inner .cm-variable { color: rgb(0, 0, 0); }
.cm-s-inner .cm-variable-2 { color: rgb(0, 85, 170); }
.cm-s-inner .cm-variable-3 { color: rgb(0, 136, 85); }
.cm-s-inner .cm-string { color: rgb(170, 17, 17); }
.cm-s-inner .cm-property { color: rgb(0, 0, 0); }
.cm-s-inner .cm-operator { color: rgb(152, 26, 26); }
.cm-s-inner .cm-comment, .cm-s-inner.cm-comment { color: rgb(170, 85, 0); }
.cm-s-inner .cm-string-2 { color: rgb(255, 85, 0); }
.cm-s-inner .cm-meta { color: rgb(85, 85, 85); }
.cm-s-inner .cm-qualifier { color: rgb(85, 85, 85); }
.cm-s-inner .cm-builtin { color: rgb(51, 0, 170); }
.cm-s-inner .cm-bracket { color: rgb(153, 153, 119); }
.cm-s-inner .cm-tag { color: rgb(17, 119, 0); }
.cm-s-inner .cm-attribute { color: rgb(0, 0, 204); }
.cm-s-inner .cm-header, .cm-s-inner.cm-header { color: rgb(0, 0, 255); }
.cm-s-inner .cm-quote, .cm-s-inner.cm-quote { color: rgb(0, 153, 0); }
.cm-s-inner .cm-hr, .cm-s-inner.cm-hr { color: rgb(153, 153, 153); }
.cm-s-inner .cm-link, .cm-s-inner.cm-link { color: rgb(0, 0, 204); }
.cm-negative { color: rgb(221, 68, 68); }
.cm-positive { color: rgb(34, 153, 34); }
.cm-header, .cm-strong { font-weight: 700; }
.cm-del { text-decoration: line-through; }
.cm-em { font-style: italic; }
.cm-link { text-decoration: underline; }
.cm-error { color: red; }
.cm-invalidchar { color: red; }
.cm-constant { color: rgb(38, 139, 210); }
.cm-defined { color: rgb(181, 137, 0); }
div.CodeMirror span.CodeMirror-matchingbracket { color: rgb(0, 255, 0); }
div.CodeMirror span.CodeMirror-nonmatchingbracket { color: rgb(255, 34, 34); }
.cm-s-inner .CodeMirror-activeline-background { background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit; background-repeat: inherit; }
.CodeMirror { position: relative; overflow: hidden; }
.CodeMirror-scroll { height: 100%; outline: 0px; position: relative; box-sizing: content-box; background-image: inherit; background-size: inherit; background-attachment: inherit; background-origin: inherit; background-clip: inherit; background-color: inherit; background-position: inherit; background-repeat: inherit; }
.CodeMirror-sizer { position: relative; }
.CodeMirror-gutter-filler, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-vscrollbar { position: absolute; z-index: 6; display: none; outline: 0px; }
.CodeMirror-vscrollbar { right: 0px; top: 0px; overflow: hidden; }
.CodeMirror-hscrollbar { bottom: 0px; left: 0px; overflow: auto hidden; }
.CodeMirror-scrollbar-filler { right: 0px; bottom: 0px; }
.CodeMirror-gutter-filler { left: 0px; bottom: 0px; }
.CodeMirror-gutters { position: absolute; left: 0px; top: 0px; padding-bottom: 10px; z-index: 3; overflow-y: hidden; }
.CodeMirror-gutter { white-space: normal; height: 100%; box-sizing: content-box; padding-bottom: 30px; margin-bottom: -32px; display: inline-block; }
.CodeMirror-gutter-wrapper { position: absolute; z-index: 4; border: none !important; background-position: 0px 0px !important; }
.CodeMirror-gutter-background { position: absolute; top: 0px; bottom: 0px; z-index: 4; }
.CodeMirror-gutter-elt { position: absolute; cursor: default; z-index: 4; }
.CodeMirror-lines { cursor: text; }
.CodeMirror pre { border-radius: 0px; border-width: 0px; font-family: inherit; font-size: inherit; margin: 0px; white-space: pre; word-wrap: normal; color: inherit; z-index: 2; position: relative; overflow: visible; background-position: 0px 0px; }
.CodeMirror-wrap pre { word-wrap: break-word; white-space: pre-wrap; word-break: normal; }
.CodeMirror-code pre { border-right-width: 30px; border-right-style: solid; border-right-color: transparent; width: fit-content; }
.CodeMirror-wrap .CodeMirror-code pre { border-right-style: none; width: auto; }
.CodeMirror-linebackground { position: absolute; inset: 0px; z-index: 0; }
.CodeMirror-linewidget { position: relative; z-index: 2; overflow: auto; }
.CodeMirror-wrap .CodeMirror-scroll { overflow-x: hidden; }
.CodeMirror-measure { position: absolute; width: 100%; height: 0px; overflow: hidden; visibility: hidden; }
.CodeMirror-measure pre { position: static; }
.CodeMirror div.CodeMirror-cursor { position: absolute; visibility: hidden; border-right-style: none; width: 0px; }
.CodeMirror div.CodeMirror-cursor { visibility: hidden; }
.CodeMirror-focused div.CodeMirror-cursor { visibility: inherit; }
.cm-searching { background-color: rgba(255, 255, 0, 0.4); }
span.cm-underlined { text-decoration: underline; }
span.cm-strikethrough { text-decoration: line-through; }
.cm-tw-syntaxerror { color: rgb(255, 255, 255); background-color: rgb(153, 0, 0); }
.cm-tw-deleted { text-decoration: line-through; }
.cm-tw-header5 { font-weight: 700; }
.cm-tw-listitem:first-child { padding-left: 10px; }
.cm-tw-box { border-style: solid; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-color: inherit; border-top-width: 0px !important; }
.cm-tw-underline { text-decoration: underline; }
@media print {
  .CodeMirror div.CodeMirror-cursor { visibility: hidden; }
}


:root {
    --side-bar-bg-color: #fafafa;
    --control-text-color: #777;
}

@include-when-export url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);

/* open-sans-regular - latin-ext_latin */
  /* open-sans-italic - latin-ext_latin */
    /* open-sans-700 - latin-ext_latin */
    /* open-sans-700italic - latin-ext_latin */
  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: "Open Sans","Clear Sans", "Helvetica Neue", Helvetica, Arial, 'Segoe UI Emoji', sans-serif;
    color: rgb(51, 51, 51);
    line-height: 1.6;
}

#write {
    max-width: 860px;
  	margin: 0 auto;
  	padding: 30px;
    padding-bottom: 100px;
}

@media only screen and (min-width: 1400px) {
	#write {
		max-width: 1024px;
	}
}

@media only screen and (min-width: 1800px) {
	#write {
		max-width: 1200px;
	}
}

#write > ul:first-child,
#write > ol:first-child{
    margin-top: 30px;
}

a {
    color: #4183C4;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit;
}
h2 tt,
h2 code {
    font-size: inherit;
}
h3 tt,
h3 code {
    font-size: inherit;
}
h4 tt,
h4 code {
    font-size: inherit;
}
h5 tt,
h5 code {
    font-size: inherit;
}
h6 tt,
h6 code {
    font-size: inherit;
}
h1 {
    font-size: 2.25em;
    line-height: 1.2;
    border-bottom: 1px solid #eee;
}
h2 {
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;
}

/*@media print {
    .typora-export h1,
    .typora-export h2 {
        border-bottom: none;
        padding-bottom: initial;
    }

    .typora-export h1::after,
    .typora-export h2::after {
        content: "";
        display: block;
        height: 100px;
        margin-top: -96px;
        border-top: 1px solid #eee;
    }
}*/

h3 {
    font-size: 1.5em;
    line-height: 1.43;
}
h4 {
    font-size: 1.25em;
}
h5 {
    font-size: 1em;
}
h6 {
   font-size: 1em;
    color: #777;
}
p,
blockquote,
ul,
ol,
dl,
table{
    margin: 0.8em 0;
}
li>ol,
li>ul {
    margin: 0 0;
}
hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
}

li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0;
}
blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 15px;
    color: #777777;
}
blockquote blockquote {
    padding-right: 0;
}
table {
    padding: 0;
    word-break: initial;
}
table tr {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
}
table tr:nth-child(2n),
thead {
    background-color: #f8f8f8;
}
table th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
}
table td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
}
table th:first-child,
table td:first-child {
    margin-top: 0;
}
table th:last-child,
table td:last-child {
    margin-bottom: 0;
}

.CodeMirror-lines {
    padding-left: 4px;
}

.code-tooltip {
    box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);
    border-top: 1px solid #eef2f2;
}

.md-fences,
code,
tt {
    border: 1px solid #e7eaed;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 0;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
}

code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
}

.md-fences {
    margin-bottom: 15px;
    margin-top: 15px;
    padding-top: 8px;
    padding-bottom: 6px;
}


.md-task-list-item > input {
  margin-left: -1.3em;
}

@media print {
    html {
        font-size: 13px;
    }
    pre {
        page-break-inside: avoid;
        word-wrap: break-word;
    }
}

.md-fences {
	background-color: #f8f8f8;
}
#write pre.md-meta-block {
	padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    color: #777777;
    margin-top: 0 !important;
}

.mathjax-block>.code-tooltip {
	bottom: .375rem;
}

.md-mathjax-midline {
    background: #fafafa;
}

#write>h3.md-focus:before{
	left: -1.5625rem;
	top: .375rem;
}
#write>h4.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h5.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
#write>h6.md-focus:before{
	left: -1.5625rem;
	top: .285714286rem;
}
.md-image>.md-meta {
    /*border: 1px solid #ddd;*/
    border-radius: 3px;
    padding: 2px 0px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}

.md-tag {
    color: #a7a7a7;
    opacity: 1;
}

.md-toc { 
    margin-top:20px;
    padding-bottom:20px;
}

.sidebar-tabs {
    border-bottom: none;
}

#typora-quick-open {
    border: 1px solid #ddd;
    background-color: #f8f8f8;
}

#typora-quick-open-item {
    background-color: #FAFAFA;
    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;
    border-style: solid;
    border-width: 1px;
}

/** focus mode */
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}

header, .context-menu, .megamenu-content, footer{
    font-family: "Segoe UI", "Arial", sans-serif;
}

.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state{
    visibility: visible;
}

.mac-seamless-mode #typora-sidebar {
    background-color: #fafafa;
    background-color: var(--side-bar-bg-color);
}

.md-lang {
    color: #b4654d;
}

/*.html-for-mac {
    --item-hover-bg-color: #E6F0FE;
}*/

#md-notification .btn {
    border: 0;
}

.dropdown-menu .divider {
    border-color: #e5e5e5;
    opacity: 0.4;
}

.ty-preferences .window-content {
    background-color: #fafafa;
}

.ty-preferences .nav-group-item.active {
    color: white;
    background: #999;
}

.menu-item-container a.menu-style-btn {
    background-color: #f5f8fa;
    background-image: linear-gradient( 180deg , hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0)); 
}


 @media print { @page {margin: 0 0 0 0;} body.typora-export {padding-left: 0; padding-right: 0;} #write {padding:0;}}
</style><title>README</title>
</head>
<body class='typora-export'><div class='typora-export-content'>
<div id='write'  class=''><h1 id='商务智能项目文档'><span>商务智能项目文档</span></h1><h2 id='1-项目介绍'><span>1. 项目介绍</span></h2><p><span>本项目实现了一个新闻实时动态变化分析系统，为PENS数据提供新闻话题实时动态变化分析、各类新闻的历史与实时统计，新闻话题推荐等功能。有如下几个模块：</span></p><ol start='' ><li><p><span>模拟日志产生程序：采用PENS中提供的新闻曝光日志数据构建模拟日志产生程序，模拟时序的日志产生。</span></p></li><li><p><span>数据采集：使用Flume框架采集模拟产生的新闻曝光日志，通过Kafka消息队列进行流量控制，使用Structured Streaming流计算处理并存储到存储系统中。</span></p></li><li><p><span>存储系统：使用Mysql搭建数据仓库，存储新闻点击流数据以及新闻数据，为查询系统提供高性能的查询服务。</span></p></li><li><p><span>后端查询系统：使用flask框架与websocket技术提供高效率的查询服务。</span></p></li><li><p><span>前端可视化界面：为新闻动态变化查询结果提供可视化展示界面。</span></p></li></ol><h2 id='2-数据集分析'><span>2. 数据集分析</span></h2><p><span>PENS数据集包含113,762篇新闻，其主题分为15个类别。每个新闻包括新闻ID、标题、正文和由编辑手动标记的类别。新闻标题和正文的平均长度分别为10.5和549.0。数据集覆盖的时间为：</span><strong><span>2019年6月13日-2019年7月3日。</span></strong><span>数据集具体内容如下：</span></p><p><span>news.tsv 中包含了新闻文章的信息</span></p><figure class='table-figure'><table><thead><tr><th><strong><span>字段</span></strong></th><th><strong><span>示例</span></strong></th><th><strong><span>含义</span></strong></th></tr></thead><tbody><tr><td><span>Category</span></td><td><span>sports</span></td><td><span>新闻所属的15个类别之一</span></td></tr><tr><td><span>Entity content</span></td><td><span>{&#39;Atlanta United FC&#39;: {...}}</span></td><td><span>实体的详细信息，包括实体类型、标签、描述、别名、属性和站点链接等</span></td></tr><tr><td><span>Headline</span></td><td><span>Predicting Atlanta United&#39;s lineup against Columbus Crew in the U.S. Open Cup</span></td><td><span>新闻标题</span></td></tr><tr><td><span>News body</span></td><td><span>Only FIVE internationals allowed, count em, FIVE! So first off we should say, per our usual Atlanta United lineup predictions, this will be wrong...</span></td><td><span>新闻正文内容</span></td></tr><tr><td><span>News ID</span></td><td><span>N10000</span></td><td><span>新闻的唯一ID</span></td></tr><tr><td><span>Title entity</span></td><td><span>{&quot;Atlanta United&#39;s&quot;: &#39;Atlanta United FC&#39;}</span></td><td><span>新闻标题中包含的实体，以字典形式表示，包括实体在标题中的文本和对应的Wikidata实体ID</span></td></tr><tr><td><span>Topic</span></td><td><span>soccer</span></td><td><span>新闻的具体主题</span></td></tr></tbody></table></figure><p><span>train.tsv 是用于训练的用户点击历史记录和展示日志</span></p><p><span>valid.tsv 是用于验证的用户点击历史记录和展示日志</span></p><figure class='table-figure'><table><thead><tr><th><strong><span>字段</span></strong></th><th><strong><span>示例</span></strong></th><th><strong><span>含义</span></strong></th></tr></thead><tbody><tr><td><span>UserID</span></td><td><span>U335175</span></td><td><span>用户的唯一ID，用于标识不同的用户</span></td></tr><tr><td><span>ClicknewsID</span></td><td><span>N41340 N27570 N83288 ...</span></td><td><span>用户历史点击的新闻ID列表，以空格分隔。该字段用于记录用户的兴趣偏好</span></td></tr><tr><td><span>dwelltime</span></td><td><span>116 23 59 ...</span></td><td><span>用户历史点击的新闻浏览时长，以空格分隔。该字段可用于评估用户对不同新闻的兴趣程度</span></td></tr><tr><td><span>exposure_time</span></td><td><span>6/19/2019 5:10:01 AM#TAB#...</span></td><td><span>历史点击新闻的曝光时间，以“#TAB#”分隔。该字段可用于分析用户对不同时间段新闻的兴趣程度</span></td></tr><tr><td><span>pos</span></td><td><span>N55476 N103556 N52756 ...</span></td><td><span>本次展示日志中用户点击的新闻ID列表，以空格分隔。该字段用于记录用户在本次展示中点击的新闻</span></td></tr><tr><td><span>neg</span></td><td><span>N48119 N92507 N92467 ...</span></td><td><span>本次展示日志中未被用户点击的新闻ID列表，以空格分隔。该字段用于记录用户在本次展示中未点击的新闻</span></td></tr><tr><td><span>start</span></td><td><span>7/3/2019 6:43:49 AM</span></td><td><span>本次展示日志的开始时间，用于记录用户开始阅读的时间</span></td></tr><tr><td><span>end</span></td><td><span>7/3/2019 7:06:06 AM</span></td><td><span>本次展示日志的结束时间，用于记录用户结束阅读的时间</span></td></tr><tr><td><span>dwelltime_pos</span></td><td><span>34 83 79 ...</span></td><td><span>本次展示日志中用户点击新闻的浏览时长，以空格分隔。该字段用于评估用户对本次展示中点击新闻的兴趣程度</span></td></tr></tbody></table></figure><h2 id='3-模拟日志产生'><span>3. 模拟日志产生</span></h2><h3 id='31-数据集处理'><span>3.1. 数据集处理</span></h3><p><span>对于news.tsv，我们删去了无用字段Title entity和Entity content，并将news_id字段去除前导N，转换为int存储，方便后续在数据库中设置主键和建立索引。除此以外，我们针对所有英文字段进行了清洗，去除了换行符、制表符、转义符等无用数据。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="Python" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="python"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">read_csv</span>(<span class="cm-string">"./datatest/news.csv"</span>, <span class="cm-variable">sep</span><span class="cm-operator">=</span><span class="cm-string">'\t'</span>, <span class="cm-variable">encoding</span><span class="cm-operator">=</span><span class="cm-string">'utf-8'</span>)</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>.<span class="cm-property">drop</span>([<span class="cm-string">"Title entity"</span>, <span class="cm-string">"Entity content"</span>], <span class="cm-variable">axis</span><span class="cm-operator">=</span><span class="cm-number">1</span>, <span class="cm-variable">inplace</span><span class="cm-operator">=</span><span class="cm-keyword">True</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>.<span class="cm-property">rename</span>(<span class="cm-variable">columns</span><span class="cm-operator">=</span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string">"News ID"</span>: <span class="cm-string">"news_id"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string">"Category"</span>: <span class="cm-string">"category"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string">"Topic"</span>: <span class="cm-string">"topic"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string">"Headline"</span>: <span class="cm-string">"headline"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-string">"News body"</span>: <span class="cm-string">"content"</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  }, <span class="cm-variable">inplace</span><span class="cm-operator">=</span><span class="cm-keyword">True</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>[<span class="cm-string">"news_id"</span>] <span class="cm-operator">=</span> <span class="cm-variable">news</span>[<span class="cm-string">"news_id"</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">n</span>: <span class="cm-builtin">int</span>(<span class="cm-variable">n</span>[<span class="cm-number">1</span>:]) <span class="cm-operator">-</span> <span class="cm-number">10000</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">def</span> <span class="cm-def">etl_f</span>(<span class="cm-variable">x</span>):</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">x</span> <span class="cm-operator">=</span> <span class="cm-builtin">str</span>(<span class="cm-variable">x</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">x</span> <span class="cm-operator">=</span> <span class="cm-variable">x</span>.<span class="cm-property">replace</span>(<span class="cm-string">"\'"</span>, <span class="cm-string">''</span>).<span class="cm-property">replace</span>(<span class="cm-string">'\"'</span>, <span class="cm-string">''</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">x</span> <span class="cm-operator">=</span> <span class="cm-variable">x</span>.<span class="cm-property">replace</span>(<span class="cm-string">'"'</span>, <span class="cm-string">''</span>).<span class="cm-property">replace</span>(<span class="cm-string">"'"</span>, <span class="cm-string">''</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">x</span> <span class="cm-operator">=</span> <span class="cm-variable">x</span>.<span class="cm-property">replace</span>(<span class="cm-string">'\n'</span>, <span class="cm-string">''</span>).<span class="cm-property">replace</span>(<span class="cm-string">'\r'</span>, <span class="cm-string">''</span>).<span class="cm-property">replace</span>(<span class="cm-string">'\t'</span>, <span class="cm-string">''</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable">x</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>[<span class="cm-string">'category'</span>] <span class="cm-operator">=</span> <span class="cm-variable">news</span>[<span class="cm-string">'category'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-variable">etl_f</span>(<span class="cm-variable">x</span>))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>[<span class="cm-string">'topic'</span>] <span class="cm-operator">=</span> <span class="cm-variable">news</span>[<span class="cm-string">'topic'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-variable">etl_f</span>(<span class="cm-variable">x</span>))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>[<span class="cm-string">'headline'</span>] <span class="cm-operator">=</span> <span class="cm-variable">news</span>[<span class="cm-string">'headline'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-variable">etl_f</span>(<span class="cm-variable">x</span>))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">news</span>[<span class="cm-string">'content'</span>] <span class="cm-operator">=</span> <span class="cm-variable">news</span>[<span class="cm-string">'content'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-variable">etl_f</span>(<span class="cm-variable">x</span>))</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 440px;"></div><div class="CodeMirror-gutters" style="display: none; height: 440px;"></div></div></div></pre><p><span>最后我们得到了113762条新闻，每条新闻包含category、topic、headline和content字段。</span></p><p><span>对于点击记录，我们将train.tsv和valid.tsv合并，得到50万条记录（该记录每当用户点开新闻页面产生一条），通过分析每条记录的各个字段，可以将他们分成两部分：</span></p><p><span>1、用户历史点击记录，指在当前时刻，用户的历史中所有曾经点击过新闻ID、对应的点击事件和浏览的持续时间；</span></p><p><span>2、当前页面点击记录，指只针对当前浏览页面存在的新闻，用户点击和没有点击的新闻ID、点击过新闻的浏览持续时间、以及当前记录的最初始时间。</span></p><p><span>针对这两个部分，我们发现前者可以精确到每次点击的时间点和该次浏览的持续时间，但后者只能精确到打开该页面的时间点，对于该页面上点击的新闻，只有浏览的持续时间。并且我们发现历史点击记录包含了当前页面点击记录，并且前者总数远远大于后者。因此最后我们使用用户历史点击记录，即字段ClicknewsID、dwelltime和exposure_time。</span></p><p><span>我们使用</span><code>.split</code><span>函数将其分割为4元组，即</span><code>(user_id</code><strong><code>,</code></strong><code>news_id</code><strong><code>,</code></strong><code>start_ts</code><strong><code>,</code></strong><code>duration)</code><span>，分别表示用户ID、新闻ID、新闻点击时间戳、浏览时间，这里我们将诸如</span><code>6/19/2019 5:10:01 AM</code><span>的字符串转换为时间戳，用</span><code>unsigned int</code><span>，从而便于排序和查询速度。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="Python" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="python"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">import</span> <span class="cm-variable">pandas</span> <span class="cm-keyword">as</span> <span class="cm-variable">pd</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">train</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">read_csv</span>(<span class="cm-string">"./datatest/train.tsv"</span>, <span class="cm-variable">sep</span><span class="cm-operator">=</span><span class="cm-string">'\t'</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">valid</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">read_csv</span>(<span class="cm-string">"./datatest/valid.tsv"</span>, <span class="cm-variable">sep</span><span class="cm-operator">=</span><span class="cm-string">'\t'</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">logdata</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">concat</span>([<span class="cm-variable">train</span>, <span class="cm-variable">valid</span>], <span class="cm-variable">axis</span><span class="cm-operator">=</span><span class="cm-number">0</span>) <span class="cm-comment"># 合并train和valid</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 去除UserID的前导U，并转换为int</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">logdata</span>[<span class="cm-string">'UserID'</span>] <span class="cm-operator">=</span> <span class="cm-variable">logdata</span>[<span class="cm-string">'UserID'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-builtin">int</span>(<span class="cm-variable">x</span>[<span class="cm-number">1</span>:]))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 将诸如6/19/2019 5:10:01 AM#TAB#6/19/2019 5:11:58 AM的字段以#TAB拆分，并转换为时间戳</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">def</span> <span class="cm-def">f1</span>(<span class="cm-variable">str_t</span>):</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">str_t_list</span> <span class="cm-operator">=</span> <span class="cm-variable">str_t</span>.<span class="cm-property">split</span>(<span class="cm-string">'#TAB#'</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">timestamp_list</span> <span class="cm-operator">=</span> <span class="cm-builtin">list</span>(<span class="cm-builtin">map</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">str_t</span>: <span class="cm-builtin">str</span>(<span class="cm-builtin">int</span>(<span class="cm-variable">datetime</span>.<span class="cm-property">strptime</span>(<span class="cm-variable">str_t</span>, <span class="cm-string">'%m/%d/%Y %I:%M:%S %p'</span>).<span class="cm-property">timestamp</span>())), <span class="cm-variable">str_t_list</span>))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-string">' '</span>.<span class="cm-property">join</span>(<span class="cm-variable">timestamp_list</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">logdata</span>[<span class="cm-string">'exposure_time'</span>] <span class="cm-operator">=</span> <span class="cm-variable">logdata</span>[<span class="cm-string">'exposure_time'</span>].<span class="cm-property">apply</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">str_t</span>: <span class="cm-variable">f1</span>(<span class="cm-variable">str_t</span>))</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 去除冗余的UserID行</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">logdata</span> <span class="cm-operator">=</span> <span class="cm-variable">logdata</span>.<span class="cm-property">drop_duplicates</span>(<span class="cm-variable">subset</span><span class="cm-operator">=</span><span class="cm-string">'UserID'</span>, <span class="cm-variable">keep</span><span class="cm-operator">=</span><span class="cm-string">'last'</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> <span class="cm-variable">tqdm</span> <span class="cm-keyword">import</span> <span class="cm-variable">tqdm</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 创建一个新的DataFrame</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">df</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">DataFrame</span>(<span class="cm-variable">columns</span><span class="cm-operator">=</span>[<span class="cm-string">'user_id'</span>, <span class="cm-string">'news_id'</span>, <span class="cm-string">'start_ts'</span>, <span class="cm-string">'duration'</span>])</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 遍历行，将历史数据字段用空格拆分为四元组，并存入新的dataframe</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">for</span> <span class="cm-variable">_</span>, <span class="cm-variable">row</span> <span class="cm-keyword">in</span> <span class="cm-variable">tqdm</span>(<span class="cm-variable">logdata</span>.<span class="cm-property">iterrows</span>(), <span class="cm-variable">total</span><span class="cm-operator">=</span><span class="cm-builtin">len</span>(<span class="cm-variable">logdata</span>)):</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">user_id</span> <span class="cm-operator">=</span> <span class="cm-builtin">int</span>(<span class="cm-variable">row</span>[<span class="cm-string">'UserID'</span>])</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">news_id_list</span> <span class="cm-operator">=</span> <span class="cm-variable">row</span>[<span class="cm-string">'ClicknewsID'</span>].<span class="cm-property">split</span>(<span class="cm-string">' '</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">duration_list</span> <span class="cm-operator">=</span> <span class="cm-variable">row</span>[<span class="cm-string">'dwelltime'</span>].<span class="cm-property">split</span>(<span class="cm-string">' '</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">start_timestamp_list</span> <span class="cm-operator">=</span> <span class="cm-variable">row</span>[<span class="cm-string">'exposure_time'</span>].<span class="cm-property">split</span>(<span class="cm-string">' '</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-comment"># 判断list个数是否匹配</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">assert</span> <span class="cm-builtin">len</span>(<span class="cm-variable">news_id_list</span>) <span class="cm-operator">==</span> <span class="cm-builtin">len</span>(<span class="cm-variable">duration_list</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">assert</span> <span class="cm-builtin">len</span>(<span class="cm-variable">news_id_list</span>) <span class="cm-operator">==</span> <span class="cm-builtin">len</span>(<span class="cm-variable">start_timestamp_list</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">for</span> <span class="cm-variable">i</span> <span class="cm-keyword">in</span> <span class="cm-builtin">range</span>(<span class="cm-builtin">len</span>(<span class="cm-variable">news_id_list</span>)):</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">news_id</span> <span class="cm-operator">=</span> <span class="cm-builtin">int</span>(<span class="cm-variable">news_id_list</span>[<span class="cm-variable">i</span>][<span class="cm-number">1</span>:]) <span class="cm-operator">-</span> <span class="cm-number">10000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">duration_time</span> <span class="cm-operator">=</span> <span class="cm-builtin">int</span>(<span class="cm-variable">duration_list</span>[<span class="cm-variable">i</span>])</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">start_timestamp</span> <span class="cm-operator">=</span> <span class="cm-builtin">int</span>(<span class="cm-variable">start_timestamp_list</span>[<span class="cm-variable">i</span>])</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment"># 新增一行四元组</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">df</span>.<span class="cm-property">loc</span>[<span class="cm-builtin">len</span>(<span class="cm-variable">df</span>)] <span class="cm-operator">=</span> [<span class="cm-variable">user_id</span>, <span class="cm-variable">news_id</span>, <span class="cm-variable">start_timestamp</span>, <span class="cm-variable">duration_time</span>]</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">df</span> <span class="cm-operator">=</span> <span class="cm-variable">df</span>.<span class="cm-property">sort_values</span>(<span class="cm-string">'start_timestamp'</span>, <span class="cm-variable">ascending</span><span class="cm-operator">=</span><span class="cm-keyword">True</span>)</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 924px;"></div><div class="CodeMirror-gutters" style="display: none; height: 924px;"></div></div></div></pre><p><span>最后保存得到27182788条点击记录，我们将其按照start_ts进行排序，并存储在csv文件中。</span></p><h3 id='32-日志生成'><span>3.2. 日志生成</span></h3><p><span>我们直接读取上述处理过后的csv文件，将其使用</span><code>.iterrows()</code><span>按行迭代。我们设置一个当前时间戳，每当新读取一行点击时间，我们用新时间戳减去当前时间戳得到时差delta，并让程序睡眠delta秒，睡眠完成后再将其写入到log.txt文件中。由flume监视log.txt的改变，当有新的内容在文件末尾写入时，就将其采集给kafka消息队列中。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="Python"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="python"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">logfile</span> <span class="cm-operator">=</span> <span class="cm-variable">pd</span>.<span class="cm-property">read_csv</span>(<span class="cm-string">"./PENS/log.csv"</span>)</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">current_timestamp</span> <span class="cm-operator">=</span> <span class="cm-variable">logfile</span>.<span class="cm-property">iloc</span>[<span class="cm-number">0</span>][<span class="cm-string">'start_ts'</span>]</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">for</span> <span class="cm-variable">idx</span>, <span class="cm-variable">row</span> <span class="cm-keyword">in</span> <span class="cm-variable">logfile</span>.<span class="cm-property">iterrows</span>():</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">time</span>.<span class="cm-property">sleep</span>(<span class="cm-variable">row</span>[<span class="cm-string">'start_ts'</span>] <span class="cm-operator">-</span> <span class="cm-variable">current_timestamp</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">with</span> <span class="cm-builtin">open</span>(<span class="cm-string">'./click.log'</span>, <span class="cm-string">'+a'</span>) <span class="cm-keyword">as</span> <span class="cm-variable">f</span>:</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">f</span>.<span class="cm-property">write</span>(<span class="cm-string">" "</span>.<span class="cm-property">join</span>(<span class="cm-builtin">list</span>(<span class="cm-builtin">map</span>(<span class="cm-keyword">lambda</span> <span class="cm-variable">x</span>: <span class="cm-builtin">str</span>(<span class="cm-variable">x</span>), <span class="cm-variable">row</span>.<span class="cm-property">to_list</span>()))) <span class="cm-operator">+</span> <span class="cm-string">'\n'</span>)</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-variable">current_timestamp</span> <span class="cm-operator">=</span> <span class="cm-variable">row</span>[<span class="cm-string">'start_ts'</span>]</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 154px;"></div><div class="CodeMirror-gutters" style="display: none; height: 154px;"></div></div></div></pre><h2 id='4-数据采集'><span>4. 数据采集</span></h2><h3 id='41-flume日志采集'><span>4.1. Flume日志采集</span></h3><p><span>我们将Flume与模拟日志产生程序部署在同一台服务器上，因此Flume可以使用</span><code>tail -F</code><span> 命令实时读取生成的log文件，但是由于</span><code>exec</code><span> 类型的读取无法实现断点续传，因此我们使用了</span><code>taildir</code><span> 作为Flume的输入源。</span></p><p><span>Memory Channel在使用的过程中受内存容量的限制不能缓存大量的消息，并且如果Memory Channel中的消息没来得及写入Sink，此时Agent出现故障就会造成数据丢失。File Channel虽然能够缓存更多的消息，但如果缓存下来的消息还没有写入Sink，此时Agent出现故障则File Channel中的消息不能被继续使用，直到该Agent重新恢复才能够继续使用File Channel中的消息。Kafka Channel相对于Memory Channel和File Channel存储容量更大、容错能力更强，弥补了其他两种Channel的短板。因此，我们认为在实时计算的场景下使用Kafka Channel是较优的选择，通过搭建Kafka伪分布式集群的方法在廉价的硬件条件下完成高效的消息发布和订阅。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="Bash" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="bash"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">#agent_name</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1<span class="cm-def">.sources</span><span class="cm-operator">=</span>r1</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1<span class="cm-def">.sinks</span><span class="cm-operator">=</span>k1</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1<span class="cm-def">.channels</span><span class="cm-operator">=</span>c1</span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">#source的配置</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># source类型</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.type <span class="cm-operator">=</span> TAILDIR</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 元数据位置</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.positionFile <span class="cm-operator">=</span> /usr/local/work/generate/streaming_access.log</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment"># 监控的目录</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.filegroups <span class="cm-operator">=</span> f1</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.filegroups<span class="cm-def">.f1</span><span class="cm-operator">=</span>/usr/local/work/generate/.*log</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.fileHeader <span class="cm-operator">=</span> <span class="cm-atom">true</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.interceptors <span class="cm-operator">=</span> i1</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.interceptors.i1.type <span class="cm-operator">=</span> timestamp</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">#channel的配置</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.type <span class="cm-operator">=</span> org.apache.flume.channel.kafka.KafkaChannel</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.bootstrap.servers <span class="cm-operator">=</span> <span class="cm-number">100</span>.81.9.75:9092,100.81.9.75:9093，100.81.9.75:9094</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.topic <span class="cm-operator">=</span> kafka_streaming_topic</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.group.id <span class="cm-operator">=</span> kafka_streaming_topic_01</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.timeout.ms <span class="cm-operator">=</span> <span class="cm-number">70000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.request.timeout.ms <span class="cm-operator">=</span> <span class="cm-number">80000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.fetch.max.wait<span class="cm-def">.ms</span><span class="cm-operator">=</span><span class="cm-number">7000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.offset.flush.interval.ms <span class="cm-operator">=</span> <span class="cm-number">50000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.session.timeout.ms <span class="cm-operator">=</span> <span class="cm-number">70000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.heartbeat.interval.ms <span class="cm-operator">=</span> <span class="cm-number">60000</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.channels.c1.kafka.consumer.enable.auto.commit <span class="cm-operator">=</span> <span class="cm-atom">false</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">#用channel链接source</span></span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">a1.sources.r1.channels <span class="cm-operator">=</span> c1</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 704px;"></div><div class="CodeMirror-gutters" style="display: none; height: 704px;"></div></div></div></pre><p><span>因为我们使用了Kafka Channel，所以能在日志收集层只配置Source组件和Kafka Channel组件，不需要再配置Sink组件，只需要在Kafka Channel中标出消费者对列的服务器IP以及端口即可，减少了日志收集层启动的进程数并且有效降低服务器内存、磁盘等资源使用率，日志汇聚层可以只配置Kafka Channel和Sink，不需要再配置Source，减少日志汇聚层的进程数，这样的配置既能降低服务器的资源使用率又能减少Event在网络之间的传输，有效提高日志采集系统的性能。</span></p><h3 id='42-structured-streaming实时流计算'><span>4.2. Structured Streaming实时流计算</span></h3><p><span>针对时刻都在产生的新闻流点击记录，我们需要使用流计算工具，在数据到达的时候就立即对其进行处理，计算存储到数据库中。我们使用Apache Spark的Structured Streaming来实现实时流计算，当消息生产者发送的消息到达某个topic的消息队列时，就会触发计算。相比于 Spark Streaming 建立在 RDD数据结构上面，Structured Streaming 是建立在 SparkSQL基础上，DataFrame的绝大部分API也能够用在流计算上，实现了流计算和批处理的一体化，并且由于SparkSQL的优化，具有更好的性能，容错性也更好。</span></p><p><span>当读取到Kafka中的新闻点击流数据时，将数据存储到t_news_browse_record浏览记录表中，并根据news_id增加t_news中对应新闻的总浏览量和浏览时长；过一天就立刻统计前一天各个category新闻的浏览量与浏览时长。</span></p><h2 id='5-数据存储设计'><span>5. 数据存储设计</span></h2><h3 id='51-tnews'><span>5.1. t_news</span></h3><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">table</span> t_news</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">(</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  news_id &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">primary</span> <span class="cm-keyword">key</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  headline &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-type">varchar</span><span class="cm-bracket">(</span><span class="cm-number">256</span><span class="cm-bracket">)</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  content &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-type">mediumtext</span> &nbsp; <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  category &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-type">varchar</span><span class="cm-bracket">(</span><span class="cm-number">16</span><span class="cm-bracket">)</span> &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  topic &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-type">varchar</span><span class="cm-bracket">(</span><span class="cm-number">64</span><span class="cm-bracket">)</span> &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  total_browse_num &nbsp; &nbsp; &nbsp;<span class="cm-type">int</span> <span class="cm-type">unsigned</span> <span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  total_browse_duration <span class="cm-type">int</span> <span class="cm-type">unsigned</span> <span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">constraint</span> t_news_news_id_uindex</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">unique</span> <span class="cm-bracket">(</span>news_id<span class="cm-bracket">)</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 286px;"></div><div class="CodeMirror-gutters" style="display: none; height: 286px;"></div></div></div></pre><p><span>该表存储了所有的新闻信息，包含新闻ID、标题headline、内容content、类别category、主题topic，以及用于统计的总浏览次数total_browse_num和总浏览时长total_browse_duration。</span></p><p><span>我们将new_id设置为主键，使其自动添加了索引，从而加快针对某个或某些new_id的查询；在考虑针对某个新闻类别或主题的查询时，我们尝试过将category和topic也建立索引，但是我们发现这两个字段存在大量相等项，如在113762条新闻中，只有15个类别和372个主题，这样建立的索引对速度的提升微乎其微，并且由于是针对字符串建立索引，会造成较大的空间消耗，因此最后没有选择针对这两项建立索引。</span></p><h3 id='52-tnewsbrowserecord'><span>5.2. t_news_browse_record</span></h3><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL" style="break-inside: unset;"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">table</span> t_news_browse_record</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">(</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  user_id &nbsp; <span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  news_id &nbsp; <span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  start_ts &nbsp;<span class="cm-type">int</span> <span class="cm-type">unsigned</span> <span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  duration &nbsp;<span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  start_day <span class="cm-type">int</span> <span class="cm-type">unsigned</span> <span class="cm-keyword">not</span> <span class="cm-atom">null</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">index</span> t_news_browse_record_news_id_index</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">on</span> t_news_browse_record <span class="cm-bracket">(</span>news_id<span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">index</span> t_news_browse_record_start_day_index</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">on</span> t_news_browse_record <span class="cm-bracket">(</span>start_day<span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">index</span> t_news_browse_record_start_ts_index</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">on</span> t_news_browse_record <span class="cm-bracket">(</span>start_ts<span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">index</span> t_news_browse_record_user_id_index</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">on</span> t_news_browse_record <span class="cm-bracket">(</span>user_id<span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 440px;"></div><div class="CodeMirror-gutters" style="display: none; height: 440px;"></div></div></div></pre><p><span>该表存储用户的新闻浏览记录，包括用户ID、新闻ID、浏览时间戳、浏览持续时间和浏览的天戳，这里的天戳指距离1970年的天数，是将时间戳整除24</span><em><span>60</span></em><span>60得到。该表会在kafka队列出口的实时流计算程序中被不断添加新的行。</span></p><p><span>我们将以秒和天作为最小单位的时间都以整数表示，在具体需要显示时再将其转换，目的是便于建立索引、加快诸如根据天数统计相关信息等等。</span></p><p><span>我们针对用户ID、新闻ID、时间戳start_ts、天戳start_day都建立了索引，分别加快了：</span></p><ol start='' ><li><p><span>用户ID索引：加快针对某些用户浏览情况的查询</span></p></li><li><p><span>新闻ID索引：加快针对某些/某类新闻被点击情况的查询</span></p></li><li><p><span>时间戳start_ts和天戳start_day索引：加快针对某个时间段的用户浏览情况和新闻被点击情况的查询</span></p></li></ol><p><span>该表的行数很多，最多时可达27182788行，因此若进行综合查询（如先查询某一类别的新闻被点击情况），当涉及到表的join时，速度会变得非常慢；因此我们添加了下列表用于实时存储一些冗余信息。</span></p><h3 id='53-tnewsdailycategory'><span>5.3. t_news_daily_category</span></h3><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">create</span> <span class="cm-keyword">table</span> t_news_daily_category</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">(</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  day_stamp &nbsp; &nbsp; &nbsp; <span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  category &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-type">varchar</span><span class="cm-bracket">(</span><span class="cm-number">16</span><span class="cm-bracket">)</span> <span class="cm-keyword">not</span> <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  browse_count &nbsp; &nbsp;<span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  browse_duration <span class="cm-type">int</span> &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-atom">null</span><span class="cm-punctuation">,</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">constraint</span> t_news_daily_category_pk</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">unique</span> <span class="cm-bracket">(</span>day_stamp<span class="cm-punctuation">,</span> category<span class="cm-bracket">)</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 198px;"></div><div class="CodeMirror-gutters" style="display: none; height: 198px;"></div></div></div></pre><p><span>该表存储某天某类别的新闻被浏览的次数和持续时间。作为冗余表，他可以被t_news_browse_record中被直接计算出来，但是由于t_news_browse_record的行数过多，如果按照类别查询，则会与t_news进行join操作，导致查询时间大量增加。因此我们设置定时任务，在kafka队列出口的实时流计算程序中判断是否进入了新的一天（根据四元组中的时间戳），如果进入新的一天，则统计前一天的新闻类别点击情况，并存入本表格，大大提升查询效率。</span></p><p><span>我们可以根据不同查询任务设置不同的冗余表，并设置类似定时任务程序来从主表中统计相关数据，进而存储到冗余表中，在查询相关任务时直接针对冗余表进行查询，大大提升效率。</span></p><h2 id='6-功能实现'><span>6. 功能实现</span></h2><h3 id='61-标题模糊查询'><span>6.1. 标题模糊查询</span></h3><p><span>根据用户输入的标题返回五条最为匹配的新闻标题。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> news_id<span class="cm-punctuation">,</span>headline </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> headline </span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">like</span> <span class="cm-string">'%ideal%'</span> <span class="cm-keyword">limit</span> <span class="cm-number">5</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 88px;"></div><div class="CodeMirror-gutters" style="display: none; height: 88px;"></div></div></div></pre><h3 id='62-查询单个新闻的生命周期'><span>6.2. 查询单个新闻的生命周期</span></h3><p><span>根据新闻标题，查找指定新闻在指定时间内（可选）的日浏览量变化，前端使用折线图进行展示。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> <span class="cm-keyword">count</span><span class="cm-bracket">(</span><span class="cm-operator">*</span><span class="cm-bracket">)</span><span class="cm-punctuation">,</span> from_unixtime<span class="cm-bracket">(</span>tnbr<span class="cm-variable-2">.start_ts</span><span class="cm-punctuation">,</span><span class="cm-string">"%Y-%m-%d"</span><span class="cm-bracket">)</span> </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news_browse_record tnbr </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> <span class="cm-number">1560355200</span> <span class="cm-operator">&lt;=</span> tnbr<span class="cm-variable-2">.start_ts</span> <span class="cm-keyword">and</span> tnbr<span class="cm-variable-2">.start_ts</span> <span class="cm-operator">&lt;=</span> <span class="cm-number">1562083200</span> <span class="cm-keyword">and</span> news_id <span class="cm-operator">=</span> <span class="cm-number">12</span> </span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">group</span> <span class="cm-keyword">by</span> tnbr<span class="cm-variable-2">.news_id</span> <span class="cm-punctuation">,</span>from_unixtime<span class="cm-bracket">(</span>tnbr<span class="cm-variable-2">.start_ts</span><span class="cm-punctuation">,</span><span class="cm-string">"%Y-%m-%d"</span><span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 88px;"></div><div class="CodeMirror-gutters" style="display: none; height: 88px;"></div></div></div></pre><h3 id='63-查询某些种类的新闻的变化情况'><span>6.3. 查询某些种类的新闻的变化情况</span></h3><p><span>查询选择的新闻种类在指定时间内日浏览数的变化，单种类查询结果如下图所示：</span></p><p><span>同时能支持选取多个新闻种类进行查询，多查询结果如下：</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> day_stamp<span class="cm-punctuation">,</span>category<span class="cm-punctuation">,</span>browse_count </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news_daily_category </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> day_stamp<span class="cm-operator">&gt;=</span><span class="cm-number">18059</span> <span class="cm-keyword">and</span> day_stamp<span class="cm-operator">&lt;=</span><span class="cm-number">18078</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">and</span> <span class="cm-bracket">(</span>category <span class="cm-operator">=</span> <span class="cm-string">'autos'</span> <span class="cm-keyword">or</span> category <span class="cm-operator">=</span> <span class="cm-string">'entertainment'</span> <span class="cm-keyword">or</span> category <span class="cm-operator">=</span> <span class="cm-string">'finance'</span><span class="cm-bracket">)</span> </span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">group</span> <span class="cm-keyword">by</span> day_stamp<span class="cm-punctuation">,</span>category<span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 110px;"></div><div class="CodeMirror-gutters" style="display: none; height: 110px;"></div></div></div></pre><h3 id='64-查询用户兴趣变化'><span>6.4. 查询用户兴趣变化</span></h3><p><span>查询指定用户在指定时间内不同种类新闻的浏览数量。</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> <span class="cm-keyword">count</span><span class="cm-bracket">(</span><span class="cm-operator">*</span><span class="cm-bracket">)</span><span class="cm-punctuation">,</span>n<span class="cm-variable-2">.category</span> </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news <span class="cm-keyword">as</span> n </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">join</span> <span class="cm-bracket">(</span><span class="cm-keyword">select</span> tnbr<span class="cm-variable-2">.news_id</span><span class="cm-punctuation">,</span>tnbr<span class="cm-variable-2">.start_ts</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-keyword">from</span> t_news_browse_record <span class="cm-keyword">as</span> tnbr </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-keyword">where</span> tnbr<span class="cm-variable-2">.user_id</span><span class="cm-operator">=</span><span class="cm-number">12000</span> <span class="cm-keyword">and</span> tnbr<span class="cm-variable-2">.start_ts</span><span class="cm-operator">&gt;=</span><span class="cm-number">1560355200</span> <span class="cm-keyword">and</span> tnbr<span class="cm-variable-2">.start_ts</span><span class="cm-operator">&lt;=</span><span class="cm-number">1561996800</span><span class="cm-bracket">)</span> <span class="cm-keyword">as</span> t </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">on</span> n<span class="cm-variable-2">.news_id</span><span class="cm-operator">=</span>t<span class="cm-variable-2">.news_id</span> </span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">group</span> <span class="cm-keyword">by</span> n<span class="cm-variable-2">.category</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 176px;"></div><div class="CodeMirror-gutters" style="display: none; height: 176px;"></div></div></div></pre><h3 id='65-组合查询'><span>6.5. 组合查询</span></h3><p><span>根据用户id、新闻标题长度、新闻内容长度、新闻种类、新闻主题、起始时间组合查询用户浏览过的所有新闻。示例如下：</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> <span class="cm-keyword">distinct</span> new<span class="cm-variable-2">.headline</span><span class="cm-punctuation">,</span> new<span class="cm-variable-2">.news_id</span> </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news_browse_record <span class="cm-keyword">as</span> tnbr <span class="cm-keyword">join</span> t_news <span class="cm-keyword">as</span> new </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">on</span> tnbr<span class="cm-variable-2">.news_id</span> <span class="cm-operator">=</span> new<span class="cm-variable-2">.news_id</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> tnbr<span class="cm-variable-2">.start_ts</span> <span class="cm-operator">&gt;=</span> <span class="cm-number">1560355200</span> <span class="cm-keyword">and</span> tnbr<span class="cm-variable-2">.start_ts</span> <span class="cm-operator">&lt;=</span> <span class="cm-number">1561996800</span> <span class="cm-keyword">and</span> user_id <span class="cm-operator">&gt;=</span> <span class="cm-number">1008</span> <span class="cm-keyword">and</span> user_id <span class="cm-operator">&lt;=</span> <span class="cm-number">1008</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">and</span>  tnbr<span class="cm-variable-2">.news_id</span> <span class="cm-keyword">in</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-bracket">(</span><span class="cm-keyword">select</span> news_id <span class="cm-keyword">from</span> t_news n </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">where</span> LENGTH<span class="cm-bracket">(</span>n<span class="cm-variable-2">.headline</span><span class="cm-bracket">)</span> <span class="cm-operator">&gt;=</span> <span class="cm-number">7</span> &nbsp;<span class="cm-keyword">and</span> LENGTH<span class="cm-bracket">(</span>n<span class="cm-variable-2">.headline</span><span class="cm-bracket">)</span> <span class="cm-operator">&lt;=</span> <span class="cm-number">245</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">and</span> LENGTH<span class="cm-bracket">(</span>n<span class="cm-variable-2">.content</span><span class="cm-bracket">)</span> <span class="cm-operator">&gt;=</span> <span class="cm-number">2</span> <span class="cm-keyword">and</span> LENGTH<span class="cm-bracket">(</span>n<span class="cm-variable-2">.content</span><span class="cm-bracket">)</span> <span class="cm-operator">&lt;=</span> <span class="cm-number">5000</span> <span class="cm-keyword">and</span> n<span class="cm-variable-2">.topic</span> <span class="cm-keyword">like</span> <span class="cm-string">'%soccer%'</span><span class="cm-bracket">)</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 198px;"></div><div class="CodeMirror-gutters" style="display: none; height: 198px;"></div></div></div></pre><p><span>同时，我们可以查看新闻的具体内容。</span></p><h3 id='66-实时新闻推荐'><span>6.6. 实时新闻推荐</span></h3><p><span>在该界面中，我们使用websocket实时从后端获取用户最新点击的新闻记录，并根据用户最近二十条中浏览最多的两个新闻种类向用户进行推荐。</span></p><p><span>因为我们在</span><code>t_news</code><span>表中实时记录了每一条新闻的总浏览量和总浏览时间，所以我们根据总浏览量和总浏览时间的一个加权值（0.9</span><em><span>总浏览量+0.1</span></em><span>总浏览时长）对用户最近喜欢的两个新闻种类降序排列，选取其中的十条向用户进行推荐。</span></p><h3 id='67-查询日志'><span>6.7. 查询日志</span></h3><p><span>我们在调用api进行实时查询或者静态查询时，将使用到的sql语句和执行时间记录下来，能够记录所有的SQL查询记录和查询时间，便于对性能指标进行检验和优化以及对bug的定位。</span></p><h2 id='7-加分项'><span>7. 加分项</span></h2><h3 id='71-支持大规模的日志数据实时采集与存储'><span>7.1. 支持大规模的日志数据实时采集与存储</span></h3><p><span>使用</span><code>taildir</code><span> 作为Flume的输入源，能够实时监控多个日志文件，其断点续传的功能使得日志数据的采集更加稳定，即使在中断和重启的情况下也能够继续采集日志数据，确保了数据的完整性和可靠性；同时，我们使用了相对于Memory Channel和File Channel存储容量更大、容错能力更强的Kafka Channel，通过搭建Kafka伪分布式集群的方法在廉价的硬件条件下完成高效的消息发布和订阅从而支持了更大规模日志数据的采集。</span></p><p><span>为了进一步提高计算效率，我们将存储系统和Spark实时计算系统部署在两台不同的服务器上。这样做可以充分利用服务器的算力和内存资源，实现更高效的Spark结构化流实时计算。通过将计算和存储分离，我们可以针对特定的任务需求调配更多的计算资源或存储资源，以优化整个系统的性能。这种部署方式还能够有效避免资源竞争和冲突，提高系统的稳定性和可靠性。</span></p><p><span>综上所述，通过使用taildir作为输入源、Kafka通道作为存储通道，并将存储系统和Spark实时计算系统分别部署在不同的服务器上，我们能够充分发挥各项技术的优势，实现高效、稳定和可扩展的大规模日志数据采集和实时计算。</span></p><h3 id='72-提高查询性能'><span>7.2. 提高查询性能</span></h3><h4 id='721-数据反规范化'><span>7.2.1. 数据反规范化</span></h4><p><span>我们根据具体需求，对数据进行规范化或反规范化。规范化可以减少数据冗余和维护复杂性，但在查询性能方面可能存在一定的影响而反规范化可以提高查询性能。</span></p><p><span>我们设置了t_news_daily_category表，该表存储某天某类别的新闻被浏览的次数和持续时间。作为冗余表，他可以被t_news_browse_record中被直接计算出来，但是由于t_news_browse_record的行数过多，如果按照类别查询，则会与t_news进行join操作，导致查询时间大量增加。因此我们设置定时任务，在kafka队列出口的实时流计算程序中判断是否进入了新的一天（根据四元组中的时间戳），如果进入新的一天，则统计前一天的新闻类别点击情况，并存入本表格，大大提升查询效率。效率对比如下：</span></p><p><span>优化前，在t_news_browse_record表中进行查询：</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> <span class="cm-keyword">count</span><span class="cm-bracket">(</span>tnbr<span class="cm-variable-2">.news_id</span><span class="cm-bracket">)</span><span class="cm-punctuation">,</span>start_day</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> <span class="cm-bracket">(</span>t_news_browse_record tnbr <span class="cm-keyword">join</span> <span class="cm-bracket">(</span><span class="cm-keyword">select</span> news_id <span class="cm-keyword">from</span> t_news <span class="cm-keyword">where</span> category<span class="cm-operator">=</span><span class="cm-string">'autos'</span><span class="cm-bracket">)</span> <span class="cm-keyword">as</span> n <span class="cm-keyword">on</span> tnbr<span class="cm-variable-2">.news_id</span> <span class="cm-operator">=</span> n<span class="cm-variable-2">.news_id</span><span class="cm-bracket">)</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> tnbr<span class="cm-variable-2">.start_day</span><span class="cm-operator">&gt;=</span><span class="cm-number">18061</span> <span class="cm-keyword">and</span> tnbr<span class="cm-variable-2">.start_day</span><span class="cm-operator">&lt;=</span><span class="cm-number">18072</span></span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">group</span> <span class="cm-keyword">by</span> tnbr<span class="cm-variable-2">.start_day</span><span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 110px;"></div><div class="CodeMirror-gutters" style="display: none; height: 110px;"></div></div></div></pre><p><span>优化后：</span></p><pre class="md-fences md-end-block ty-contain-cm modeLoaded" spellcheck="false" lang="SQL"><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="sql"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">select</span> day_stamp<span class="cm-punctuation">,</span>category<span class="cm-punctuation">,</span>browse_count </span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">from</span> t_news_daily_category </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">where</span> day_stamp<span class="cm-operator">&gt;=</span><span class="cm-number">18061</span> <span class="cm-keyword">and</span> day_stamp<span class="cm-operator">&lt;=</span><span class="cm-number">18072</span> </span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">and</span> <span class="cm-bracket">(</span>category <span class="cm-operator">=</span> <span class="cm-string">'autos'</span><span class="cm-bracket">)</span> </span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">group</span> <span class="cm-keyword">by</span> day_stamp<span class="cm-punctuation">,</span>category<span class="cm-punctuation">;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: transparent; top: 110px;"></div><div class="CodeMirror-gutters" style="display: none; height: 110px;"></div></div></div></pre><p><span>我们可以根据不同查询任务设置不同的冗余表，并设置类似定时任务程序来从主表中统计相关数据，进而存储到冗余表中，在查询相关任务时直接针对冗余表进行查询，大大提升效率。</span></p><h4 id='722-设置索引'><span>7.2.2. 设置索引</span></h4><p><span>在t_news表中，我们将new_id设置为主键，使其自动添加了索引，从而加快针对某个或某些new_id的查询。</span></p><p><span>在t_news_browse_record表中，我们针对用户ID、新闻ID、时间戳start_ts、天戳start_day都建立了索引，分别加快了：</span></p><ol start='' ><li><p><span>用户ID索引：加快针对某些用户浏览情况的查询</span></p></li><li><p><span>新闻ID索引：加快针对某些/某类新闻被点击情况的查询</span></p></li><li><p><span>时间戳start_ts和天戳start_day索引：加快针对某个时间段的用户浏览情况和新闻被点击情况的查询</span></p></li></ol><h3 id='73-用户端优化'><span>7.3. 用户端优化</span></h3><h4 id='731-实时数据更新'><span>7.3.1. 实时数据更新</span></h4><p><span>通过WebSocket等实时通信技术，将新闻的动态变化实时推送给用户，让用户能够及时了解新闻的最新动态。</span></p><h4 id='732-数据可视化'><span>7.3.2. 数据可视化</span></h4><p><span>利用数据可视化工具将新闻随着时间的动态变化以图表等形式展示给用户，提升用户体验和可交互性。</span></p></div></div>
</body>
</html>
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 0px;
  }
  &-text {
    font-size: 16px;
  }
}
</style>
