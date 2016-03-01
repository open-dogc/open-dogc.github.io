var w = 500,
	h = 500;

//var colorscale = d3.scale.category10();
var colorscale = d3.scale.ordinal() 
	.domain(["CiU", "PSC"])
    .range(["#F54955", "#4E86ED"]);

//Legend titles
var LegendOptions = ['PSC','CiU'];

//Data
var d = [
		  [
			{axis:"Medi Ambient i Territori",value:0.068},
			{axis:"Salut",value:0.796},
			{axis:"Ocupació i ben estar social",value:0.056},
			{axis:"Aspecte Jurídic",value:0.032},
			{axis:"Audiovisual",value:0.048}
		  ],
		  [
			{axis:"Medi Ambient i Territori",value:0.09},
			{axis:"Salut",value:0.63},
			{axis:"Topic 2",value:0.19},
			{axis:"Topic 3",value:0.017},
			{axis:"Topic 4",value:0.065}
		  ]
		];

		//Options for the Radar chart, other than default
		var mycfg = {
		  w: w,
		  h: h,
		  maxValue: 0.6,
		  levels: 6,
		  ExtraWidthX: 300
		}

		//Call function to draw the Radar chart
		//Will expect that data is in %'s
		RadarChart.draw("#chart", d, mycfg);

		////////////////////////////////////////////
		/////////// Initiate legend ////////////////
		////////////////////////////////////////////

		var svg = d3.select('#body')
			.selectAll('svg')
			.append('svg')
			.attr("width", w+300)
			.attr("height", h)

		//Create the title for the legend
		var text = svg.append("text")
			.attr("class", "title")
			.attr('transform', 'translate(90,0)') 
			.attr("x", w + 25)
			.attr("y", 10)
			.attr("font-size", "12px")
			.attr("fill", "#404040")
			.text("Partit Politic");
		
		//Initiate Legend	
		var legend = svg.append("g")
			.attr("class", "legend")
			.attr("height", 100)
			.attr("width", 200)
			.attr('transform', 'translate(90,20)') 
			;
			//Create colour squares
			legend.selectAll('rect')
			  .data(LegendOptions)
			  .enter()
			  .append("rect")
			  .attr("x", w + 30)
			  .attr("y", function(d, i){ return i * 20;})
			  .attr("width", 10)
			  .attr("height", 10)
			  .style("fill", function(d, i){ return colorscale(i);})
			  ;
			//Create text next to squares
			legend.selectAll('text')
			  .data(LegendOptions)
			  .enter()
			  .append("text")
			  .attr("x", w + 45 )
			  .attr("y", function(d, i){ return i * 20 + 9;})
			  .attr("font-size", "11px")
			  .attr("fill", "#737373")
			  .text(function(d) { return d; })
			  ;	
