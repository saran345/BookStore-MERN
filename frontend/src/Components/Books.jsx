
import BooksPage from "./BooksPage"
import NavBar from "./NavBar";
import Footer from "./Footer";
import BookSeries from "./BookSeries";
import BookSlide2 from "./BookSlide2";

export default function Books() {
  return (
    <>
    <div>
    <NavBar />
    </div>
    <div className="w-screen h-96 bg-slate-500">
        <h1 className="flex relative font-serif text-[4em] items-center justify-center pt-[1em]">Books</h1>
        <p className="flex relative text-lg font-serif  items-center justify-center pt-[2em]">Explore the world of books, where every page opens a new adventure. From timeless classics to contemporary gems, our
          <br /> collection offers something for every reader. Dive into stories that entertain, educate, and inspire</p>
    </div>
    <div>
    <BooksPage />
    </div>
    <div>
     <BookSeries />
    </div>
    <div>
      <BookSlide2 />
    </div>
    <div>
      <Footer />
    </div>

    </>
  )
}
