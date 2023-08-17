import React from 'react'

type GreetinProps = {
  name?:string;
}
const Greet = (props:GreetinProps) => {
  return (
    <div>
      <h4>Hello {props.name ? props.name : 'Guest' }</h4>
    </div>
  )
}

export default Greet
