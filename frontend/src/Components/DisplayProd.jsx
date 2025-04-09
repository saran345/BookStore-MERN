import { useEffect, useState } from "react"
 import axios from "axios"
import Api from "./Data/Api"

export default function DisplayProd() {

  const [book,setBook]=useState([])

  const getBook=async()=>{
    try{
      //  const response=await Api.cartGet("/cart/getcart")
      const response=await axios.get("https://bookstore-mern-qx0h.onrender.com/cart/getcart")
       // setBook(response.data.response || [])
     const quantity=(response.data.response|| []).map(b=>({
       ...b,
       quantity:1

     }))
     setBook(quantity)
       console.log("fetched data successfully",response.data)

    }catch(err){
     console.log("Error occur while fetching data",err)
     setBook([])
    }
 }

 useEffect(()=>{


    getBook();

 },[])

   const remove=async(id)=>{
    // const response=await Api.postDelete(`/cart/bookId/${id}`);
    const response=await axios.delete(`https://bookstore-mern-qx0h.onrender.com/cart/bookId/${id}`)
    getBook();
    console.log("deleted",response)
   }

   const increment=(id)=>{
    console.log(id)
    setBook((prev)=>prev.map((b)=> b.id===id?{...b,quantity:b.quantity+1}:b))
   }

  const decrement=(id)=>{
    setBook((prev)=>prev.map(b=> b.id===id && b.quantity>1?{...b,quantity:b.quantity-1}:b))
  }



 const totalQuantity=()=>{
  return book.reduce((sum,book)=> sum+Number(book.bookPrice*book.quantity),0)
 }
 const tax=100;

 const total=totalQuantity()+tax;

 console.log(totalQuantity())
  return (
      <>

<div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
  <h1 className="text-2xl font-semibold text-gray-800">Your Cart</h1>
  {book.length > 0 ? (
    <div className="grid md:grid-cols-3 gap-4 mt-8">
      <div className="md:col-span-2 space-y-4">
        {book.map((b) => (
          <div
            key={b._id}
            className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]"
          >
            <div className="flex gap-4">
              <div className="flex w-27 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                <img
                  src={b.bookImage}
                  className="w-full h-full object-contain"
                  alt={b.bookName}
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-lg sm:text-base font-semibold text-gray-800">
                  {b.bookName}
                </h2>
                <div className="mt-3 flex items-center gap-3" >
              <button type="button" onClick={() => decrement(b.id)}                className="flex items-center justify-center w-5 h-5 bg-gray-400 outline-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                  <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                </svg>
              </button>
              <span className="font-bold text-sm leading-[18px]">{b.quantity}</span>
              <button type="button" onClick={()=> increment(b.id)}
                className="flex items-center justify-center w-5 h-5 bg-gray-800 outline-none rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                  <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                </svg>
              </button>
            </div>
              </div>
            </div>
            {/* Wishlist and Delete */}
            <div className="ml-auto flex flex-col">
              <div className="flex items-start gap-4 justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 cursor-pointer fill-gray-400 hover:fill-pink-600 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 cursor-pointer fill-gray-400 hover:fill-red-600 inline-block"
                  viewBox="0 0 24 24"  onClick={()=>remove(b._id)}
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg lg:text-base text-gray-800 mt-16">
                &#8377;{b.bookPrice}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* Order Summary */}
      <div className="bg-gray-100 rounded-md p-4 pt-3  h-max  ">
        <h2 className="text-lg font-bold text-gray-800 mt-4 border-b border-gray-400 pb-2">
          Order Summary
        </h2>
        <ul className="text-gray-800 mt-6 space-y-3">
          <li className="flex flex-wrap text-lg">
            Subtotal{" "}
            <span className="ml-auto font-bold">
              &#8377;{totalQuantity()}
            </span>
          </li>
          <li className="flex flex-wrap text-lg border-b border-gray-300 pb-5">
            Tax <span className="ml-auto font-bold">&#8377;{tax}</span>
          </li>
          <li className="flex flex-wrap text-lg font-bold border-b border-gray-300 pb-6">
            Total{" "}
            <span className="ml-auto font-bold">
              &#8377;{total}
            </span>
          </li>
        </ul>
        <button className="text-lg font-semibold justify-center items-center w-full bg-blue-800 text-white rounded-md mb-4">
          Checkout
        </button>

      </div>
    </div>
  ) : (
    <div>
      <p className="text-xl font-sans sm:text-md justify-center text-gray-900">
        Your Cart is Empty
      </p>
    </div>
  )}
</div>;



    </>



)
}



