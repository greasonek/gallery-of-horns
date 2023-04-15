import React from "react";
import Student from "./Student";

class Main extends React.Component{
  render(){
    return(
    <>
      <p>Hello World!</p>
      <Student name={'Emily'}/>
      <Student name={'Josh'}/>
      <Student name={'Lacey'}/>
    </>
    )
  }
}
export default Main