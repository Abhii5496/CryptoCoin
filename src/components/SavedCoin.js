import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {doc, onSnapshot, updateDoc} from 'firebase/firestore'
import {db} from '../Firebase'
import { UserAuth } from '../Conntext/AuthContext'

const SavedCoin = () => {
    const [coins, setCoins] = useState([])
    const {user} = UserAuth()

    useEffect(() =>{
        onSnapshot(doc(db, 'user' , `${user?.email}`), (doc)=>{
            setCoins(doc.data().watchList)
        })
    },[user?.email])

    const coinPath = doc(db, 'user' , `${user?.email}`)
    const deleteCoin = async (passedId) => {
        try {
            const result = coins.filter((item) => item.id !== passedId)
            await updateDoc(coinPath,{
                watchList:result
            })
        } catch (error) {
            console.log(error.messsage);
        }
    }

  return (
    <div>
     {!coins?.length === 0 ? 
     (   <p>You don't have any coin saved. Please save a coin to add it to your watch list. <Link to='/'>Click to Search</Link></p>) 
     : (
        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'> 
                    
                    <th className='px-4  '>Rank #</th>
                    <th className='text-left '>Coin</th>
                    <th className='text-left  pl-4 '>Delete</th>
                </tr>
            </thead>
            <tbody >
                {coins?.map((coin) => (
                    <tr key={coin.id} className='h-[60px] overflow-hidden border-b '>
                        <td>{coin?.rank} </td>
                        <Link to={`/coin/${coin.id}`}>
                        
                        <div className='flex items-center'>
                            <img src={coin?.image} className='w-8 mr-10' alt=''/>

                            <div>
                                <p className='hidden sm:table-cell'>{coin?.name}</p>
                                <p className='text-gray-500 text-left text-sm'>{coin?.symbol.toUpperCase()}</p>
                            </div>
                        </div>
                        </Link>

                        <td className='pl-8'>
                            <AiOutlineClose size={30} onClick={()=>deleteCoin(coin.id)} className='cursor-pointer'/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
     )}
    </div>
  )
}

export default SavedCoin