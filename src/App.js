import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import hornedBeastData from "./data.json";
import SelecedBeast from "./SelectedBeast";
// import HornedBeast from "./HornedBeast";

// React.Component is the parent - get functionality from parent
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hornedBeast:{},
      showModal: false
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
  render(){
    return(
      <>
      <Header/>
      <Main hornedBeastData={hornedBeastData}
      showSelectedBeast = {this.showSelectedBeast}
      selectedBeast = {this.selectedBeast}
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
