// import { Link } from 'react-router-dom'
// import SearchIcon from '@mui/icons-material/Search';
// import {   InputAdornment, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Footer from './Footer';
import EmailSub from './EmailSub';
import BookSlide1 from './BookSlide1';
import Author from './Author';
import NavBar from './NavBar';


export default function Home() {
  return (
 <>
 <div>
 <div>
       <NavBar />
 </div>
      <div>
        <BookSlide1 />
      </div>
<div>
  <Author />
</div>
<div>
  <EmailSub />
</div>
<div>
  <Footer />
</div>
    </div>
  </>

)
}
