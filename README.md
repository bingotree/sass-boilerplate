# main.scss
The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Use the `main.scss` file as the entry point for building css.

# Usage examples
I have included a package.json file with scripts for building the scss as css (cli tools) or as css-in-js (webpack) as well as webpack config files, a style guide html page, etc.

## A note on postprocessing css:
Note: Post processing can use the postcss module, which has its own config file, postcss.config.js.
This config file can be used both for the cli (non webpack) method, and for the webpack method.
