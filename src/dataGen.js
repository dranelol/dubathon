const path = require('path');
const csv = require('csvtojson');
const fs = require('fs');

const basePath = __dirname;
const inputFilePath = '../data/source/dubathon_data.csv';
const outputFilePath = '../data/release/dubathon_data.json';
const inputPath = path.join(basePath, inputFilePath);
const outputPath = path.join(basePath, outputFilePath);

csv()
    .fromFile(inputPath)
    .then((jsonObj)=>{
        for(let i = 0; i < jsonObj.length; i++) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            console.log(new Date(jsonObj[i].time).toLocaleDateString(undefined, options));

        }
        
        const jsonString = JSON.stringify(jsonObj);
        fs.writeFileSync(outputPath, jsonString);
    });
