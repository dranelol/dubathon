import { Chart } from 'chart.js/auto'
let data = require('../data/release/dubathon_data.json');


Chart.defaults.font.family = "futura";

const dataOne = {
  labels: [
    'subs',
    'bitties',
    'donos'
  ],
  datasets: [{
    label: 'dollars by type',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

var currentChart = null;

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
  }
}


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
        maintainAspectRatio: false
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
        maintainAspectRatio: false
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
          }
        }
      }
    }
  );
  
};


activateChart(0);