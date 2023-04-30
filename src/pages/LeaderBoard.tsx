import {Link} from 'react-router-dom'
import { ChevronLeft } from 'lucide-react';

const LeaderBoard = () => {
  return (
    <div className=' min-h-screen'>
        <Link to={'/'}>
                <button className=" absolute mt-10 px-5 py-1 border border-blue-500 text-white font-medium text-sm rounded
                hover:bg-blue-500 transition ease-out duration-300 top-0 left-10 flex items-center">
                <ChevronLeft className=" h-4"/>Back </button>
        </Link>
    </div>
  )
}

export default LeaderBoard