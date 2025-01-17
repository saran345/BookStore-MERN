import authorImage from "../assets/images/author.jpg";

export default function Author() {
  return (
    <>
    <div className="flex w-screen h-screen  ">
          <div className="flex-1 flex flex-col items-start justify-center p-5">
                <section>
                  <div className="flex relative ">
                  <h1 className="flex-auto text-[37px] font-serif font-bold absolute left-[20em] top-[0.5em] whitespace-nowrap ">A Word From The Author</h1>
                  </div>
                  <div className="flex relative">
                    <p className="flex-auto text-[20px] font-medium absolute left-[37em] top-[5em] whitespace-nowrap">
                    Writing this book has been a journey of discovery and reflection. It began<br />
                    as a spark of inspiration during a quiet evening and grew into a story I felt<br />  compelled to share.
                    This work is a tribute to resilience,hope, and the beauty <br /> of human connections. To everyone who has believed in me,
                    your support <br /> has been my guiding light. I hope these pages resonate with you and offer<br /> a piece of the world through my eyes.
                    </p>
                  </div>
                   <div className='flex relative left-[50em] top-[20em]'>
                   <button type="button" className="py-3 px-11 me-8 mb-2 text-lg font-medium text-gray-900 bg-white md border  hover:bg-sky-500 hover:text-blue-900  focus:ring-sky-300 transition-colors" > More Info</button>
                   </div>
                  <div className="flex relative pl-[14em] top-[-2em]">
                  <img
                  className="w-[450px] h-[500px] object-contain rounded-lg"
                  src={authorImage}
                  alt="Gallery image"
                />
                  </div>
                 </section>
              </div>
    
          </div>
    </>

  )
}
