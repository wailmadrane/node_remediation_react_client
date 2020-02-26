
import React from 'react'

const Title = ({ heading }) => {
   return <h1>{ heading % 10 === 0 && heading > 0 ? 'yes' : heading }</h1>
}

export default Title