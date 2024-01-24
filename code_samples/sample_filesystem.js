// import required to use the file share object.
var fs = require('fs');
// using a combination of JSON.parse and fs.readFileSync, we get the data from the colors file.
var colors = JSON.parse(fs.readFileSync('colors.json','utf-8'))
// I display the data on the console using a for each loop
colors.forEach(color => {
    console.log(color.name+": "+color.value)
});
