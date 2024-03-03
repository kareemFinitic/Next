import React from 'react'

// images 
import share from '../../assets/images/share.svg'
import eye from '../../assets/images/eye.png'
import file from '../../assets/images/file.svg'
import document from '../../assets/images/document-download.png'
import Image from 'next/image'
import logo from '../../assets/images/logo.svg'
import qrCode from '../../assets/images/qrcode.png'

// styles 
import style from './TaskUi.module.css'
const QrCode = () => {
    const { module_border } = style
  return (
    <div className='mt-10'>
    <div className="bg-white h-auto w-11/12 rounded-lg px-9 py-8">

{/* Header Content Card  */}
<div className=' flex justify-between '>

<div>
<h3 className="text-xl">QR Code</h3>
</div>
<div className='flex gap-6'>
<Image src={eye} alt="eye"  />
<Image src={share} alt="sahre" />
<Image src={file} alt="file" />
</div>
</div>

<div className='flex mt-6 py-5 rounded-2xl px-3 gap-3' style={{ backgroundColor: '#FFF5E9'}}>
<Image src={document} alt='document'/>
<p className='text-sm mt-1'>Download the QR code or share it with your friends.</p>
</div>


<div className='rounded-2xl'>
<div className={` mt-6 py-5 rounded-2xl px-3 gap-3 ${module_border} flex justify-center items-center`}  style={{ borderRadius:'80px'}}>
<div>
<Image src={logo} alt='logo' style={{ marginLeft:'30px'}}/>
<h4 className='text-2xl mt-6 font-bold' style={{ marginLeft:'20px'}}>Hala Ahmed</h4>
<Image src={qrCode} alt='logo'/>
<p className='text-lg mt-2 ms-1'>Follow Us on Mazaady</p>

</div>
</div>
</div>

    </div>
  </div>
  )
}

export default QrCode