import frontImage from '../assets/images/front.jpeg';

export default function BookSlide1() {
  return (
   <>
    <div className="flex w-screen h-screen  ">
         <div className="flex-1 flex flex-col items-start justify-center p-5">
               <section>
                 <div className="flex relative ">
                 <h2 className="flex-auto text-[18px] font-serif absolute left-[10em] top-[-7em] whitespace-nowrap ">New Release</h2>
                 </div>
                 <div className="flex relative">
                   <h1 className="flex-auto text-[3.5rem] font-serif absolute left-[3.1em] top-[-2em] whitespace-nowrap">
                     Tell Me Everything
                   </h1>
                   <h3 className=' flex-auto text-[18px] pb-[6em] pl-[9em]'>
                       Cambria Brockman is a gripping psychological thriller set in an elite New England college. It follows Malin and her close group of friends as secrets unravel, exposing hidden betrayals and dark pasts. With suspense
                   and unexpected twists, the story explores loyalty, identity, and the complexities of human relationships.</h3>
                 </div>
                 <div className="flex relative pl-[14em] top-[-3em]">
                <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-white bg-blue-600  border border-blue-600 hover:bg-blue-300  " >  $110 Purchase</button>
                <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-gray-900 bg-white md border  hover:bg-sky-500 hover:text-blue-900  focus:ring-sky-300 transition-colors" > More Info</button>
                 </div>
                </section>
             </div>
   
           <div className="flex-none w-2/4 p-6">
               <img
                 className="w-[500px] h-[730px] object-cover rounded-md"
                 src={frontImage}
                 alt="Gallery image"
               />
             </div>
         </div>
   </>
  )
}
