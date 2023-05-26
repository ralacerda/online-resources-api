const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: "src/site",
      output: "public",
    },
  };
};
