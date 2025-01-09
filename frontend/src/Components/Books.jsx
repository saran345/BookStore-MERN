
import BooksPage from "./BooksPage"
import NavBar from "./NavBar";
import Footer from "./Footer";
import BookSeries from "./BookSeries";

export default function Books() {
  return (
    <>
    <div>
    <NavBar />
    </div>
    <div className="w-screen h-96 bg-slate-500">
        <h1 className="flex relative font-serif text-[4em] items-center justify-center pt-[1em]">Books</h1>
        <p className="flex relative text-lg font-serif  items-center justify-center pt-[2em]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, atque? Quam ratione minus<br />
            iste iusto adipisci corrupti! Animi quam quisquam aut,
            cupiditate inventore, aliquid non adipisci <br />unde, mollitia repudiandae veritatis.</p>
    </div>
    <div>
    <BooksPage />
    </div>
    <div>
     <BookSeries />
    </div>
    <div>
      <Footer />
    </div>

    </>
  )
}
