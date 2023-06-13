// NOTE: prettier only works with css`` and not scss``
// so use css`` for now
// export { default as css } from "https://tfl.dev/@truffle/utils@~0.0.3/css/css.ts";
export function css(strings: TemplateStringsArray, ...values: unknown[]) {
  let cssString = '';
  strings.forEach((str, i) => {
    const value = values[i];
    cssString += str;
    if (value) {
      cssString += value;
    }
  });
  const styleSheet = new CSSStyleSheet();
  // Node/dom shim doesn't seem to support this atm
  styleSheet.replaceSync?.(cssString);
  return styleSheet;
}

export { useStyleSheet } from './web-component';
