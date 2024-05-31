import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const[responseData,setData]=useState([])

  useEffect(()=>{
    fetch('/api/userinfo')
    .then((res)=>res.json())
    .then((res)=>setData(res))
},[])
  console.log(responseData)
  return (
    <>
      <div className='border-2 rounded-md bg-slate-300  '>
      <div>
      <h1 className=''>username:{responseData.login}</h1>
      <h1> userId:{responseData.id}</h1>
      </div>
      <img src={responseData.avatar_url} className='rounded w-20'/>
      </div>
    </>
  );
}

export default App
