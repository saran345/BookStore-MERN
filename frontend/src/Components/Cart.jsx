import NavBar from './NavBar'
import EmailSub from './EmailSub'
import Footer from './Footer'
import BookSlide1 from './BookSlide1'

export default function Cart() {
  return (
    <>
    <div>
        <NavBar />
    </div>
    <div>
    <BookSlide1 />
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
