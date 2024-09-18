import React from 'react'
// import pic from '../assets/145750054.jpg'
// import pics from '../assets/asim.jpg'
import {  motion } from 'framer-motion'
 
const Main = () => {
  return (
    <div className='font-bold tracking-tight'>
      <div className="relative overflow-hidden bg-gray-950">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
  <motion.h1 whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}}   transition={{duration:1}}   className="text-4xl font-bold tracking-tight text-white sm:text-6xl">The Future of Electronics is Here</motion.h1>
  <motion.p whileInView={{opacity:1,x:0 }} initial={{x:-100,opacity:0}}     transition={{duration:1}}className="mt-4 text-xl text-gray-500">Explore our latest collection of cutting-edge gadgets and devices designed to enhance your digital life and keep you ahead of the curve.</motion.p>
</div>

            <div>
              <div className="mt-10">
                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <motion.img 
                          whileInView={{opacity:1,y:0}} 
                          initial={{y:-100,opacity:0 }} 
                          transition={{duration:1}}
                          src="https://i.pinimg.com/736x/8b/c8/00/8bc8003f3f9155fdac930abc18f9e918.jpg" alt="" className="h-full w-full object-cover object-center"/>
                          {/* <img src= {pic} alt="" className="h-full w-full object-cover object-center"/> */}
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img 
                           whileInView={{opacity:1,y:0}} 
                           initial={{y: 100,opacity:0 }} 
                           transition={{duration:1}}
                          src="https://shop.zebronics.com/cdn/shop/products/Zeb-Jet-Pro-pic1.jpg?v=1659157507" alt="" className="h-full w-full object-cover object-center"/>
                          {/* <img src= {pics} alt="" className="h-full w-full object-cover object-center"/> */}
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img 
                           whileInView={{opacity:1,y:0}} 
                           initial={{y:-100,opacity:0 }} 
                           transition={{duration:1}}
                          src="https://static.vecteezy.com/system/resources/thumbnails/021/888/548/small_2x/happy-young-asian-woman-model-with-stylish-trendy-sun-glasses-enjoy-listening-music-by-headphone-audio-and-dancing-isolated-on-pink-studio-background-technology-girl-fashion-accessory-concept-photo.jpg" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img 
                            animate={{ rotate: 360 }}
                            transition={{ type: 'spring' }}
                          src="https://avstore.in/cdn/shop/files/6.AVStore-Bose-QuietComfort-45-Noise-Lifestyle.jpg?v=1685695623&width=2000" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img 
                          whileInView={{opacity:1,y:0}} 
                          initial={{y: 100,opacity:0 }} 
                          transition={{duration:1}}
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT3_uHXVLeiqgKIOmQe1kVaPN1LLsq2bk0A&s" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img
                          whileInView={{opacity:1,y:0}} 
                          initial={{y: -100,opacity:0 }} 
                          transition={{duration:1}}
                           src="https://img.freepik.com/premium-photo/girl-influencer-taking-picture-herself-selfie-girl-holding-phone_902994-170.jpg" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <motion.img
                          whileInView={{opacity:1,y:0}} 
                          initial={{y: 100,opacity:0 }} 
                          transition={{duration:1}}
                          src="https://i.pinimg.com/736x/18/67/94/186794a3d1b88f56f9172c8bdfbfd008.jpg" alt="" className="h-full w-full object-cover object-center"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
