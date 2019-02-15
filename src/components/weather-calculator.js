import React, { Component } from 'react'

class WeatherApp extends Component {
  render() {
    return (
      <div>
        <ul className="list-inline list-wrapper clearfix">
          {this.props.city && this.props.country && <li><strong>Location:</strong> {this.props.city}, {this.props.country}</li>}
          {this.props.temperature && <li><strong>Temperature:</strong> {this.props.temperature}</li>}
          {this.props.humidity && <li><strong>Humidity:</strong> {this.props.humidity}</li>}
          {this.props.description && <li><strong>Description:</strong> {this.props.description}</li>}
          
        </ul>
        <p>{this.props.error && <span>{this.props.error}</span>}</p>
      </div>
    )
  }
}

export default WeatherApp;