import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
 <div className="bg-blue-950 w-screen">

<div >
      <ul className="flex items-center justify-center gap-6 rounded-lg pt-[2em]">
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Book</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Blog</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Contact Us</Link></li>
         <br />
         <br />
         <br />
         <li className='text-xl font-semibold'> <Link to="/">Instgram</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Facebook</Link></li>
        </ul>
</div>
<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
<p className="flex relative text-lg font-serif pl-[33em] pb-[2em] pt-0">Copyright © 2025 eBook Author | Powered by eBook Author</p>
 </div>

    </>
  )
}
