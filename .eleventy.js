module.exports = eleventyConfig => {
    console.log("Configuring eleventy...");
    eleventyConfig.addCollection("tagList", require("./_includes/js/getTagList"));
    eleventyConfig.setDataDeepMerge(true); //Merge directory and page tags

    //Readable date
    let { DateTime } = require("luxon");
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL dd, yyyy");
    });

    //HTML date
    // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    eleventyConfig.addFilter("htmlDateString", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    //Prettify html output
    console.log("Prettifying html...");
    let pretty = require("pretty");
    eleventyConfig.addTransform("pretty", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            return pretty(content);
        }

        return content;
    });
};
