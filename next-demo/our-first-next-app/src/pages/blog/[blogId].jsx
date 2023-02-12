import { useRouter } from 'next/router'

const BlogDetails = (props) => {
    const router = useRouter();
    console.log(router.query)
    if (router.isFallback) {
        return (
            <div>Loading.....</div>
        )
    }
    return (
        <>
            <h2>
                I am a details Page of {router.query.blogId}
            </h2>
            <p>My title is {props.post?.title}</p>
        </>
    )
}

export async function getStaticProps (context) {
    const {params} = context;
    // console.log(params)
    // console.log('I am from server')
    const response = await fetch(`http://localhost:5000/posts/${params.blogId}`);

    const data = await response.json()

    return {
        props: {
            post: data
        }
    }
}

export async function getStaticPaths () {
    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);

    // const data = await response.json();
    // const paths = data.map(item => (
    //     {params: {blogId: item.id + }}
    // ))
    return {
        paths: [
            {params: {blogId: '1'}},
            {params: {blogId: '2'}},
            {params: {blogId: '3'}}
        ],
        fallback: true
    }
}


export default BlogDetails