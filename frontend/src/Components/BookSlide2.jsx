

export default function BookSlide2() {
  return (
    <>

     <div className="flex flex-row md:flex-row items-center md:items-start">
        <div className="flex-none w-2/4 p-6">
                     <img
                       className=" flex pl-[13em]  min-w-52 h-[700px] object-cover rounded-md"
                       src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704917687i/186074.jpg"
                       alt="Gallery image"
                     />
                   </div>
                   <div className="md:w-1/2 p-3 pt-28 ml-[-2em]">
          <h2 className="flex-auto text-[20px]  font-serif font-bold ">New Collections</h2>
          <h1 className="flex flex-auto text-[3.5rem]  font-serif ">The Name Of Wind</h1>
          <h3>
           &quot;The Name of the Wind&quot; by Patrick Rothfuss is a captivating fantasy novel and the first installment in
            The Kingkiller Chronicle series.
            It follows the story of Kvothe, a gifted musician, magician, and adventurer,
            as he recounts his life journey to a chronicler. The book blends lyrical prose with rich world-building,
           immersing readers in Kvothe&apos;s struggles, triumphs, and search for meaning in a world of wonder and danger.</h3>
           <div className="flex relative pl-[3em] top-[3em]"><br />
                <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-white bg-blue-600  border border-blue-600 hover:bg-blue-300  " >  $100 Purchase</button>
                <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-gray-900 bg-white md border  hover:bg-sky-500 hover:text-blue-900  focus:ring-sky-300 transition-colors" > More Info</button>
                 </div>
          </div>
         
     </div>
    </>
  )
}
