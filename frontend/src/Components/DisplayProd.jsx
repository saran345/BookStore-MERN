import { useEffect, useState } from "react"
 import axios from "axios"
// import Api from "./Data/Api"

export default function DisplayProd() {

  const [book,setBook]=useState([])

 useEffect(()=>{

    const getBook=async()=>{
       try{
         //  const response=await Api.cartGet("/cart/getcart")
         const response=await axios.get("http://127.0.0.1:7000/cart/getcart")
          setBook(response.data.response || [])
          console.log("fetched data successfully",response.data)

       }catch(err){
        console.log("Error occur while fetching data",err)
        setBook([])
       }
    }
    getBook();

 },[])



  return (
      <>
      <div className="font-serif max-w-5xl mx-auto md:max-w-xl bg-white py-4" >
      <h1 className="font-bold  text-3xl  text-center">SHOPPING CART</h1>


      {book.length >0 ? (
         book.map((b)=>(
            <div key={b._id} >
            <div className="grid md:grid-cols-3 gap-8  mt-16 ">
       <div className="col-span-2 flex items-start gap-4 bg-gray-200">
       <div className="w-28 h-28 md:w-27 md:h-27 shrink rounded-lg p-2">
      <img src={b.bookImage}
      className="w-full h-full object-contain "
       />
      </div>
       <div className="flex flex-col">
         <h2 className="text-base md:font-bold md:text-xs lg:text-lg lg:font-semibold flex item-center gap-1 mt-6" >
            {b.bookName}</h2>
            <button className="mt-6 flex items-center px-3 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
            >h</button>
       </div>
       </div>
      </div>

            </div>

         ))
      ) : (
         <h2>Your Cart is Empty!</h2>
      )}



</div>
      </>



)
}
