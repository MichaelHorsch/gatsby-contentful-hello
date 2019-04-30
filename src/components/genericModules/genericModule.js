import React from "react"
import QuoteModule from './quoteModule'
import PizzaModule from './pizzaModule'

const GenericModule = ({ data }) => {
  return (
    <div>
      {data.map(item => {
        if (item && item.__typename === 'ContentfulQuoteModule' && item.quote) {
          return <QuoteModule quote={item.quote.quote} author={item.author} />
        }
        if (item && item.__typename === 'ContentfulPizzaModule') {
          return <PizzaModule pizza={item.pizza} />
        }
        return null
      })}
    </div>
  )
}

export default GenericModule