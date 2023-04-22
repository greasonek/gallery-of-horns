import React from "react";
import { Modal } from "react-bootstrap";


class SelecedBeast extends React.Component {
  render(){ 
    return(      
    <Modal show={this.props.showModal} onHide={this.props.hideSelectedBeast}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.hornedBeast.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={this.props.hornedBeast.image_url} alt={this.props.hornedBeast.description} height={250}/>
      </Modal.Body>
      <Modal.Footer>
      {this.props.hornedBeast.description}

      <button variant="primary" onClick={this.props.hideSelectedBeast}>
            Close
          </button>
      </Modal.Footer>
      </Modal>)
  }
}

export default SelecedBeast;