import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
 <div className="bg-blue-600 w-screen ">

<div className="pl-[29px]">
      <ul className="flex  justify-center items-center  gap-7 rounded-lg pt-4">
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Book</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Blog</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Contact Us</Link></li>
         <br />
         &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <div className="flex relative justify-end items-center pr-30 gap-3">
         <button>
         <svg className="h-8 w-8 text-black-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
         <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
         </button>
        <button>
        <svg className="h-8 w-8 text-black-600"  width="26" height="26" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />
             <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
        </button>
         <button>
         <svg className="h-8 w-8 text-black-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /> 
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
         </button>
         </div>
        </ul>

</div>
<hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
<p className="flex relative text-lg font-serif pl-[33em] pb-[2em] pt-0">Copyright © 2025 eBook Author | Powered by eBook Author</p>
 </div>

    </>
  )
}
