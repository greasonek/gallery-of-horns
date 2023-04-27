import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import hornedBeastData from "./data.json";
import SelecedBeast from "./SelectedBeast";
import { Form } from "react-bootstrap";
// import HornedBeast from "./HornedBeast";

// React.Component is the parent - get functionality from parent
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hornedBeast:{},
      showModal: false,
      hornedBeastData: hornedBeastData,
    }
  }

showSelectedBeast = () => {
  this.setState({showModal: true})
};

hideSelectedBeast = () => {
  this.setState({showModal: false})
};

selectedBeast = (beastObj) => {
  this.setState({hornedBeast: beastObj})
}

changeHornCount = (e) => {
  e.preventDefault();
  let filteredHorns;
  
  if(e.target.value === '1'){
    filteredHorns = hornedBeastData.filter(beast => beast.horns === 1)
  } else if (e.target.value === '2'){
    filteredHorns = hornedBeastData.filter(beast => beast.horns === 2)
  } else if (e.target.value === '3'){
    filteredHorns = hornedBeastData.filter(beast => beast.horns === 3)
  } else { filteredHorns = hornedBeastData}
  this.setState({hornedBeastData: filteredHorns})
}

  render(){
    return(
      <>
      <Header/>
      <Form>
        <Form.Group>
          <Form.Label>How many horns do you want your beast to have?</Form.Label>
          <Form.Select onChange={this.changeHornCount}>
      <option>Select Your Horn Count</option>
      <option value="1">One Horn</option>
      <option value="2">Two Horns</option>
      <option value="3">Three Horns</option>
    </Form.Select>
        </Form.Group>
      </Form>


      <Main 
      showSelectedBeast = {this.showSelectedBeast}
      selectedBeast = {this.selectedBeast}
      hornedBeastData={this.state.hornedBeastData}
      
      />
      <SelecedBeast
        showModal={this.state.showModal}
        hideSelectedBeast = {this.hideSelectedBeast}
        hornedBeast={this.state.hornedBeast}
      />
      <Footer/>
      </>
    )
  }
}
// render return is required for every class; responsible for rendering html
export default App;
