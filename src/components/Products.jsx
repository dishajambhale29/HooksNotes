import { useEffect, useState } from "react"

export default function Products()
{
    //fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log);
    // let response=await fetch('https://dummyjson.com/products')
    // let data=await response.json()
    // console.log(data);

    const [products,setProducts]=useState([]);
    async function fetchproducts()
    {
        let response=await fetch('https://dummyjson.com/products')
        let data=await response.json()
        console.log(data);
        setProducts(data.Products);

    }
    useEffect(()=>
    {
        fetchproducts();
    },[]);
    
    return(
        <>
        <h1>Products</h1>
        <p>
            {products && products.map((e)=>{
                return(
                   <div key={e.id}>
                    <h5>{e.title}  {e.price}</h5>

                   </div>
                )
            })
            }

        </p>
        </>
    )
}