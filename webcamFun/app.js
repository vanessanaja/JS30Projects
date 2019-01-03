const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
  navigator.mediaDevices.getUserMedia({video: true, audio: false}) /* returns a promise*/
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err => {
    console.error("Oh No!!!", err);
  });
}

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);/* start at top left corner (0,0) & paint width & height*/
    // take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    //change them
    pixels = redEffect(pixels);
    //put them back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto(){
  //play sound
  snap.currentTime = 0;
  snap.play();
  //take data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'wonderful');
  link.innerHTML = `<img src='${data}' alt='wonderful'/>`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels){
  for(let i =0; i < pixels.data.length; i+=4){
    pixels.data[i] = pixels.data[i + 0] + 100;//red
    pixels.data[i + 1] = pixels.data[i + 1] - 50;//green
    pixels.data[i + 2] = pixels.data[i + 2] * .05;//blue
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);