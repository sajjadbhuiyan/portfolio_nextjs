import Link from 'next/link'
function Post({posts}){
    return (
        <>
            <h1>Post</h1>
            {
                posts.map(post =>{
                    return(
                        <dev key={post.id}>
                            <Link href={`post/${post.id}`} passHref>
                                <h2>
                                    {post.id} {post.title}
                                </h2>
                            </Link>
                        </dev>
                    )
                })
            }
        </>
    )
}

export default Post

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return{
        props:{
            posts:data,
        }
    }
}