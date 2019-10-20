/* App.js */
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var React = require('react');
var Component = React.Component;

class GraphContainer extends Component {

	render() {
		const options = {
			animationEnabled: true,
			backgroundColor: "white",
			borderRadius: 2,
			height: 300,
			theme: "light2",
			
			title:{
				fontFamily: "georgia",
				fontSize: 25,
				lineSpacing: 2,
				text: "BEST RATED PERSONS",
				fontWeight: "normal",
				fontColor: "black"
			},
			axisX: {
				title: "PERSON",
				fontFamily: "georgia",
				fontColor: "black",
				reversed: true,
			},
			axisY: {
				title: "RATING",
				fontFamily: "georgia",
				fontColor: "black",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  9, label: "Hans" },
					{ y:  7, label: "Petter" },
					{ y:  6.5, label: "Ola" },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
} 

export default GraphContainer;