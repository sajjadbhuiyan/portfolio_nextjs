import Link from "next/link"

function ProductsList({products}){
    return (
        <>
         <h1>All Product</h1>
         {
             products.map(product =>{
                 return(
                    <dev key={product.id}>
                       <Link href={`products/${product.id}`} passHref>
                        <h2>{product.title}</h2>
                        <h1>{product.price}</h1>
                       </Link>
                    </dev>
                 )
             })
         }
        </>
    )
}

export default ProductsList

export async function getStaticProps(){
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return{
        props:{
            products:data
        }
    }
}