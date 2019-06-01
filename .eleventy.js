module.exports = eleventyConfig => {
    let pretty = require("pretty");
    let { DateTime } = require("luxon");

    eleventyConfig.setDataDeepMerge(true); //Merge directory and page tags

    //Prettify html output
    eleventyConfig.addTransform("pretty", (content, outputPath) => {
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
