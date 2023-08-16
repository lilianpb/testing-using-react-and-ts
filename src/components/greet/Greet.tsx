import React from 'react'

type GreetinProps = {
  name?:string;
}
const Greet = (props:GreetinProps) => {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  )
}

export default Greet
