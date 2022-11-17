const eleventyPluginFeatherIcons = require('eleventy-plugin-feathericons');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig){
  // config to watch css files that are built from sass
  eleventyConfig.setBrowserSyncConfig({
    files: './public/style/**/*.css'
  });


  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(eleventyPluginFeatherIcons);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./public/style/**/*.css");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};