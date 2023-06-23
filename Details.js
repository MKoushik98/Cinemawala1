import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Details=(props)=>{
    const [info,setInfo]=useState([])


//      const options = {
//          method: 'GET',
//          headers: {
//        accept: 'application/json',
//        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjkzNzJmMDE4NDhlZWU0MThhNmQ0ZGNlMDNlYTgwMCIsInN1YiI6IjY0OGFlM2Y3NTU5ZDIyMDBmZjBmMzNiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CinLgz3pLT780jQphl7NABf06cUYgwOISQuJPWWXriA'
//      }
//    };
      
//  useEffect(()=>{
//      axios.get('https://api.themoviedb.org/3/search/movie')
//      .then((res)=>{
//          console.log(res.data)

//         })
//         .catch((err)=>{
//             console.log(err)
//         })

//  },[])

useEffect(()=>{
    axios.get(
     'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=1f9372f01848eee418a6d4dce03ea800')
     .then((res)=>{
        console.log(res.data.results

            )
        setInfo(res.data.results)

     })
     .catch((err)=>{
console.log(err)
     })
},[])
// const{id,adult}=info


     return(
        <>
        <table style={{backgroundColor:'white'}}>
            {
                info.map((val)=>{
                    return(
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.original_language}</td>
                            <td>{val.original_title}</td>
                            <td>{val.overview}</td>
                        </tr>
                    )

                })
            }
        </table>
       
    
  
        </>
    )
}
export default Details;