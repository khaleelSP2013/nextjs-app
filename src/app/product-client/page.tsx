'use client'
import React, { useEffect, useState } from 'react'
type productType ={
   id:string;
   email:string;
   username:number;
    description:string
}
const ProductClientPage = () => {
    
    const [product,setProduct]=useState<productType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const getProduct = async()=>{
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Network response was not ok");
              }
            const products=await response.json();
            setProduct(await products);
        } catch(err){
            if (err instanceof Error) {
                setError(err.message);
              } else {
                setError("An unknown error occurred");
              }
        }finally {
            setLoading(false);
          }
    }
    useEffect(()=>{
        getProduct();
    },[])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
  return (
    <>
    <h2>Product Detail - Client Side Render Component</h2>
     
       <ul className="space-y-4 p-4">
    {product.map((product) => (
      <li
        key={product.id}
        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
      >
        <h2 className="text-xl font-semibold">{product.username}</h2>
        <p>{product.description}</p>
        <p className="text-lg font-medium">${product.email}</p>
        {/* <p>{details.title}</p> */}
      </li>
    ))}
  </ul>
    </>
  )
}

export default ProductClientPage
