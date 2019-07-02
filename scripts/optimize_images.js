const sharp = require('sharp');
const gifResize = require('@gumlet/gif-resize');
const path = require('path');
const fs = require('fs');
const imageSize = require('image-size');

const imagesInputPath = path.join(__dirname, '../img/');
console.log('Optimizing images from ' + imagesInputPath);

// https://gist.github.com/kethinov/6658166#gistcomment-2596168
const walkSync = (dir, filelist = []) => {
	fs.readdirSync(dir).forEach(file => {
		const dirFile = path.join(dir, file);
		try {
			filelist = walkSync(dirFile, filelist);
		} catch (err) {
			if (err.code === 'ENOTDIR' || err.code === 'EBUSY')
				filelist = [...filelist, dirFile];
			else throw err;
		}
	});

	return filelist;
};

// Create directory if doesn't already exist
const mkdirSync = path => {
	if (!fs.existsSync(path)) {
		fs.mkdirSync(path);
	}
};

const filesArray = walkSync(imagesInputPath); //All images and videos
console.log(filesArray);

// Create _site/img/ output path
const imagesOutputPath = path.join(__dirname, '../_site/img/');
mkdirSync(imagesOutputPath);
console.log('Outputting to ' + imagesOutputPath);

filesArray.forEach(currentImageInput => {
	const currentImageOutputDir = path.join(
		imagesOutputPath,
		path.basename(path.dirname(currentImageInput))
	); // ../_site/img/example_dir/

	const currentImageOutput = path.join(
		currentImageOutputDir,
		path.basename(currentImageInput)
	); // ../_site/img/example_dir/example.jpg
	console.log(currentImageOutput);

	const currentFileExt = path.extname(currentImageInput);
	switch (currentFileExt) {
		case '.jpg':
		case '.png':
			{
				mkdirSync(currentImageOutputDir);

				// Create empty placeholder file for each image
				fs.openSync(currentImageOutput, 'wx');

				// Resize to maxWidth=800px if image is wider
				sharp(currentImageInput)
					.resize({
						width: 800,
						withoutEnlargement: true
					})
					.toFile(currentImageOutput)
					.catch(error => {
						console.log('*** ' + error + ': ' + currentImageInput);
					});
			}
			break;
		case '.gif':
			{
				mkdirSync(currentImageOutputDir);

				// Create copy of gif before optimizations
				fs.copyFileSync(currentImageInput, currentImageOutput);

				const buf = fs.readFileSync(currentImageOutput);
				const currentImageWidth = imageSize(currentImageOutput).width;
				if (currentImageWidth > 800) currentImageWidth = 800;
				gifResize({
					width: currentImageWidth,
					optimizationLevel: 3
				})(buf).then(data => {
					var stream = fs.createWriteStream(currentImageOutput);
					stream.write(data);
					stream.end();
				});
			}
			break;
		default:
			break;
	}
});
