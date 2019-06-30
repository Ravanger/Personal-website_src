module.exports = collection => {
	let tagSet = new Set();
	collection.getAll().forEach(item => {
		if ('tags' in item.data) {
			let tags = item.data.tags;

			tags = tags.filter(item => {
				switch (item) {
					// this list should match the `filter` list in tags.njk
					case 'pages':
					case 'projects':
						return false;
				}

				return true;
			});

			for (const tag of tags) {
				tagSet.add(tag);
			}
		}
	});

	// returning an array in addCollection works in Eleventy 0.5.3
	return [...tagSet].sort();
};
