interface Person {
  firstName:string;
  lastname:string
  age:number;
  address:Address;
  isAlive?: boolean;
}

interface Address {
  country:string;
  houseNro:number;
}



export const ObjectLiterals = () => {

  const person: Person = {
    age: 37,
    firstName: "Fernando",
    lastname: "Herrera",
    address: {
      country: 'Canada',
      houseNro: 615
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>
      { JSON.stringify( person, null, 2 ) }
      </pre>
    </>
  )
}
