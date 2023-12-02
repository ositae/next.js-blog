import Link from 'next/link'

// data
const array = [
    'HTML',
    'CSS',
    'JavaScript',
    'EJS',
    'Bootstrap',
    'SQL',
    'Node'
]
export default function FirstPost() {
    const skillsArray = array.map((s, idx) => {
        return <p key = {idx}>{s}</p>
    })

    return (
        <div>
            <h1>First Post</h1>
            <p>This is my first post on this blog. My engineering journey started with learning about HTML, CSS, and JavaScript!</p>
            <p>I learned {array[6]} for server-side rendering.</p>
            <div>
                I have learned the following concepts: 
                {skillsArray}
            </div>
            <Link href="/">Homepage</Link>
        </div>
    )
}