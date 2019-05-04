//https://github.com/nathanwentworth/lightbox

var body;

var imageEls;
var lightbox;
var lbImg;
var lightboxVis;

var imgIndex;
var imgLength;

window.addEventListener('load', function () {
  body = document.getElementsByTagName('body')[0];
  createLightbox();
  getImages();
});

function createLightbox() {
  lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  lightbox.classList.add('lightbox-hidden');
  lightbox.addEventListener('click', function (event) {
    if (event.target == lightbox) {
      lightboxToggle();
    }
  });

  lbImg = document.createElement('img');
  lbImg.classList.add('zoomed-out');
  lbImg.id = 'lightbox-img';
  lbImg.src = '#!';

  var lbBtnL;
  lbBtnL = document.createElement('button');
  lbBtnL.innerText = '←';
  lbBtnL.id = 'lightbox-left';
  lbBtnL.addEventListener('click', function () {
    incrementIndex(-1);
  });

  var lbBtnR;
  lbBtnR = document.createElement('button');
  lbBtnR.innerText = '→';
  lbBtnR.id = 'lightbox-right';
  lbBtnR.addEventListener('click', function () {
    incrementIndex(1);
  });

  var lbBtnC;
  lbBtnC = document.createElement('button');
  lbBtnC.innerText = '╳';
  lbBtnC.id = 'lightbox-close';
  lbBtnC.addEventListener('click', function () {
    lightboxToggle();
  });

  lightbox.appendChild(lbImg);
  lightbox.appendChild(lbBtnL);
  lightbox.appendChild(lbBtnR);
  lightbox.appendChild(lbBtnC);
  body.appendChild(lightbox);
}

var imageSrcs = []

function getImages() {

  imageEls = document.querySelectorAll('[data-lb-container]')[0].getElementsByTagName('img');
  imgLength = imageEls.length;

  lightboxVis = lightbox.classList.contains('lightbox-visible');

  for (var i = 0; i < imageEls.length; i++) {
    imageEls[i].addEventListener('click', function (event) {
      imgIndex = getIndex(event);
      lightboxToggle();
    });
    imageSrcs[i] = imageEls[i].src;
  }

  document.addEventListener('keydown', function (event) {
    console.log(lightboxVis);
    console.log(event.keyCode);
    if (lightboxVis) {

      if (event.keyCode == 27) {
        lightboxToggle();
        return;
      }

      if (event.keyCode == 37 || event.keyCode == 65) {
        incrementIndex(-1);
      } else if (event.keyCode == 39 || event.keyCode == 68) {
        incrementIndex(1);
      }
    }
  });

  console.log('images loaded');
}

function incrementIndex(amount) {
  imgIndex += amount;

  if (imgIndex < 0) {
    imgIndex = imgLength - 1;
  }

  if (imgIndex >= imgLength) {
    imgIndex = 0;
  }

  console.log(imgIndex);
  setLightboxImage(imgIndex);
}

function getIndex(event) {
  var target = event.target;

  for (var i = 0; i < imageEls.length; i++) {
    if (imageEls[i] == target) {
      console.log("index is " + i);
      return i;
    }
  }
}

function lightboxToggle() {
  if (lightboxVis) {
    lightbox.classList.add('lightbox-hidden');
    lightbox.classList.remove('lightbox-visible');

    body.classList.remove('no-scroll');

    lightboxVis = false;
  } else {
    lightbox.classList.add('lightbox-visible');
    lightbox.classList.remove('lightbox-hidden');

    body.classList.add('no-scroll');

    lightboxVis = true;

    setLightboxImage();
  }
}

function setLightboxImage() {
  lbImg.src = imageSrcs[imgIndex];
}