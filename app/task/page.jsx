import Product from '@/components/TaskUi/Product/Product'
import QrCode from '@/components/TaskUi/QrCode'
import UserCard from '@/components/TaskUi/UserCard'
import React from 'react'

const page = () => {
  return (
    <div style={{ backgroundColor:'#F6F4F5', height:'auto'}}>

    
<div className="grid grid-cols-12 gap-4 px-28 py-28" >
  <div className=" xl:col-span-4 md:col-span-12 lg:col-span-4 sm:col-span-12  mt-3">
    <UserCard/>
    <QrCode/>
  </div>

  <div className="xl:col-span-8 md:col-span-12 lg:col-span-8 sm:col-span-12 p-4"> 
  <Product/>
  </div>
</div>
</div>


    )
}

export default page