var capture;
var buffer;
var result;
var w = 640,
    h = 480;
var w2 = [637,638,639,640,641,642,643];
var h2 = [380,580];
var isPressed;


function setup() {
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('Capture is ready. Click is ready too.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h);
    capture.size(w, h);
    capture.hide();
    buffer = new jsfeat.matrix_t(w, h, jsfeat.U8C1_t);
}

function jsfeatToP5(src, dst) {
    if (!dst || dst.width != src.cols || dst.height != src.rows) {
        dst = createImage(src.cols, src.rows);
    }
    var n = src.data.length;
    dst.loadPixels();
    var srcData = src.data;
    var dstData = dst.pixels;
    for (var i = 0, j = 0; i < n; i++) {
        var cur = srcData[i];
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = cur;
        dstData[j++] = 255;
    }
    dst.updatePixels();
    return dst;
}

function draw() {
    image(capture, 0, 0, 640, 480);
    capture.loadPixels();
    if (capture.pixels.length > 0) { 
        var blurSize = select('#blurSize').elt.value;
        var lowThreshold = select('#lowThreshold').elt.value;
        var highThreshold = select('#highThreshold').elt.value;

        blurSize = map(blurSize, 0, 100, 1, 12);
        lowThreshold = map(lowThreshold, 0, 100, 0, 350);
        highThreshold = map(highThreshold, 0, 100, 0, 350);

        jsfeat.imgproc.grayscale(capture.pixels, w, h, buffer);
        jsfeat.imgproc.gaussian_blur(buffer, buffer, blurSize, 0);
        jsfeat.imgproc.canny(buffer, buffer, lowThreshold, highThreshold);
        var n = buffer.rows * buffer.cols;
        result = jsfeatToP5(buffer, result);
        image(result, 0, 0, 640, 480);
    }
  
    if (mouseX >= 0 && mouseX <= 640 && mouseY >= 0 && mouseY <= 480) {
    isPressed = true;
  } else {
    isPressed = false;
  }
}

function mousePressed() {
  if(isPressed == true) {
    w = random(w2)
    h = random(h2)}
}
