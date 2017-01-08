import * as d3 from 'd3'

export default (svgSelection, nextProps, nextState) => {
  console.log('Update with D3 nextProps', nextProps)
  console.log('Update with D3 nextState', nextState)

  const { width, height, margin, stops, frequencies, runData } = nextProps
  const { xScale, yScale, xAxis, yAxis, line } = nextState

  xScale
    .domain(d3.extent(Object.keys(stops), k => stops[k]))
    .range([0, width - margin.left - margin.right])
  xAxis
    .scale(xScale)

  yScale
    .domain([0, 1000])
    .range([height - margin.top - margin.bottom, 0])
  yAxis
    .scale(yScale)
  line
    .x(d => xScale(stops[d.stop]))
    .y(d => yScale(d.time))

  svgSelection
    .attr('width', width)
    .attr('height', height)

  // Update the inner dimensions.
  const g = svgSelection.select('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

  // Update the x-axis.
  g.select('.x axis')
    .attr('transform', `translate(0,${yScale.range()[0]})`)
    .call(xAxis)

  // Update the y-axis.
  g.select('.y axis')
    .attr('transform', `translate(${xScale.range()[0]}, 0)`)
    .call(yAxis)

  // Update the line path.
  g.select('.line')
    .datum(runData)
    .attr('d', line)

  // Update the x-axis.
  g.select('.x.axis')
      .attr('transform', `translate(0,${yScale.range()[0]})`)
      .call(xAxis)

  // Update the y-axis.
  g.select('.y.axis')
      .attr('transform', `translate(${xScale.range()[0]}, 0)`)
      .call(yAxis)
}
