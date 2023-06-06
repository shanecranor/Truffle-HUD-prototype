// this is what would normally be used if we were using sporocarp
// export {
//   toDist,
//   useStyleSheet,
// } from "https://tfl.dev/@truffle/distribute@2.0.22/format/wc/react/index.ts";

export function useStyleSheet(styleSheet: CSSStyleSheet) {
  document.adoptedStyleSheets.push(styleSheet);
}