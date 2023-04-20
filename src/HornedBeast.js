import React from "react";
import {Card, Button} from "react-bootstrap";


class HornedBeast extends React.Component{
  // console.log(this.props.title)
  // console.log(this.props.description)
  // console.log(this.props.imgUrl)
  
  constructor(props){
    super(props);
    this.state = {
      favCount: 0
    }
  };
  incrementFavCount = () => {
    this.setState({
      favCount: this.state.favCount + 1
    })
  };
  
    render(){
    return(
    <>
      <Card style={{ width: '18rem' }}>
      <Button variant="primary" onClick={this.incrementFavCount}><Card.Img variant="top" src={this.props.image_url} alt={this.props.description} height={250}/></Button>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        <p>{this.state.favCount} ❤️ </p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
    )
  }
}

export default HornedBeast