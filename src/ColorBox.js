import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      // <div className="color-box" style={{opacity: 2}}>
      //   {if (this.props.value >= 0.2) {
      //     return (
      //       <div>
      //         <ColorBox opacity={this.props.value - 0.1} />
      //       </div>
      //         );
      //     } else {
      //       return null;
      //     }
      //   }
      // </div>
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
      </div>
    )
  }

}
