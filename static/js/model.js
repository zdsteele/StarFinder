function createSGD() {

    var show = document.getElementById("sgd_conf");
    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }



    d3.json("/sgd", function(data) {

        var x = ['Galaxy', 'Quasar', 'Star']
        var y = ['Star', 'Quasar', 'Galaxy']
        var z = []
        var a = []

        data.forEach(element => {

            z.push(Object.values(element))
                // x.push(element['Unnamed: 0'])
        });

        z.forEach(arr => {
            a.push(arr.slice(1))
        })

        const max = Math.max(...[].concat(...a));

        a = a.reverse()

        trace1 = {
            type: 'heatmap',
            x: x,
            y: y,
            zmax: max,
            zmin: 1,
            z: a,
            colorscale: [
                ['0', 'rgb(255,245,240)'],
                ['0.2', 'rgb(254,224,210)'],
                ['0.4', 'rgb(252,187,161)'],
                ['0.5', 'rgb(252,146,114)'],
                ['0.6', 'rgb(251,106,74)'],
                ['0.7', 'rgb(239,59,44)'],
                ['0.8', 'rgb(203,24,29)'],
                ['0.9', 'rgb(165,15,21)'],
                ['1', 'rgb(103,0,13)']
            ],
            autocolorscale: false
        };
        data = [trace1];
        layout = {
            title: 'SGD Confusion Matrix',
            width: 400,
            xaxis: {
                title: 'Predicted value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            yaxis: {
                title: 'True Value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            height: 400,
            barmode: 'overlay'
        };
        Plotly.plot('sgd_conf', {
            data: data,
            layout: layout
        });
    })
}

function createSVM() {

    var show = document.getElementById("svm-conf");
    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }

    d3.json("/svm", function(data) {

        var x = ['Galaxy', 'Quasar', 'Star']
        var y = ['Star', 'Quasar', 'Galaxy']
        var z = []
        var a = []

        data.forEach(element => {
            z.push(Object.values(element))
                // x.push(element['Unnamed: 0'])
        });

        z.forEach(arr => {
            a.push(arr.slice(1))
        })

        const max = Math.max(...[].concat(...a));

        a = a.reverse()

        trace1 = {
            type: 'heatmap',
            x: x,
            y: y,
            zmax: max,
            zmin: 1,
            z: a,
            colorscale: [
                ['0', 'rgb(255,245,240)'],
                ['0.2', 'rgb(254,224,210)'],
                ['0.4', 'rgb(252,187,161)'],
                ['0.5', 'rgb(252,146,114)'],
                ['0.6', 'rgb(251,106,74)'],
                ['0.7', 'rgb(239,59,44)'],
                ['0.8', 'rgb(203,24,29)'],
                ['0.9', 'rgb(165,15,21)'],
                ['1', 'rgb(103,0,13)']
            ],
            autocolorscale: false
        };
        data = [trace1];
        layout = {
            title: 'Support Vector Machine Confusion Matrix',
            width: 400,
            xaxis: {
                title: 'Predicted value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            yaxis: {
                title: 'True Value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            height: 400,
            barmode: 'overlay'
        };
        Plotly.plot('svm-conf', {
            data: data,
            layout: layout
        });

    })

}

function createForrest() {

    var show = document.getElementById("rf-conf");
    if (show.style.display === "none") {
        show.style.display = "block";
    } else {
        show.style.display = "none";
    }

    d3.json("/forrest_heat", function(data) {

        var x = ['Galaxy', 'Quasar', 'Star']
        var y = ['Star', 'Quasar', 'Galaxy']
        var z = []
        var a = []

        data.forEach(element => {
            z.push(Object.values(element))
                // x.push(element['Unnamed: 0'])
        });

        z.forEach(arr => {
            a.push(arr.slice(1))
        })

        const max = Math.max(...[].concat(...a));

        a = a.reverse()

        trace1 = {
            type: 'heatmap',
            x: x,
            y: y,
            zmax: max,
            zmin: 1,
            z: a,
            colorscale: [
                ['0', 'rgb(255,245,240)'],
                ['0.2', 'rgb(254,224,210)'],
                ['0.4', 'rgb(252,187,161)'],
                ['0.5', 'rgb(252,146,114)'],
                ['0.6', 'rgb(251,106,74)'],
                ['0.7', 'rgb(239,59,44)'],
                ['0.8', 'rgb(203,24,29)'],
                ['0.9', 'rgb(165,15,21)'],
                ['1', 'rgb(103,0,13)']
            ],
            autocolorscale: false
        };
        data = [trace1];
        layout = {
            title: 'Support Vector Machine Confusion Matrix',
            width: 400,
            xaxis: {
                title: 'Predicted value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            yaxis: {
                title: 'True Value',
                titlefont: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            height: 400,
            barmode: 'overlay'
        };
        Plotly.plot('rf-conf', {
            data: data,
            layout: layout
        });

    })

}