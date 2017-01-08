import React, { Component, PropTypes } from 'react'
import * as d3 from 'd3'
import generateUuid from './generateUuid'
import formatSeconds from './formatSeconds'
import updateWithD3 from './updateWithD3'
import './run-chart.css'

class RunChart extends Component {
  state = {
    uuid: generateUuid(),
    xScale: d3.scaleLinear(),
    yScale: d3.scaleLinear(),
    xAxis: d3.axisBottom().tickSize(6, 0),
    yAxis: d3.axisLeft().tickSize(6, 0).tickFormat(formatSeconds),
    line: d3.line()
  }

  // Create the skeleton at initial render (React div is already there)
  componentDidMount() {
    const svg = d3.select(`#${this.state.uuid}`).append('svg')
    const frame = svg.append('g')
    frame.append('g').attr('class', 'x axis')
    frame.append('g').attr('class', 'y axis')
    frame.append('path').attr('class', 'line')
    frame.append('g').attr('class', 'frequencies')

    updateWithD3(svg, this.props, this.state)
  }

  shouldComponentUpdate(nextProps, nextState) {
    const svg = d3.select(`#${this.state.uuid}`).select('svg')
    updateWithD3(svg, nextProps, nextState)
    return false // Don't update, D3 will handle that
  }

  render() {
    return <div id={this.state.uuid} />
  }
}

RunChart.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  margin: PropTypes.object.isRequired,
  stops: PropTypes.object.isRequired,
  frequencies: PropTypes.array.isRequired
}

RunChart.defaultProps = {
  margin: {top: 20, right: 20, bottom: 20, left: 55}
}

export default RunChart
