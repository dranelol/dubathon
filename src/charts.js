//import { Chart } from 'chart.js/auto';
//import 'chartjs-adapter-luxon';
import zoomPlugin from 'chartjs-plugin-zoom';

//import DownsamplePlugin from 'chartjs-plugin-downsample';
let data = require('../data/release/dubathon_data.json');
let maiyaData = require('../data/release/maiyaDanceOverTime.json');
let chatData = require('../data/release/chatters.json');
let emoteData = require('../data/release/emojiUse.json');

window.activateChart = function(chartIdx) {
  activateChart(chartIdx);
};

Chart.register(zoomPlugin);

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
      topEmotes();
      break;
  }
}

export async function topEmotes() {

  let emotesNames = [];
  let emotesCount = [];
  
  for(let i = 0; i < emoteData.length; i++) {
    const dataLine = emoteData[i];
    emotesCount.push(dataLine.count);
    emotesNames.push(dataLine.emote);
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

export async function maiyaDanceUsage() {

  let chartData = [];
  let tempDateCollection = [];

  let maiyaCount = 0;
  
  for(let i = 0; i < maiyaData.length; i++) {
    const dataLine = maiyaData[i];
    const emojiCount = dataLine.count;
    if(emojiCount == "0") {
      continue;
    }

    const dateMS = dataLine.timeMS;

    maiyaCount += emojiCount;

    tempDateCollection.push(dateMS);
    chartData.push(maiyaCount);
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
              tooltipFormat: 'DD T'
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

    //console.log(timerLeft);

    tempDateCollection.push(dateMS);
    chartData.push(timerLeft);

  }

  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'line',
      data: {
        labels: tempDateCollection,
        datasets: [
          {
            label: 'Hours remaining',
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
              tooltipFormat: 'DD T'
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


activateChart(0);