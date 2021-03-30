// Using this function to cut down on the amount the plotly graphs 
// Are trying to plot. 



// Making smaller x and y axese
function everyTenthValue(array_x, array_y) {
    sliced_x = []
    sliced_y = []

    for (i = 1; i <= array_x.length - 1; i += 50) {
        sliced_x.push(array_x[i])
    }

    for (i = 1; i <= array_y.length - 1; i += 50) {

        sliced_y.push(array_y[i])
    }

    return [sliced_x, sliced_y]
};

function init() {

    d3.json("/corr_data", function(data) {


        var x_cor_axis = [];
        var y_cor_axis = [];


        data.forEach(element => {
            x_cor_axis.push(element.r)
            y_cor_axis.push(element.z)
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
                text: 'r vs z',
                font: { color: '#7FFF00' }
            },
            yaxis: { color: '#7FFF00', title: 'z' },
            xaxis: { color: '#7FFF00', title: 'r' },
            height: 1000,
            width: 1000,
            plot_bgcolor: "#000000",
            paper_bgcolor: "#343a40"

        };

        Plotly.plot("graphs", corTrace, layout)
    })
};