import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'
import Cards from './Cards'

function Booking() {

  const sendTransaction = async() =>{

    const params = [{
        "from":"0x2c45fb55893a5E8EB9C9C226cE61454Fbbd86e5c",
        "to":"0x72c57f4085e6f133ea70ed01fbec649c909f7a39",
        "gas":"",
        "gasPrice":"",
        "value":"",
        "data":""
    }]


    const result = await window.ethereum?.request({method: "eth_sendTransaction", params}).catch((err:any)=>{
        console.log(err)
    })
}
    
  return (
    <div className='p-5'>
        <h2 className='text-xl font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 rounded-md h-full' >
        <AutocompleteAddress/>
        <Cars/>
        <Cards/>
        <button className='w-full  bg-yellow-400 p-1 rounded-md mt-4'>
          Book
        </button>
        </div>
        </div>
  )
}

export default Booking