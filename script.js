var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Consell Comercial del Pallars Sobirà','Consell de Audiovisual de Catalunya','Departament Agricultura, Ramaderia, Pesca, Alimentació i Medi Natural',
'Departament Empresa i Ocupació','Departament de Benestar Social i Família','Departament de Territori i Sostenibilitat','Institut Català de la Salut','Jutjats de Primera Instància i Instrucció',
'Servei Ocupació de Catalunya','Universitat Rovira i Virgili'];

//Data
var d = [
		  [
			{axis:"Medi Ambient i Territori",value:0},
			{axis:"Salut",value:1},
			{axis:"Ocupació i ben estar social",value:0},
			{axis:"Aspecte Jurídic",value:0},
			{axis:"Audiovisual",value:0}
		  ],
		  [
			{axis:"Medi Ambient i Territori",value:0},
			{axis:"Salut",value:0.31},
			{axis:"Topic 2",value:0},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0.68}
		  ],
		  [
			{axis:"Medi Ambient i Territori",value:0.53},
			{axis:"Salut",value:0.38},
			{axis:"Topic 2",value:0},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0.76}
		  ],
		  [
			{axis:"Medi Ambient i Territori",value:0.052},
			{axis:"Salut",value:0.21},
			{axis:"Topic 2",value:0.73},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0}
		  ],
		  [
			{axis:"Medi Ambient i Territori",value:0},
			{axis:"Salut",value:0.12},
			{axis:"Topic 2",value:0.87},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0}
		  ],
		  [
			{axis:"Topic 0",value:0.33},
			{axis:"Salut",value:0.56},
			{axis:"Topic 2",value:0.06},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0.03}
		  ],
		  [
			{axis:"Topic 0",value:0},
			{axis:"Salut",value:1},
			{axis:"Topic 2",value:0},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0},
		  ],
		  [
			{axis:"Topic 0",value:0},
			{axis:"Salut",value:0},
			{axis:"Topic 2",value:0},
			{axis:"Topic 3",value:1},
			{axis:"Topic 4",value:0},
		  ],
		  [
			{axis:"Topic 0",value:0.30},
			{axis:"Salut",value:0.21},
			{axis:"Topic 2",value:0.78},
			{axis:"Topic 3",value:0},
			{axis:"Topic 4",value:0}
		  ]
		];

		//Options for the Radar chart, other than default
		var mycfg = {
		  w: w,
		  h: h,
		  maxValue: 0.6,
		  levels: 6,
		  ExtraWidthX: 400 //+100 because it was cropping text - TG
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
			.attr("width", w+400) //+100 because it was cropping text - TG
			.attr("height", h)

		//Create the title for the legend
		var text = svg.append("text")
			.attr("class", "title")
			.attr('transform', 'translate(90,0)') 
			.attr("x", w + 25)
			.attr("y", 10)
			.attr("font-size", "12px")
			.attr("fill", "#404040")
			.text("What % of owners use a specific service in a week");
		
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
