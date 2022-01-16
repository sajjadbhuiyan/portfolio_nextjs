import { useRouter } from "next/router";
function Product({product}){

    const router = useRouter()
    if (router.isFallback) {
        <div>Loading...</div>
    }

    return (
        <>
            <h1>Product Details</h1>
            <p>
                {product.description}
            </p>
        </>
    )
}

export default Product;

export async function getStaticProps(context){
    const {params} = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    return {
        props:{
            product: data
        }
    }
}

export async function getStaticPaths(){
    return {
        paths: [{ params: { productId: '1' } }],
        fallback: true
      }
}