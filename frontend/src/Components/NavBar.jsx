import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import {   InputAdornment, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function NavBar() {
  return (
    <>
     <div className=' w-screen p-0 m-0 overflow-auto'>
    <nav  className="flex w-screen  px-10   py-4 bg-blue-700 ">
        <div className="flex w-full items-center justify-between text-blue-gray-900">
        <div className="mr-4 text-2xl cursor-pointer py-1.5 font-medium text-white">Logo</div>
        <ul className="flex items-center gap-6 rounded-lg">
         <li className='text-xl font-semibold'> <Link to="/">Home</Link></li>
         <li className='text-xl font-semibold'> <Link to="/book">Book</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Blog</Link></li>
         <li className='text-xl font-semibold'> <Link to="/">Contact Us</Link></li>
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
      </div>
    </>
  )
}
