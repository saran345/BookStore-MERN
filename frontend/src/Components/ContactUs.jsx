import Form from './Form'
import NavBar from './NavBar'
import EmailSub from './EmailSub'
import Footer from "./Footer"

export default function ContactUs() {
  return (
   <>
   <div>
    <NavBar />
   </div>
   <div className="w-screen h-96 bg-slate-500">
        <h1 className="flex relative font-serif text-[4em] items-center justify-center pt-[1em]">Contact Us</h1>
        <p className="flex relative text-lg font-serif  items-center justify-center pt-[2em]">We value your feedback and are here to help with any questions or concerns you may have. <br />
          Whether you &apos;re looking for support, need more information, or simply want to share your thoughts, <br /> our team is ready to assist. Please feel free to reach out to us through the form below,
            and we will get back to you <br /> as soon as possible. Your satisfaction is our priority, and we look forward to hearing from you!</p>
    </div>
   <div >
    <Form />
   </div>
   <div>
    <EmailSub />
   </div>
   <div>
    <Footer/>
   </div>
   </>
  )
}
