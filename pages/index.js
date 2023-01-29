import Head from 'next/head';
import Avatar from '../components/Avatar'
import LinkCard from "../components/LinkCard";
import Social from "../components/Social";


export default function Home() {
    return (
        <>
            <title>Linktree - Adem Can</title>
            <meta name="description" contenet="The linktree I made with extjs and TailwindCSS" />
            <link href="https://raw.githubusercontent.com/AdemCanCertel/homepage/main/static/photos/favicon.png" rel="icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <div className="bg-gradient-to-tr from-gray-600 via-blue-600 to-purple-300 h-screen">
                <Avatar />

                <LinkCard />

                <Social />
            </div>

        </>
    )
}
