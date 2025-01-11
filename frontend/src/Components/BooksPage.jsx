import { useEffect,useState } from "react"
// import Api from "./Data/Api"
import axios from "axios"

export default function BooksPage() {

   const [book, setBook] = useState([])


 
const getFetch=async()=>{
   const response=await axios.get("http://127.0.0.1:7000/book/booklist")
    setBook((prev)=>[...prev,...response.data])
   console.log("fetched data successfully",response)
  //  console.log(book)
   
}
useEffect(()=>{

  getFetch();

},[])



  return (
    <>

    {/* display the book */}
     <div className="p-4">
     <div className="grid grid-cols-3 md:grid-cols-4 gap-x-[-4] gap-y-2">

            <ul>
              {book.map((b,index) => (
                <li key={b._id?b.id:`book-${index}`} >
                  <div className="flex flex-col  items-center relative">
                  <img   className="w-35 h-47 object-cover rounded-t-lg"
                  src={b.bookImage}  />
                  <div className="flex justify-between items-center w-auto px-4 mt-3 gap-4">
                   <h2 className="text-lg font-bold text-gray-800">${b.bookPrice}</h2>
                     <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Add to Cart </button>
                           </div>
                  </div>
                </li>
              ))}
            </ul>

     </div>
     </div>
    </>
  )
}
