import NavBar from './NavBar'
import Footer from './Footer'
import DisplayProd from './DisplayProd'

export default function Cart() {
  return (
    <>
    <div>
        <NavBar />
    </div>
    <div className='max-h-full overflow-y-auto border-gray-300 rounded-lg' >
    <DisplayProd />
    </div>
    <div className="fixed bottom-0 left-0">
        <Footer />
    </div>
    </>
  )
}
