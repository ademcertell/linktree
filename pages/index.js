import Avatar from '../components/Avatar'
import LinkCard from "../components/LinkCard";
import Social from "../components/Social";

export default function Home() {
    return (
        <div className="bg-gradient-to-tr from-gray-900 via-blue-700 to-purple-600 h-screen">
           <Avatar/>

           <LinkCard/>

           <Social/>
        </div>
    )
}
