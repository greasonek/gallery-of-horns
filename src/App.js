import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

// React.Component is the parent - get functionality from parent
class App extends React.Component{
  render(){
    return(
      <>
      <Header/>
      <Main/>
      <Footer/>
      </>
    )
  }
}
// render return is required for every class; responsible for rendering html
export default App;
