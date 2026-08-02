module.exports = function(eleventyConfig) {
  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create a collection of articles
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob("src/articles/*.md").sort(function(a, b) {
      return b.date - a.date;
    });
  });

  // Date filter
  eleventyConfig.addFilter("dateFilter", function(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    pathPrefix: "/"
  }
}
