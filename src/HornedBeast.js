import React from "react";

class HornedBeast extends React.Component{
  render(){
      console.log(this.props.title)
      console.log(this.props.description)
      console.log(this.props.imgUrl)
    return(
    <>
      <h2>{this.props.title}
      </h2>
      <p>
      {this.props.description}
      </p>
      <img src={this.props.imgUrl} alt=''/>
    </>
    )
  }
}
export default HornedBeast