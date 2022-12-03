import * as chartStuff from "./charts.js"

export function activateChart(chartIdx) {
    chartStuff.activateChart(chartIdx);

}

window.activateChart = (chartIdx) => {
    activateChart(chartIdx);
}

//activateChart(0);