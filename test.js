const cv = require('opencv4nodejs')

const temp = cv.imread('./static/background.JPG')

console.log(temp)
