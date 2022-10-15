import React, { useState } from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {UserAuth} from '../Conntext/AuthContext'


const Signup = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [error,setError] =useState('')

  const navigate = useNavigate()

  const {signUp} = UserAuth()

  const handleSubmit= async(e) =>{
    e.preventDefault()  
    setError('')
    try {
      await signUp(email,password)
      return navigate('/')
    } catch (error) {
      setError(error.message)
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[400px] px-4 py-20 '>
        <h1 className='text-2xl font-bold'>Sign Up</h1>
        {error ? <p className='bg-red-300 p-3 my-2'>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={((e) => setEmail(e.target.value))}
              className='w-full bg-primary border-input h-[35px] rounded-2xl' type="text"/>
              <AiOutlineMail className='absolute right-2 top-2 text-gray-400'/>
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={((e) => setPassword(e.target.value))}
              className='w-full bg-primary border-input rounded-2xl h-[35px]' type="password"/>
              <AiFillLock className='absolute right-2 top-2 text-gray-400'/>
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl
          shadow-xl'>Sign Up</button>
        </form>
        <p className='w-full my-2 py-2 text-center'>Already have an account?<Link to='/signin'><span className="text-green-500">Sign In</span></Link></p>
      </div>
    </div>
  )
}

export default Signup