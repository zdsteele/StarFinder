function Scatter_Plot(dataset) {

    var corr_data = `/${dataset}`;

    d3.json(corr_data, function(data) {

        var graphInfo = Object.keys(data[0])

        var x_cor_axis = [];
        var y_cor_axis = [];

        data.forEach(element => {
            x_cor_axis.push(element[graphInfo[0]])
            y_cor_axis.push(element[graphInfo[1]])
        })

        var axes = everyTenthValue(x_cor_axis, y_cor_axis);


        var corTrace = [{
            x: axes[0],
            y: axes[1],
            type: 'scatter',
            mode: 'markers',
            text: y_cor_axis,
            marker: { color: 'yellowgreen' }
        }]

        var layout = {
            title: {
                text: `${graphInfo[0]} vs ${graphInfo[1]}`,
                font: { color: '#7FFF00' }
            },
            yaxis: { color: '#7FFF00', title: `${graphInfo[1]}` },
            xaxis: { color: '#7FFF00', title: `${graphInfo[0]}` },
            height: 1000,
            width: 1000,
            plot_bgcolor: "#000000",
            paper_bgcolor: "#343a40"

        };

        Plotly.newPlot("graphs", corTrace, layout, { responsive: true })
    })
};


function optionChanged(newDataSet) {
    // Fetch new data each time a new sample is selected
    Scatter_Plot(newDataSet);

}


init();