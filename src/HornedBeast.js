import React from "react";
import {Card} from "react-bootstrap";


class HornedBeast extends React.Component{  
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
  
  handleModalEvent = () => {
    this.props.selectedBeast(this.props.hornedBeast);
    this.props.showSelectedBeast();
  };

    render(){
    return(
    <>
      <Card style={{ width: '18rem' }}>
      {/* <Button variant="primary" onClick={this.props.image_url}> */}
      <Card.Img variant="top" src={this.props.image_url} alt={this.props.description} height={250} onClick={this.handleModalEvent}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Card.Text onClick={this.incrementFavCount}>{this.state.favCount} ❤️ </Card.Text>
      </Card.Body>
    </Card>
    </>
    )
  }
}

export default HornedBeast