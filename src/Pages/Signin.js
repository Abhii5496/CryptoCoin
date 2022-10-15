import React,{useState} from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import {signIn, UserAuth} from '../Conntext/AuthContext'

const Signin = () => {
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [error,setError] =useState('')

  const navigate = useNavigate()

  const {signIn} = UserAuth()

  const handleSubmit= async(e) =>{
    e.preventDefault()  
    setError('')
    try {
      await signIn(email,password)
      navigate('/account')
    } catch (error) {
      setError(error.message)
      console.log(error.message);
    }
  }
  return (
    <div>
      <div className='max-w-[400px] mx-auto min-h-[400px] px-4 py-20 '>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label>Email</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={((e) => setEmail(e.target.value))} className='w-full bg-primary border-input  h-[35px]
               rounded-2xl' type="text"/>
              <AiOutlineMail className='top-2 absolute right-2  text-gray-400'/>
            </div>
          </div>
          <div className='my-4'>
            <label>Password</label>
            <div className='my-2 w-full relative rounded-2xl shadow-xl'>
              <input onChange={((e) => setPassword(e.target.value))} className='w-full bg-primary border-input rounded-2xl  h-[35px]' type="text"/>
              <AiFillLock className='absolute top-2 right-2  text-gray-400'/>
            </div>
          </div>
          <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl
          shadow-xl'>Sign In</button>
        </form>
        <p className='w-full my-2 py-2 text-center'>Don't have account? <Link to='/signup'><span className="text-green-500">Sign Up</span></Link></p>
      </div>
    </div>
  )
}

export default Signin