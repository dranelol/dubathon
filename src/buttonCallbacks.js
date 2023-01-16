import * as chartStuff from "./charts.js"

export function activateChart(chartIdx) {
    chartStuff.activateChart(chartIdx);

};

window.activateChart = function(chartIdx) {
    activateChart(chartIdx);
};

//activateChart(0);