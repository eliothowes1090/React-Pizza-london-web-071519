import React from "react"

const Pizza = ({pizza, updateSelectedPizza}) => {
  
  const handleClick = () => {
    updateSelectedPizza(pizza)
  }

  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{ pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button onClick={handleClick} type="button" className="btn btn-primary">Edit Pizza</button ></td>
    </tr>
  )
}

export default Pizza
