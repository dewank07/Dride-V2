"use client"
import CardsList from '@/data/CardsList'
import { error } from 'console'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
    const [activeIndex, setActiveIndex]=useState<any>()


    const sendTransaction = async() =>{

        const params = [{
            "from":"",
            "to":"",
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
    <div>
        <h2 className='text-md font-semibold'>Payment</h2>
        <div className='grid grid-cols-3 gap-0 mt-2 pl-2'>
            <div className='text-md'>Total ride cost :</div>
            <div className='font-semibold text-right col-span-2'>0.34444684686 Eth</div>
        </div>
        <div className='mt-2 pl-2 flex justify-between border-[1px] border-gray-300 rounded-md px-2.5 text-gray-300'>Driver Wallet Address: <span>0x12321...323</span></div>
    </div>
  )
}

export default Cards