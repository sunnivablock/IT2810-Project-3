import CanvasJSReact from './canvasjs.react';
import getHotList from './fillGraph';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var React = require('react');
var Component = React.Component;



class GraphContainer extends Component{

	render() {
		if(getHotList().length===0) return (null)
		
		const options = {
			animationEnabled: true,
			backgroundColor: "white",
			height: 300,
			theme: "light2",
			
			title:{
				fontFamily: "georgia",
				fontSize: 25,
				lineSpacing: 2,
				text: "BEST RATED",
				backgroundColor: '#282c34',
				fontWeight: "normal",
				fontColor: "white",
				margin: 10,
				padding: 10,
				fontWeight: 'bold'
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
					{ y: parseInt(getHotList()[0].rating) , label: getHotList()[0].firstName },
					{ y: parseInt(getHotList()[1].rating) , label: getHotList()[1].firstName },
					{ y: parseInt(getHotList()[2].rating) , label: getHotList()[2].firstName },
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

//https://canvasjs.com/docs/charts/chart-options/title/fontcolor/