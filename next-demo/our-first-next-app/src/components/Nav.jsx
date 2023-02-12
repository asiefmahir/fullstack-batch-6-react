import Link from 'next/link'

export const Nav = () => {
    return (
        
        <ul>
            <li>
                <Link href='/'>Go to Home</Link>
            </li>
            <li>
                <Link href='about'>Go to about</Link>

            </li>
            <li>
                <Link href= 'blog'>Go to Blog</Link>
            </li>

        </ul>
    )
}