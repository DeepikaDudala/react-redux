import React from 'react'
import {  useSelector } from 'react-redux'


function Count() {
    
const value = useSelector(state => state.counter.value)
  return (
    <div>
        <h1>{value}</h1>
    </div>
  )
}

export default Count