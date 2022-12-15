import React from "react";


function Show2({lis }) {
  return (
    <>
      
      <ul>
        {lis.map((item)=>{return <li>{item}</li>})}
      </ul>

      
    </>
  );
}



// const ZZ = (props)=>{
//     return(
//       <>
//         <h1>{props.name}</h1>
//       </>
//     );
//   }

  export default Show2
