import React from "react";


function Show({ todos }) {
  return (
    <>
      
       {todos.map((todo)=>(
      <>
      <Z  fName={todo.name} email={todo.email} phone={todo.phone} location={todo.location} link={todo.link} cName={todo.cName} cRole={todo.cRole}/>
     
      </>
       ))}

      

      
    </>
  );
}

const Z = function(props){
  return(
    <>
      <h1> {props.fName}</h1>
      <h2>{props.email}</h2>
      <h2>{props.phone}</h2>
      <h2>{props.location}</h2>
      <h2>{props.link}</h2>

      <h2>{props.cName}</h2>
      <h2>{props.cRole}</h2>
      
    </>
  );
};



export default Show;

