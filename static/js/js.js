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
        text: y_axis
    }];

    var layout = {
        title: `Classes found in Sloan Sky Survey`,
        xaxis: { title: "Date(MM/DD)" },
        yaxis: { title: "Amount in Survey" },
        height: 500,
        width: 500

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
        marker: { color: 'red' }
    }]

    var redLayout = {
        title: 'Mean Redshift Values per Class',
        height: 500,
        width: 500

    };

    Plotly.newPlot("redshift", redTrace, redLayout, { responsive: true })

});

// d3.csv("static/csv/mean.csv", function(data) {});

var tabulate = function(data, columns) {
    var table = d3.select('#data_table').append('table').style("margin-left", "50px")
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