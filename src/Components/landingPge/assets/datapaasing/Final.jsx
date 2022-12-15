import React from 'react'

const Final = ({data} ) => {

    let ok = data.UName?.trim();
    console.log(ok)
  return (
    <>
        <h1>{ok}</h1>
    </>
  )
}

export default Final