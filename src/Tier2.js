import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      childColor: getReducedColor(nextProps.color)
    })
  }

  updateParent = (e) => {
    e.stopPropagation();
    this.props.updateColor();
  }
  updateChild = (e) => {
    e.stopPropagation();
    this.setState({
      childColor: getRandomColor()
    })
  }
  render() {
    return (
      <div className="tier2" onClick={this.updateParent} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChild}/>
        <Tier3 color={this.state.childColor} handleChildClick={this.updateChild}/>
      </div>
    )
  }
}
