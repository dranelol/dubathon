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
        maintainAspectRatio: true
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
        maintainAspectRatio: true
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
        maintainAspectRatio: true,
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

activateChart(0);