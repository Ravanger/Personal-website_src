module.exports = function (eleventyConfig) {
    let pretty = require("pretty");
    let { DateTime } = require("luxon");

    eleventyConfig.setDataDeepMerge(true);

    //Prettify html output
    eleventyConfig.addTransform("pretty", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return pretty(content);
        }

        return content;
    });

    //Readable date
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
    });
};
