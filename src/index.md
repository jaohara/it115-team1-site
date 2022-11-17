---
Title: IT115 Team 1 Project
layout: "base.njk"
---

{% import "components.njk" as ui%}

# Team 1 Project
This is the page for the IT115 Team 1 Project. It is created using the [11ty static site generator](https://www.11ty.dev/) and [Node](https://nodejs.org) in tandem with [GitHub  Actions](https://github.com/features/actions) to build and deploy the generated static page.

## How does it work?
The 11ty project is configured via the `.eleventy.js` file in the [project's root](https://github.com/jaohara/it115-team1-site). Here we can configure 11ty to look for files in a variety of formats, as well as where to output the static content generated from combining the found files. The static content for this particular site is created using files of the following type:

- [Nunjucks](https://mozilla.github.io/nunjucks/) - a templating language used to create the structure of the site
- [Sass](https://sass-lang.com/) - an extension to provide extra features to CSS
- [Markdown](https://daringfireball.net/projects/markdown/) - used for authoring the content for the individual pages 

The structure and appearance of the site are dictated by the nunjucks templates in `src/_includes` and the sass stylesheets in `src/sass`. The content for each page (including this page) is written in a `[page-name].md` file, and at compile time will be stitched together with the templates to create the final documents.

{{ ui.image("assets/img/screenshot-templates.png", "The location of the templates in the project structures")}}

## Local Development Server
While working on the project locally, 11ty is configured to look for changes to the source files, dynamically compile them to static assets, and reload any local browsers that are currently viewing the content. This allows for a pretty rapid development workflow where changes can be immediately previewed or rolled back.

This configuration is handled by adding a few scripts to the project's `package.json` file:

```json
"scripts": {
  "watch:sass": "sass --watch src/sass:public/style",
  "build:sass": "sass src/sass:public/style",
  "watch:eleventy": "eleventy --serve --pathprefix 'it115-team1-site'",
  "build:eleventy": "eleventy --pathprefix 'it115-team1-site'",
  "build:sass:prod": "sass src/sass:public/style --style compressed",
  "build:eleventy:prod": "ELEVENTY_ENV=production eleventy --pathprefix 'it115-team1-site'",
  "build:prod": "npm run build:eleventy:prod & npm run build:sass:prod",
  "start": "npm-run-all build:sass --parallel watch:*",
  "build": "npm-run-all build:*"
},
```

They broadly fall into two categories of script - `watch` scripts and `build` scripts. When we want to start local development, we begin by running `npm run start`. This will cause the `build:sass` script to be run in parallel with all of the `watch` scripts, which is responsible for that  

{{ ui.image("assets/img/screenshot-dev-server.png", "The local development workflow via the node server")}}

It's important to note that **this server is for development use only and not designed for a production environment**. That's alright, though - the whole point of using 11ty is to spit out static resources, so we shouldn't need much in the way of a server to host these resources. 

## Deploying via GitHub Actions
[GitHub Pages](https://pages.github.com/) are a fantastic way to host static content, especially static content related to programming. This will be perfect for our purposes.

Setting this up required a few steps. First, we needed to create [some yaml files](https://github.com/jaohara/it115-team1-site/blob/main/.github/workflows/) inside the `.github/worklfows` directory. These will dictate how our Github Actions work. Second, we needed to generate a secret key locally and share it with Github to allow this action to publish to Github Pages on our behalf.

We're using the [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages) action to handle our publishing. When either a pull request or merge to `main` is detected, these scripts will trigger Github to spin up an instance of the latest version of [Ubuntu](https://ubuntu.com/), install the build dependencies like 11ty and sass via `npm`, and use these dependencies with `node` to build and publish the latest version of the site.

{{ ui.image("assets/img/screenshot-github-actions.png", "The Github Actions build process.")}}

After the push or merge has been initiated, the progress of the build step can be viewed in the page's Actions panel. Once the action has completed, the updated site will now be accessible via the Github Pages url:

{{ ui.image("assets/img/screenshot-deploy.png", "The deployed changes.")}}


## What about that sweet syntax highlighting?
Here's the content of the `.eleventy.js` file to show some more syntax highlighting.

```javascript
module.exports = function(eleventyConfig){
  // config to watch css files that are built from sass
  eleventyConfig.setBrowserSyncConfig({
    files: './public/style/**/*.css'
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(eleventyPluginFeatherIcons);
  eleventyConfig.addWatchTarget("./public/style/**/*.css");
  
  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
```

## Sources
These are the resources that I used to learn about 11ty and this particular Github Actions workflow:

- [How to Deploy Eleventy to GitHub Pages With GitHub Actions](https://maarten.be/blog/20220730/how-to-deploy-your-eleventy-website-to-github-pages-with-github-actions/)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)