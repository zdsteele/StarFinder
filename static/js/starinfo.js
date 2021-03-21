// Used to Display Basic Information on the Cover page about these astronomical objects

// function showData() {
//     document.getElementById('Star').onclick = function() {
//         var Div = d3.select('#starinfo')
//         Div.selectAll("h2").data([]).exit().remove()
//         showStar()
//     };
//     document.getElementById('Galaxy').onclick = function() {

//         var Div = d3.select('#starinfo')
//         Div.selectAll("h2").data([]).exit().remove()
//         showGalaxy()
//     };
//     document.getElementById('Quasar').onclick = function() {
//         var Div = d3.select('#starinfo')
//         Div.selectAll("h2").data([]).exit().remove()
//         showQuasar()
//     };
// };

function showStar() {

    var Div = d3.select('#starinfo')
    Div.selectAll("h2").data([]).exit().remove()

    var data = [1]
    var starDiv = d3.select('#starinfo').selectAll('h2')
        .data(data)
        .enter()
        .append('h2')
        .text("A Star is a ball of Hydrogen")
};

function showGalaxy() {

    var Div = d3.select('#starinfo')
    Div.selectAll("h2").data([]).exit().remove()

    var data = [1]
    var starDiv = d3.select('#starinfo').selectAll('h2')
        .data(data)
        .enter()
        .append('h2')
        .text("A Galaxy is a Collection of Stars")
};

function showQuasar() {

    var Div = d3.select('#starinfo')
    Div.selectAll("h2").data([]).exit().remove()

    var data = [1]
    var starDiv = d3.select('#starinfo').selectAll('h2')
        .data(data)
        .enter()
        .append('h2')
        .text("A Quasar is a Far Away Galaxy")
};


// showData()