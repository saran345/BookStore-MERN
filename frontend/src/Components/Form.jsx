
export default function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen  font-serif bg-gray-100 pt-5 pb-6 ">
      <div className="bg-white shadow-lg rounded-lg p-12 w-full max-w-[44em] ">
      <h1 className="font-sans text-[2em] text-baseline mb-6 text-gray-800">Let&apos;s Talk</h1>
      <p className="text-lg">Have Questions? We’d Love to Hear from You!</p>
         <hr className="h-px my-8  bg-gray-200 border-0 dark:bg-gray-700 " />
        <form className="grid gap-5">
         <div>
           <label className=" text-lg font-medium text-gray-700">name:</label>
           <input type="text" name="text"
           className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"  />
         </div>
         <div>
           <label className=" text-lg font-medium text-gray-700">email:</label>
           <input type="email" name="text"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"   />
         </div>
         <div>
           <label className=" text-lg font-medium text-gray-700">Subject:</label>
           <input type="text" name="text"
            className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"   />
         </div>
         <div>
         <label className=" text-lg font-medium text-gray-700">Message:</label>
         <textarea  name="text"  rows={4}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
         />
         </div>
         <button type="button" className="w-full py-2 px-4 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 focus:outline-none">Send Message </button>
        </form>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
         <h1 className="font relative text-[2em]">Follow Me</h1>
         <div className="flex relative gap-2">
         <button>
         <svg className="h-8 w-8 text-blue-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>
         <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
         </button>
        <button>
        <svg className="h-8 w-8 text-blue-600"  width="26" height="26" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />
             <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
        </button>
         <button>
         <svg className="h-8 w-8 text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /> 
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
         </button>
         </div>
      </div>
    </div>
  )
}
