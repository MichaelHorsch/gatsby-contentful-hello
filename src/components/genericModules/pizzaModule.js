import React from "react"

const PizzaModule = ({pizza}) => {
  console.log('pizza', pizza)
  return (
    <div>
      <h1>Pizza?</h1>
      <h2>{pizza}</h2>
    </div>
  )
}

export default PizzaModule