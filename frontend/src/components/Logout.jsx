import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {

    const[authUser,setAuthUser]=useAuth()
const handlLogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("user")
        toast.success("logout successful")
        setTimeout(()=>{
    window.location.reload();
    localStorage.setItem("user",JSON.stringify(res.data.user))
},1000)

    } catch (error) {
        toast.error("error logging out ")
        setTimeout(()=>{},3000)
    }
}



  return (
    <div>
    <button onClick={handlLogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer '>Logout</button>
      
    </div>
  )
}

export default Logout
