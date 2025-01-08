import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import {  InputAdornment, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import frontImage from '../assets/images/front.jpeg';


export default function Home() {
  return (
 <>             
    <div className=''>
    <nav  className="flex w-screen  px-10   py-1 bg-blue-700 ">
        <div className="flex w-full items-center justify-between text-blue-gray-900">
        <div className="mr-4 text-2xl cursor-pointer py-1.5 font-medium text-white">Logo</div>
        <ul className="flex items-center gap-6 rounded-lg">
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
        </ul>
       <div className='flex items-center gap-3 rounded-lg'>
       <InputAdornment position="start" sx={{ color: 'text.primary' }}>
        <SearchIcon fontSize="large" />
          </InputAdornment>
        <Typography >
         <AccountCircleIcon fontSize='large' />
        </Typography>
       </div>
       </div >
      </nav>
      {/* main section */}
      <div className="flex w-screen h-screen  bg-blue-400">
      <div className="flex-1 flex flex-col items-start justify-center p-5">
            <section>
              <div className="flex relative ">
                <h2 className="absolute bottom-40 right-0">New Sections</h2>
              </div>
              <div className="flex justify-baseline items-end mb-4">
                <p className="text-white">
                  This is some content on the left side.
                </p>
              </div>
            </section>
          </div>

        <div className="flex-none w-2/4 p-5">
            <img
              className="w-[500px] h-[700px] object-cover rounded-lg"
              src={frontImage}
              alt="Gallery image"
            />
          </div>
      </div>
    </div>



  </>

)
}
