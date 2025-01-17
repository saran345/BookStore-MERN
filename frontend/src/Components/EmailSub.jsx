import footBookImage from "../assets/images/Books/book3.png"


export default function EmailSub() {
  return (
    <>
           <div className="flex w-screen h-[25rem] items-center justify-center">
  <div className=" bottom-[10em] left-[20em] flex flex-col items-center">
    <div className='flex relative text-lg font-serif left-[-1em]'>
      <h2>Subscribe Now to Get Regular Update!</h2>
    </div>
    <div className="flex space-x-4 ">
      <input  type="email" name="email"  placeholder="Enter your email"
        className="border border-gray-300 rounded p-3 w-64"
      />
      <input  type="submit"   value="Submit" className="p-3 w-30 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600" />
    </div>
  </div>
  <br />
  <div className="relative flex justify-center items-center top-[2em] ">
  <img
    className="w-[450px] h-[300px] object-contain rounded-lg"
    src={footBookImage}
    alt="Author"
  />

</div>

</div>
    </>
  )
}
