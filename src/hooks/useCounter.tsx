import { useState } from "react";




export const useCounter = () => {

  const [ count, setCount ] = useState<number>(10);

  const increaseBy = ( value:number) => {
    setCount( count + value );
  }

  return (
    // Properties
    count,

    //Methods
    increaseBy
  )
}
