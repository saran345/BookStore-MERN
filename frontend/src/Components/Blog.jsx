import Blogger from "./Blogger"
import NavBar from "./NavBar"
import EmailSub from './EmailSub'
import Footer from './Footer'

export default function Blog() {
  return (
    <>
    <div>
        <NavBar />
    </div>
    <div className="w-screen h-96 bg-blue-300">
        <h1 className="flex relative font-serif text-[4em] items-center justify-center pt-[1em]">Blog</h1>
        <p className="flex relative text-lg font-serif  items-center justify-center pt-[2em]">Welcome to our blog, where we share insights, updates, and stories on a variety of topics.<br />
         From book reviews to the latest trends, our posts are designed to inform, inspire, and engage. Stay tuned for<br />
         fresh content that sparks your curiosity and enhances your knowledge</p>
    </div>
     <div>
      <Blogger />
     </div>
     <div>
      <EmailSub />
     </div>
     <div>
      <Footer />
     </div>
    </>
  )
}
