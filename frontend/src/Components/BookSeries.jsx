import { useEffect , useState } from "react"
import Api from "./Data/Api"

export default function BookSeries() {

  const [getSlide,setGetSlide]=useState([])
  const [count,setCount]=useState(2)

 
   useEffect(()=>{
      const display=async()=>{
        const response=await Api.getSlide("https://bookstore-mern-production.up.railway.app/book/slide")
        setGetSlide([...response])
      }
      display()
   },[])

   const click=async(bookId)=>{
    try{
      const response=await Api.sendId(`/cart/bookId/${bookId}`)
      console.log("Send Id successfully",response)
    }catch(err){
      console.error("error occur",err)
    }
  }

  return (
    <>
     {getSlide.length > 0 && (
     <div className="flex w-screen h-screen mt-[2em] mb-[4em] " key={getSlide[count]._id}>
             <div className="flex-1 flex flex-col items-start justify-center p-5">
                   <section>
                     <div className="flex relative ">
                     <h2 className="flex-auto text-[18px] text-blue-900  font-serif  absolute left-[10em] top-[-7em] whitespace-nowrap ">New Collections</h2>
                     </div>
                     <div className="flex relative">
                       <h1 className="flex-auto text-[3.5rem] font-serif absolute left-[3.1em] top-[-2em] whitespace">
                        Buy a Complete<br />
                       Series
                       </h1>
                       {/* <h3 className='flex relative text-lg font-serif  items-center justify-center pt-[2em]'>
                       The Harry Potter series, written by J.K. Rowling, is a beloved collection of seven books that follow the journey of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley. The series takes readers through their magical adventures at Hogwarts School of Witchcraft and Wizardry as they face dark forces, uncover secrets, and grow into heroes. The books blend themes of friendship, bravery, love, and the battle between good and evil, captivating 
                       readers of all ages and becoming a cultural phenomenon worldwide.</h3> */}
                     </div>
                     <div className="flex relative pl-[11em] top-[5em]">
                    <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-white bg-blue-600  border border-blue-600 hover:bg-blue-300  " onClick={()=>click(getSlide[count]._id)} >  ${getSlide[count].bookPrice} Purchase</button>
                    <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-gray-900 bg-white md border  hover:bg-sky-500 hover:text-blue-900  focus:ring-sky-300 transition-colors" > More Info</button>
                     </div>
                    </section>
                 </div>


                <div className="flex-none w-2/4 p-6" key={getSlide[count]._id}>
                <img
                  className="w-[450px] h-[720px] object-cover rounded-md"
                  src={getSlide[count].bookImage}
                  alt="Gallery image"
                />
              </div>

             </div>
                 )}
    </>
  )
}
