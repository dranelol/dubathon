import { Chart } from 'chart.js/auto'

Chart.defaults.font.family = "futura";

const data = [
  { day: 1, count: 10 },
  { day: 2, count: 20 },
  { day: 3, count: 15 },
  { day: 4, count: 25 },
  { day: 5, count: 22 },
  { day: 6, count: 30 },
  { day: 7, count: 28 },
];

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
      chartZero();
      break;
    case 1:
      chartOne();
      break;
  }
}


export async function chartZero() {
  
  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.day),
        datasets: [
          {
            label: 'Subs per Day',
            data: data.map(row => row.count)
          }
        ]
      },
      options: {
        maintainAspectRatio: true
      }
    }
  );
  
};

export async function chartOne() {
  
  currentChart = new Chart(
    document.getElementById('charts'),
    {
      type: 'pie',
      data: dataOne,
      options: {
        maintainAspectRatio: true
      }
    }
  );
};

activateChart(0);