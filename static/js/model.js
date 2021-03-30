// trace1 = {
//     type: 'heatmap',
//     x: ['Galaxy', 'Quasar', 'Star'],
//     y: ['Star', 'Quasar', 'Galaxy'],
//     zmax: 39565,
//     zmin: 1,
//     z: [
//         [616, 12, 29812],
//         [1104, 7255, 3],
//         [39565, 200, 1433]
//     ],
//     colorscale: [
//         ['0', 'rgb(255,245,240)'],
//         ['0.2', 'rgb(254,224,210)'],
//         ['0.4', 'rgb(252,187,161)'],
//         ['0.5', 'rgb(252,146,114)'],
//         ['0.6', 'rgb(251,106,74)'],
//         ['0.7', 'rgb(239,59,44)'],
//         ['0.8', 'rgb(203,24,29)'],
//         ['0.9', 'rgb(165,15,21)'],
//         ['1', 'rgb(103,0,13)']
//     ],
//     autocolorscale: false
// };
// data = [trace1];
// layout = {
//     title: 'Confusion Matrix',
//     width: 400,
//     xaxis: {
//         title: 'Predicted value',
//         titlefont: {
//             size: 18,
//             color: '#7f7f7f'
//         }
//     },
//     yaxis: {
//         title: 'True Value',
//         titlefont: {
//             size: 18,
//             color: '#7f7f7f'
//         }
//     },
//     height: 400,
//     barmode: 'overlay'
// };
// Plotly.plot('sgd_conf', {
//     data: data,
//     layout: layout
// });
function createSGD() {

    document.getElementById('sgd_conf').style.display = 'block';
    document.getElementById('svm-conf').style.display = 'none';

    // var x = document.getElementById("sgd_conf");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }

    d3.json("/forrest_heat", function(data) {


        console.log(data)

        var trace1 = [{
            type: 'heatmap'

        }]


    })

}

function createSVM() {
    document.getElementById('svm-conf').style.display = 'block';
    document.getElementById('sgd_conf').style.display = 'none';

    // var x = document.getElementById("svm");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }





}