import AnimationUtil from "./AnimationUtil";

export default class Chart {
    constructor(options){

        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.animationUtil = new AnimationUtil();
        this.options = {
            chartType: options.chartType;
        }
        this.scaleFactor = 1;
        this.axisLabels = {
            x: [], // time labels
            y: []  // price labels
        }
        this.dataPoints = [];
    }

    setDataPoints(dataPoints){
        this.dataPoints = dataPoints;
    }
    
    setAxisLabels(xLabels, yLabels){
        this.axisLabels.x = xLabels;
        this.axisLabels.y = yLabels;
    }
    
    refreshDataPoints(){
        // code to refresh data points
    }

    changeChartType(chartType){
        this.options.chartType = chartType;
    }

    startAnimation(){
        this.animationUtil.requestAnimationFrame(() => {
            this.refreshDataPoints();
            this.startAnimation();
        });
    }

}