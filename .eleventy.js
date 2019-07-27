module.exports = eleventyConfig => {
    console.log("Configuring eleventy...");
    eleventyConfig.addCollection("tagList", require("./_includes/js/getTagList"));
    eleventyConfig.setDataDeepMerge(true); //Merge directory and page tags

    //Filter out unnecessary tags
    const filterProjectsTag = tags => {
        var filteredTags = tags.filter(tag => { return tag !== 'projects' });
        return filteredTags;
    };

    //Add links to tags
    //TODO: fix
    eleventyConfig.addFilter("filterAndLinkProjectsTag", tags => {
        var linkedTags = filterProjectsTag(tags); //Remove "projects" tag
        //Add link to each tag
        linkedTags.filter(tag => {
            return '<a href="/Projects/'+ tag + '/' + '">' + tag + '</a>';
        });
        console.log(linkedTags);
        
        return linkedTags;
    });

    //Readable date
    const { DateTime } = require("luxon");
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
    const pretty = require("pretty");
    eleventyConfig.addTransform("pretty", (content, outputPath) => {
        if (outputPath.endsWith(".html")) {
            return pretty(content);
        }

        return content;
    });
};
