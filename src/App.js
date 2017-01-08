import React, { Component } from 'react'
import RunChart from './RunChart'
import EditableDataTable from './EditableDataTable'
import './App.css'

//const vehicles = 2

const frequencies = [ 2.5, 5, 10, 12, 15, 20, 30, 60 ]

/*const runData = {
  "eastbound": {
    "sequence": [
      { "run": 85, "stop": "C1", "dwell": 15 },
      { "run": 95, "stop": "C2", "dwell": 20 },
      { "run": 50, "stop": "C3", "dwell": 15 },
      { "run": 63, "stop": "C4", "dwell": 15 },
      { "run": 97, "stop": "C5", "dwell": 10 },
      { "run": 88, "stop": "B"}
    ],
    "at_buffer": 55
  },
  "westbound": {
    "sequence": [
      { "run": 85, "stop": "C5", "dwell": 15 },
      { "run": 95, "stop": "C4", "dwell": 20 },
      { "run": 50, "stop": "C3", "dwell": 15 },
      { "run": 63, "stop": "C2", "dwell": 15 },
      { "run": 97, "stop": "C1", "dwell": 10 },
      { "run": 88, "stop": "A"}
    ],
    "at_buffer": 55
  }
}
*/

const stops = {
  "A": 0, "C1": 2.10, "C2": 3.40, "C3": 5.00,
  "C4": 7.25, "C5": 8.05, "B": 10.00
}

class App extends Component {
  state = {
    data: [
      { "run": 85, "stop": "C5", "dwell": 15 },
      { "run": 95, "stop": "C4", "dwell": 20 },
      { "run": 50, "stop": "C3", "dwell": 15 },
      { "run": 63, "stop": "C2", "dwell": 15 },
      { "run": 97, "stop": "C1", "dwell": 10 },
      { "run": 88, "stop": "A"}
    ]
  }

  handleChange(index, dimension, newValue) {
    console.log('Change!', index, dimension, newValue)
    const newData = this.state.data
      .map((d, i) => {
        if (i === index)
          return { ...d, [dimension]: newValue }
        else
          return d
      })
    this.setState({ data: newData })
  }

  render() {
    const runDataForChart = this.state.data
      .map(d => ({ stop: d.stop, time: d.run })) // WRONG, just WIP

    return <div className="App">
      <EditableDataTable
        data={this.state.data}
        onChange={this.handleChange.bind(this)} />
      <RunChart
        width={400} height={500}
        frequencies={frequencies} stops={stops}
        runData={runDataForChart} />
    </div>
  }
}

export default App
