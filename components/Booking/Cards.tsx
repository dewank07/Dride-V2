"use client"
import CardsList from '@/data/CardsList'
import Image from 'next/image'
import React, { useState } from 'react'

function Cards() {
    const [activeIndex, setActiveIndex]=useState<any>()
  return (
    <div>
        <h2 className='text-md font-semibold'>Payment Method</h2>
        <div className='grid grid-cols-5 mt-2 pl-2'>
            {
                CardsList.map((items:any, index:number)=>(
                    <div 
                    key={index}
                    onClick={()=>setActiveIndex(index)}
                    className={`w-[50px] border-[1px] flex items-center justify-center rounded-md cursor-pointer hover:border-yellow-400 hover:scale-110 transition-all ${activeIndex==index?'border-yellow-400 border-[2px]':null}`}>
                    <Image src={items.image} alt='card' width={30} height={50} className='h-auto w-auto'/> 
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards