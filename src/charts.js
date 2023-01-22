//import { Chart } from 'chart.js/auto';
//import 'chartjs-adapter-luxon';
import zoomPlugin from 'chartjs-plugin-zoom';
import annotationPlugin from 'chartjs-plugin-annotation';

//import DownsamplePlugin from 'chartjs-plugin-downsample';
let data = require('../data/release/dubathon_data.json');
let maiyaData = require('../data/release/maiyaDanceOverTime.json');
let chatData = require('../data/release/chatters.json');
let emoteData = require('../data/release/emojiUse.json');
let chatDataAlluux = require('../data/release/chattersAlluux.json');
let emoteDataAlluux = require('../data/release/emojiUseAlluux.json');
let chatDataYEB = require('../data/release/chattersYEB.json');
let emoteDataYEB = require('../data/release/emojiUseYEB.json');

window.activateChart = function(chartIdx) {
  activateChart(chartIdx);
};

Chart.register(zoomPlugin, annotationPlugin);

Chart.defaults.font.family = "futura";

var currentChart = null;

// stream started at November 22, 2022, 08:44:42 PM EST (Tuesday), or 20:44:42
// stream ended at December 01, 2022, 08:02:33 PM EST (Thursday), or 20:02:33

// at stream start, there were 4 subs and 0:47:18 on the clock, or 2838 seconds
// the first data entry starts at 2022-11-22 19:48:20; rolling back to this, stream timer would have been 56:22 more, 3382, minus the 4 subs (120) so 3262
// timer starting at first data entry gives 6100 seconds or 1:41:40

const originalTimerMS = 6100000;
const firstDateEventMS = 1669168100000;

export function activateChart(chartIdx) {
  
  if(currentChart != null) {
    currentChart.destroy();
  }
  
  switch(chartIdx) {
    case 0:
      subsPerDay();
      break;
    case 1:
      bitsPerDay();
      break;
    case 2:
      moneyPerDay();
      break;
    case 3:
      subsPerDaySplit();
      break;
    case 4:
      bitsPerDaySplit();
      break;
    case 5:
      moneyPerDaySplit();
      break;
    case 6:
      timerDurationCountdown();
      break;
    case 7:
      maiyaDanceUsage();
      break;
    case 8:
      topChatters();
      break;
    case 9:
      topChattersAlluux();
      break;
    case 10:
      topChattersYEB();
      break;
    case 11:
      topEmotes();
      break;
    case 12:
      topEmotesAlluux();
      break;
    case 13:
      topEmotesYEB();
      break;
  }
}

export async function topEmotes() {

  let emotesNames = [];
  let emotesCount = [];
  let emotesLinks = [];

  let images = [];
  
  for(let i = 0; i < emoteData.length; i++) {
    const dataLine = emoteData[i];
    emotesCount.push(dataLine.count);
    emotesNames.push(dataLine.emote);
    emotesLinks.push(dataLine.link);
  }

  for(let j = 0; j < emotesLinks.length; j++) {
    var image = new Image();
    image.src = emotesLinks[j];
    images.push(image);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: emotesNames,
        datasets: [
          {
            label: 'Top Emotes',
            data: emotesCount
          }
        ]
      },
      plugins: [{
        id: 'bar-images',
        afterDraw: (chart, args, options) => {
          const {ctx} = chart;
          var xAxis = chart.scales['x'];
          var yAxis = chart.scales['y'];
          xAxis.ticks.forEach((value, index) => {  
            var x = xAxis.getPixelForTick(index);      
            var y = yAxis.getPixelForValue(emotesCount[index]);
            ctx.drawImage(images[index], x-12, y-36);
          });      
        }
      }],
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 20000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          }
        }
      }
    }
  );
};

export async function topEmotesYEB() {

  let emotesNamesYEB = [];
  let emotesCountYEB = [];
  let emotesLinksYEB = [];

  let images = [];
  
  for(let i = 0; i < emoteDataYEB.length; i++) {
    const dataLine = emoteDataYEB[i];
    emotesCountYEB.push(dataLine.count);
    emotesNamesYEB.push(dataLine.emote);
    emotesLinksYEB.push(dataLine.link);
  }

  for(let j = 0; j < emotesLinksYEB.length; j++) {
    var image = new Image();
    image.src = emotesLinksYEB[j];
    images.push(image);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: emotesNamesYEB,
        datasets: [
          {
            label: 'Top Emotes, YEB',
            data: emotesCountYEB
          }
        ]
      },
      plugins: [{
        id: 'bar-images',
        afterDraw: (chart, args, options) => {      
          const {ctx} = chart;
          var xAxis = chart.scales['x'];
          var yAxis = chart.scales['y'];
          xAxis.ticks.forEach((value, index) => {  
            var x = xAxis.getPixelForTick(index);      
            var y = yAxis.getPixelForValue(emotesCountYEB[index]);
            ctx.drawImage(images[index], x-12, y-36);
          });      
        }
      }],
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 20000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          },
        }
      }
    }
  );
};

export async function topEmotesAlluux() {

  let emotesNamesAlluux = [];
  let emotesCountAlluux = [];
  let emotesLinksAlluux = [];

  let images = [];
  
  for(let i = 0; i < emoteDataAlluux.length; i++) {
    const dataLine = emoteDataAlluux[i];
    emotesCountAlluux.push(dataLine.count);
    emotesNamesAlluux.push(dataLine.emote);
    emotesLinksAlluux.push(dataLine.link);
  }

  for(let j = 0; j < emotesLinksAlluux.length; j++) {
    var image = new Image();
    image.src = emotesLinksAlluux[j];
    image.height = 28;
    image.width = 28;
    images.push(image);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: emotesNamesAlluux,
        datasets: [
          {
            label: 'Top Emotes, Alluux',
            data: emotesCountAlluux
          }
        ]
      },
      plugins: [{
        id: 'bar-images',
        afterDraw: (chart, args, options) => {      
          const {ctx} = chart;
          var xAxis = chart.scales['x'];
          var yAxis = chart.scales['y'];
          xAxis.ticks.forEach((value, index) => {  
            var x = xAxis.getPixelForTick(index);      
            var y = yAxis.getPixelForValue(emotesCountAlluux[index]);
            ctx.drawImage(images[index], x-12, y-36);
          });      
        }
      }],
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 20000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          }
        }
      }
    }
  );
};

export async function topChatters() {

  let chatterData = [];
  let chatterNames = [];
  
  for(let i = 0; i < chatData.length; i++) {
    const dataLine = chatData[i];
    chatterNames.push(dataLine.chatter);
    chatterData.push(dataLine.count);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: chatterNames,
        datasets: [
          {
            label: 'Top Chatters',
            data: chatterData
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 140000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
};

export async function topChattersAlluux() {

  let chatterDataAlluux = [];
  let chatterNamesAlluux = [];
  
  for(let i = 0; i < chatDataAlluux.length; i++) {
    const dataLine = chatDataAlluux[i];
    chatterNamesAlluux.push(dataLine.chatter);
    chatterDataAlluux.push(dataLine.count);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: chatterNamesAlluux,
        datasets: [
          {
            label: 'Top Chatters, Alluux',
            data: chatterDataAlluux
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 140000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
};

export async function topChattersYEB() {

  let chatterDataYEB = [];
  let chatterNamesYEB = [];
  
  for(let i = 0; i < chatDataYEB.length; i++) {
    const dataLine = chatDataYEB[i];
    chatterNamesYEB.push(dataLine.chatter);
    chatterDataYEB.push(dataLine.count);
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: chatterNamesYEB,
        datasets: [
          {
            label: 'Top Chatters, YEB',
            data: chatterDataYEB
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 140000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
};

export async function maiyaDanceUsage() {

  let chartData = [];
  let tempDateCollection = [];

  let maiyaCount = 0;

  let skips = 0;

  let skipsBetween = 10;
  
  for(let i = 0; i < maiyaData.length; i++) {
    const dataLine = maiyaData[i];
    const emojiCount = dataLine.count;
    if(emojiCount == "0") {
      continue;
    }

    const dateMS = dataLine.timeMS;

    maiyaCount += emojiCount;

    if(skips >= skipsBetween) {
      tempDateCollection.push(dateMS);
      chartData.push(maiyaCount);
      skips = 0;
    }
    else {
      skips++;
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'line',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'MaiyaDance over Time',
            data: chartData.map((item) => {
              return item;
            })
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              x: {min: 1669190944147, max: 1669942956583},
              y: {min: 0, max: 20000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              // Luxon format string
              tooltipFormat: 'DD T',
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
        }
      }
    }
  );
  
};

export async function timerDurationCountdown() {

  let chartData = [];
  let tempDateCollection = [];

  let totalTimeAddedMS = 0;

  let skips = 0;

  let skipsBetween = 10
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const timeAdded = dataLine.timeadded;
    if(timeAdded == "0") {
      continue;
    }

    const timeAddedNumMS = Number(timeAdded) * 1000;
    totalTimeAddedMS += timeAddedNumMS;
    const date = new Date(dataLine.time);
    const dateMS = date.getTime();
    const sinceStartMS = dateMS - firstDateEventMS;

    const timerLeft = originalTimerMS - sinceStartMS + totalTimeAddedMS;

    if(skips >= skipsBetween) {
      tempDateCollection.push(dateMS);
      chartData.push(timerLeft);
      skips = 0;
    }

    else {
      skips++;
    }

  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'line',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'Time remaining in the Dubathon',
            data: chartData.map((item) => {
              return item / 3600000;
            })
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          },
        },
        scales: {
          x: {
            type: 'time',
            time: {
              // Luxon format string
              tooltipFormat: 'DD T',
              unit: 'day',
            },
            title: {
              display: true,
              text: 'Date'
            }
          },
        }
      }
    }
  );
  
};


export async function subsPerDay() {

  let chartData = [];
  let tempDateCollection = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const subs = dataLine.subs;
    if(subs == "NULL") {
      continue;
    }
    const subsNum = Number(subs);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');

    if(tempDateCollection.includes(formatedDate)){
      const index = tempDateCollection.indexOf(formatedDate);
      const element = chartData[index];
      chartData[index] = element + subsNum;
    } else{
      tempDateCollection.push(formatedDate);
      chartData.push(subsNum);
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'Subs per Day',
            data: chartData
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 5000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        },
        
      }
    }
  );
  
};

export async function subsPerDaySplit() {

  let chartDataAlluux = [];
  let tempDateCollectionAlluux = [];

  let chartDataYEB = [];
  let tempDateCollectionYEB = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const subs = dataLine.subs;
    if(subs == "NULL") {
      continue;
    }
    const subsNum = Number(subs);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');
    const channel = dataLine.channel;

    if(channel == "alluux") {
      if(tempDateCollectionAlluux.includes(formatedDate)){
        const index = tempDateCollectionAlluux.indexOf(formatedDate);
        const element = chartDataAlluux[index];
        chartDataAlluux[index] = element + subsNum;
      } else{
        tempDateCollectionAlluux.push(formatedDate);
        chartDataAlluux.push(subsNum);
      }
    } else if(channel == "yungelderberry") {
      if(tempDateCollectionYEB.includes(formatedDate)){
        const index = tempDateCollectionYEB.indexOf(formatedDate);
        const element = chartDataYEB[index];
        chartDataYEB[index] = element + subsNum;
      } else{
        tempDateCollectionYEB.push(formatedDate);
        chartDataYEB.push(subsNum);
      }
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollectionAlluux,
        datasets: [
          {
            label: 'Subs per Day, Alluux',
            data: chartDataAlluux,
            borderColor: "#BF95F7",
            backgroundColor: "#F2C8FF",
            borderWidth: 2,
          },
          {
            label: 'Subs per Day, YEB',
            data: chartDataYEB,
            borderColor: "#54E0E1",
            backgroundColor: "#87FFFF",
            borderWidth: 2,
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 3000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
  
};

export async function bitsPerDay() {

  let chartData = [];
  let tempDateCollection = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const bits = dataLine.bits;
    if(bits == "NULL") {
      continue;
    }
    const bitsNum = Number(bits);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');

    if(tempDateCollection.includes(formatedDate)){
      const index = tempDateCollection.indexOf(formatedDate);
      const element = chartData[index];
      chartData[index] = element + bitsNum;
    } else{
      tempDateCollection.push(formatedDate);
      chartData.push(bitsNum);
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'Bits per Day',
            data: chartData
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 140000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
  
};

export async function bitsPerDaySplit() {

  let chartDataAlluux = [];
  let tempDateCollectionAlluux = [];

  let chartDataYEB = [];
  let tempDateCollectionYEB = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const bits = dataLine.bits;
    if(bits == "NULL") {
      continue;
    }
    const bitsNum = Number(bits);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');
    const channel = dataLine.channel;

    if(channel == "alluux") {
      if(tempDateCollectionAlluux.includes(formatedDate)){
        const index = tempDateCollectionAlluux.indexOf(formatedDate);
        const element = chartDataAlluux[index];
        chartDataAlluux[index] = element + bitsNum;
      } else{
        tempDateCollectionAlluux.push(formatedDate);
        chartDataAlluux.push(bitsNum);
      }
    } else if(channel == "yungelderberry") {
      if(tempDateCollectionYEB.includes(formatedDate)){
        const index = tempDateCollectionYEB.indexOf(formatedDate);
        const element = chartDataYEB[index];
        chartDataYEB[index] = element + bitsNum;
      } else{
        tempDateCollectionYEB.push(formatedDate);
        chartDataYEB.push(bitsNum);
      }
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollectionAlluux,
        datasets: [
          {
            label: 'Bits per Day, Alluux',
            data: chartDataAlluux,
            borderColor: "#BF95F7",
            backgroundColor: "#F2C8FF",
            borderWidth: 2,
          },
          {
            label: 'Bits per Day, YEB',
            data: chartDataYEB,
            borderColor: "#54E0E1",
            backgroundColor: "#87FFFF",
            borderWidth: 2,
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          zoom: {
            limits: {
              y: {min: 0, max: 140000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
  
};

export async function moneyPerDay() {

  let chartData = [];
  let tempDateCollection = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const money = dataLine.money;
    if(money == "0.00") {
      continue;
    }
    const moneyNum = Number(money);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');

    if(tempDateCollection.includes(formatedDate)){
      const index = tempDateCollection.indexOf(formatedDate);
      const element = chartData[index];
      chartData[index] = element + moneyNum;
    } else{
      tempDateCollection.push(formatedDate);
      chartData.push(moneyNum);
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'Donations per Day',
            data: chartData
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          y: {
              ticks: {
                  callback: function(value, index, ticks) {
                      return '$' + value;
                  }
              }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem, data) {
                let label = tooltipItem.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (tooltipItem.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tooltipItem.parsed.y);
                }
                return label;
              }
            }
          },
          zoom: {
            limits: {
              y: {min: 0, max: 3000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
  
};

export async function moneyPerDaySplit() {

  let chartDataAlluux = [];
  let tempDateCollectionAlluux = [];

  let chartDataYEB = [];
  let tempDateCollectionYEB = [];
  
  for(let i = 0; i < data.length; i++) {
    const dataLine = data[i];
    const money = dataLine.money;
    if(money == "0.00") {
      continue;
    }
    const moneyNum = Number(money);
    const date = new Date(dataLine.time);
    const formatedDate = date.toLocaleDateString('en-us');

    const channel = dataLine.channel;

    if(channel == "alluux") {
      if(tempDateCollectionAlluux.includes(formatedDate)){
        const index = tempDateCollectionAlluux.indexOf(formatedDate);
        const element = chartDataAlluux[index];
        chartDataAlluux[index] = element + moneyNum;
      } else{
        tempDateCollectionAlluux.push(formatedDate);
        chartDataAlluux.push(moneyNum);
      }
    } else if(channel == "yungelderberry") {
      if(tempDateCollectionYEB.includes(formatedDate)){
        const index = tempDateCollectionYEB.indexOf(formatedDate);
        const element = chartDataYEB[index];
        chartDataYEB[index] = element + moneyNum;
      } else{
        tempDateCollectionYEB.push(formatedDate);
        chartDataYEB.push(moneyNum);
      }
    }
  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: tempDateCollectionYEB,
        datasets: [
          {
            label: 'Donations per Day, Alluux',
            data: chartDataAlluux,
            borderColor: "#BF95F7",
            backgroundColor: "#F2C8FF",
            borderWidth: 2,
          },
          {
            label: 'Donations per Day, YEB',
            data: chartDataYEB,
            borderColor: "#54E0E1",
            backgroundColor: "#87FFFF",
            borderWidth: 2,
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
          },
          y: {
              stacked: true,
              ticks: {
                  callback: function(value, index, ticks) {
                      return '$' + value;
                  }
              }
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem, data) {
                let label = tooltipItem.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (tooltipItem.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tooltipItem.parsed.y);
                }
                return label;
              }
            }
          },
          zoom: {
            limits: {
              y: {min: 0, max: 3000},
            },
            pan: {
              enabled: true,
              mode: 'xy'
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'y',
            }
          }
        }
      }
    }
  );
  
};


activateChart(6);