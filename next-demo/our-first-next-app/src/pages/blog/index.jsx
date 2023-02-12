import { Nav } from "@/components/Nav";
import Link from "next/link";

const Blog = (props) => {
    return (
        <>
            <Nav />
            <ul>
           {props?.posts.map(item => (
                <li key ={item.id}>
                    <Link href={`blog/${item.id}`}>{item.title}</Link>
                </li>
           ))}
        </ul>
        </>
    )
}


export async function getStaticProps () {
    console.log('I am from server')
    const response = await fetch(`http://localhost:5000/posts`);

    const data = await response.json()

    return {
        props: {
            posts: data
        },
        revalidate: 52000
    }
}

export default Blog