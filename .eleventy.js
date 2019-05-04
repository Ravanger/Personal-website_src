module.exports = function (eleventyConfig) {
    eleventyConfig.setDataDeepMerge(true);
};

//Prettify html output
const pretty = require("pretty");
module.exports = function (eleventyConfig) {
    eleventyConfig.addTransform("pretty", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return pretty(content);
        }

        return content;
    });
};
