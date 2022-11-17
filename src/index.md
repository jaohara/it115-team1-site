---
Title: IT115 Team 1 Project
layout: "base.njk"
---

{% import "components.njk" as ui%}

# Team 1 Project
This is the page for the IT115 Team 1 Project. It is created using the [11ty static site generator](https://www.11ty.dev/) in tandem with [GitHub  Actions](https://github.com/features/actions) to build and deploy the generated static page.

## Sub-Pages
The following pages also exist for each group member:

- [Ayla's Page](Ayla/)
- [John's Page](John/)
- [Karen's Page](Karen/)

## Testing More stuff

Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, laudantium ut. Cum saepe quas fuga eaque molestias harum consequuntur, labore iste neque quia nisi rerum dolores debitis maiores voluptatem soluta.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem sequi. Architecto asperiores natus quam dolorum magni doloremque doloribus culpa fugiat quos nobis, esse tempora rerum aliquam velit, cumque amet?

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet optio beatae doloremque nostrum odio et ut accusamus quos animi molestiae, aspernatur blanditiis reiciendis, quae commodi aliquam? Minima sint exercitationem odio?

{{ ui.image("assets/img/screenshot.png", "The first screenshot")}}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nulla vero quia! Repellat, quas! Iusto, delectus ab! Soluta ab eveniet similique, aliquam, voluptatibus reprehenderit mollitia nesciunt aliquid commodi asperiores voluptas?

1. First thing
2. Then on to the next
3. Before moving on to the thing after
4. Bringing us here, allowing us to eventually
5. Reach the end

## What about code?

To be honest, that isn't something that I had thought about. Let's check it out.

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