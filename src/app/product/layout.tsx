import React from 'react'

const LayoutPage =async({children}:{
    children:React.ReactNode
}) => {
const productResponse=await fetch("https://jsonplaceholder.typicode.com/users",{
    next:{
        revalidate:20
    }
});
const products=productResponse.json();
console.log(products)
  return (
    <>
    <h2>Layout Page</h2>
    {children}
    </>
  )
}

export default LayoutPage
