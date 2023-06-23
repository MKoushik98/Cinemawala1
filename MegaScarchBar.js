import logo from './1687236031545.jpg'
import './MegaScarchBar.css'
import { useRef } from 'react';
import { useState } from 'react';

import Details from '../DetailsPage/Details';


const MegaSearchBar = (props) => {
  const [data,setData]=useState({isloggedin:false})
//   const nav = useNavigate()
  const inputref = useRef()
  const fetching=()=>{
    setData({isloggedin:true})
  }


  return (  <section class='section' style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '400px', padding: '70px' }}>
    <h1 style={{ color: 'white' }}>Welcome.</h1>
    <p style={{ color: 'white' }}>Millions of movies,TV shows and people to discover.Explore now.</p>
    <input type='text' ref={inputref} class="scarch" placeholder='Scarch for a movie,TV show,person...'
     style={{ width: '1000px', borderRadius: '30px', height: '50px', borderStyle: 'none' }}>
      </input>
      <button class='button' onClick={fetching} style={{ borderRadius: '30px', width: '100px', height: '50px', borderStyle: 'none',
       backgroundColor: 'green', color: 'white' }}>Scarch</button>

       {
        (data.isloggedin)?(<Details />):(null)
       }
  </section>
  

  
  
  
  );



}

export default MegaSearchBar;