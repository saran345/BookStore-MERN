import { useEffect,useState } from "react"
// import Api from "./Data/Api"
import axios from "axios"
import Api from "./Data/Api"


export default function BooksPage() {

   const [book, setBook] = useState([])


 
const getFetch=async()=>{
   const response=await axios.get("https://bookstore-mern-production.up.railway.app/book/booklist")
    setBook((prev)=>[...prev,...response.data])
   console.log("fetched data successfully",response)
  //  console.log(book)

}
useEffect(()=>{

  getFetch();

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

    {/* display the book */}
     <div className="p-4 mt-[2em] mb-[6em]" >
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">


              {book.map((b,index) => (
                <div key={b._id?b.id:`book-${index}`} className="flex flex-col items-center" >
                  <div className="flex flex-col   items-center relative">
                  <img   className="w-35 h-47 object-cover rounded-t-lg"
                  src={b.bookImage}  />
                  <div className="flex justify-between items-center w-auto px-4 mt-3 gap-4">
                   <h2 className="text-xl font-bold text-gray-800">${b.bookPrice}</h2>
                     <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={()=>click(b._id)}>
                      Add to Cart </button>
                           </div>
                  </div>
                </div>
              ))}


     </div>
     </div>
    </>
  )
}
