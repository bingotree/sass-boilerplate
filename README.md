<div align="center">
  <img height="100"
    src="https://worldvectorlogo.com/logos/sass-1.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>SASS Boilerplate</h1>
</div>


## Objective
### To provide a boilerplate of styles that:
* is easy to customize
* allows new client applications to be styled quickly, with (if desired) a consistent look and feel
* serves as a centralized repo between applications, meaning it gets better and better over time with increased usage.

### To provide a minimum of tools which:
* Demonstrate use with plain html
* Demonstrate use with js based applications
* Perform common tasks, post processing (minification, obfuscation, purifying, autoprefixing)
* Perform these tasks based on environment variables (production, develop, etc)

## Styles: main.scss
The main file should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but `@import` and comments.

Use the `main.scss` file as the entry point for building css.

## Tools:
I have included a package.json file with scripts for building the scss as css (cli tools) or as css-in-js (webpack) as well as webpack config files, a style guide html page, etc.

### A note on postprocessing css:
Note: Post processing can use the postcss module, which has its own config file, postcss.config.js.
This config file can be used both cli (non webpack) processing, and for use in webpack.

## TODO
### styles
### tools
- generate plain css with webpack instead of cli
- update style guide
- react example file
- environments
- purify CSS
- minify CSS
