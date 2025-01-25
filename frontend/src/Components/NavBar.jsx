import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <>
     <div className=' w-screen  p-0 m-0 overflow-auto  '>
    <nav  className="flex w-screen  px-10   py-4 bg-blue-600">
        <div className="flex w-full items-center justify-between text-blue-gray-900">
        <div className="mr-4 text-2xl pl-16 cursor-pointer py-1.5 font-medium text-white">Logo</div>
        <ul className="flex items-center gap-6 rounded-lg">
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/book">Book</Link></li>
         <li className='text-xl font-semibold'> <Link to="/blog">Blog</Link></li>
         <li className='text-xl font-semibold'> <Link to="/contact">Contact Us</Link></li>

        </ul>
       <div className='flex items-center gap-4 rounded-lg'>
       <Link to="/login" >
       <svg className="h-8 w-8 text-zinc-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
       </Link>
       <Link to="/cart">
       <svg className="h-8 w-8 text-zinc-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
</svg>
       </Link>
       </div>
       <div>
       </div>
       </div >
      </nav>
      </div>
    </>
  )
}
