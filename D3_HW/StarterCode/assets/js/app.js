// @TODO: YOUR CODE HERE!
d3.csv('assets/data/data.csv').then((csvData) => {
    console.log(csvData)

let svg = d3.select('#scatter')
    .append('svg')
    .attr('class', 'chart')
    .append('g').attr('class', 'xText')

let xtext = d3.select('xText')

xtext.append('text')
.attr('y', 0)
.attr('data-name', 'age')
.attr('data-axis', 'x')
.attr('class', 'aText')
.text('age')


})