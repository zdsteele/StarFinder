// information about the sloan digital sky survey

d3.json("/data", function(data) {


    // Looping Through the Array to capture 
    // the x and y axis of the first bar graph showing how many classes and coutns in the survey. 
    x_axis = []
    y_axis = []

    data.forEach(element => {

        x_axis.push(element.Class)
        y_axis.push(element.Counts)

    });

    // Creating first Plotly bar graph.
    var trace = [{
        x: x_axis,
        y: y_axis,
        type: 'bar',
        text: y_axis,
        marker: { color: 'yellowgreen' }
    }];

    var layout = {
        title: {
            text: `Classes found in Sloan Sky Survey`,
            font: { color: '#7FFF00' }
        },
        yaxis: { color: '#7FFF00', title: "Amount in Survey" },
        xaxis: { color: '#7FFF00' },
        height: 500,
        width: 500,
        plot_bgcolor: "#000000",
        paper_bgcolor: "#343a40"

    };

    Plotly.newPlot("class_graph", trace, layout, { responsive: true })

});

// Selecting the redshift route to get the data to show the mean values of redshift per each class.
d3.json("/redshift", function(data) {

    x_red_axis = []
    y_red_axis = []

    data.forEach(element => {
        x_red_axis.push(element.Class)
        y_red_axis.push(element.Redshift)
    })

    var redTrace = [{
        x: x_red_axis,
        y: y_red_axis,
        type: 'bar',
        text: y_red_axis,
        marker: { color: 'yellowgreen' }
    }]

    var redLayout = {
        title: {
            text: 'Mean Redshift Values per Class',
            font: { color: '#7FFF00' }
        },
        yaxis: { color: '#7FFF00', title: 'Mean Redshift' },
        xaxis: { color: '#7FFF00' },
        height: 500,
        width: 500,
        plot_bgcolor: "#000000",
        paper_bgcolor: "#343a40"

    };

    Plotly.newPlot("redshift", redTrace, redLayout, { responsive: true })

});


// Creates a table of the Means 
var tabulate = function(data, columns) {
    var table = d3.select('#data_table').append('table').style("width", "100%")
    var thead = table.append('thead').attr("class", "text-primary")
    var tbody = table.append('tbody')

    thead.append('tr')
        .selectAll('th')
        .data(columns)
        .enter()
        .append('th')
        .text(function(d) { return d })

    var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')

    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                return { column: column, value: row[column] }
            })
        })
        .enter()
        .append('td')
        .attr("class", "text-light")
        .text(function(d) { return d.value })

    return table;
}

d3.csv("static/csv/mean.csv", function(dataz) {
    var cols = Object.keys(dataz[0])
    tabulate(dataz, cols)
});