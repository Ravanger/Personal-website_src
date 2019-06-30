const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesInputPath = path.join(__dirname, '../img/');
console.log('Optimizing images from ' + imagesInputPath);

//https://gist.github.com/kethinov/6658166#gistcomment-2596168
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

const imagesArray = walkSync(imagesInputPath);
console.log(imagesArray);

const imagesOutputPath = path.join(__dirname, '../_site/img/');
if (!fs.existsSync(imagesOutputPath)) {
	fs.mkdirSync(imagesOutputPath);
}
console.log('Outputting to ' + imagesOutputPath);

imagesArray.forEach(currentImageInput => {
	const currentImageOutputDir = path.join(
		imagesOutputPath,
		path.basename(path.dirname(currentImageInput))
	);
	const currentImageOutput = path.join(
		currentImageOutputDir,
		path.basename(currentImageInput)
	);
	const currentFileExt = path.extname(currentImageInput);
	switch (currentFileExt) {
		case '.jpg':
		case '.png':
		case '.gif':
			{
				if (!fs.existsSync(currentImageOutputDir)) {
					fs.mkdirSync(currentImageOutputDir);
				}
				fs.openSync(currentImageOutput, 'wx');
				console.log(currentImageOutput);

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
		default:
			break;
	}
});
