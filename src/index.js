'use strict';

var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/index.ts
var require_src = __commonJS({
  "src/index.ts"(exports, module) {
    var prettierConfig = {
      $schema: "http://json.schemastore.org/prettierrc",
      endOfLine: "lf",
      printWidth: 150,
      quoteProps: "as-needed",
      semi: true,
      singleQuote: true,
      tabWidth: 4,
      trailingComma: "none",
      useTabs: true,
      overrides: [
        {
          files: "*.yml",
          options: {
            tabWidth: 2,
            useTabs: false
          }
        }
      ]
    };
    module.exports = prettierConfig;
  }
});
var index = require_src();

module.exports = index;
