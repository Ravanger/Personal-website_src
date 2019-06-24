//Optimize images for web
console.log("Optimizing images...");
let imagemin = require('imagemin-keep-folder');
let imageminJpegoptim = require('imagemin-jpegoptim');
let imageminPngquant = require('imagemin-pngquant');
let imageminGiflossy = require('imagemin-giflossy');

(async () => {
    const files = await imagemin(['img/**/*.{jpg,png,gif,JPG,PNG,GIF}'], {
        plugins: [
            imageminJpegoptim({
                max: 60,
                stripAll: true
            }),
            imageminPngquant({
                quality: [0.7, 0.9],
                strip: true
            }),
            imageminGiflossy({
                optimizationLevel: 3,
                optimize: '3',
                lossy: 30
            })
        ],
        replaceOutputDir: output => {
            return output.replace(/img\//, '_site/img/')
        }
    });
    console.log(files);
})();
