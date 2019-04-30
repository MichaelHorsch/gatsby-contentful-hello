import React from "react"

const QuoteModule = (props) => {
  return (
    <div>
      <h1>{props.quote}</h1>
      <h2>{props.author}</h2>
    </div>
  )
}

export default QuoteModule