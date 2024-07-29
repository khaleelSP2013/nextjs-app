import React from 'react'
// export const fetchCache="default-cache"
type Product={
    id:number;
    title:string;
    body:number;
    description:string;
}
const ProductsPage = async () => {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{
            revalidate:10
        }
    })
    const products=await response.json();

    // const responseDetail=await fetch("http://localhost:3001/products/1")
    // const details =await responseDetail.json();

  return (
    <>
    <h2>Product Detail Render Server Side Component</h2>
    <ul className="space-y-4 p-4">
    {products.map((product: Product) => (
      <li
        key={product.id}
        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
      >
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-medium">${product.body}</p>
        {/* <p>{details.title}</p> */}
      </li>
    ))}
  </ul>
</>
  )
}

export default ProductsPage
