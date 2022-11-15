module.exports = function(eleventyConfig){
  // config to watch css files that are built from sass
  eleventyConfig.setBrowserSyncConfig({
    files: './public/style/**/*.css'
  });

  eleventyConfig.addWatchTarget("./public/style/**/*.css");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};