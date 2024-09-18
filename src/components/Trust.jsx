import React from 'react'
import { motion } from 'framer-motion'
const Trust = () => {
  return (
    <motion.div 
    whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1}}
    className='font-bold tracking-tight'> 
        <h2 className='flex justify-center mt-10 font-bold text-2xl'>TRUST</h2>
        <hr  className='mt-3 border-4 border-slate-900'/>
      <div className="   py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">New users annually</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
      </div>
    </dl>
  </div>
</div>

    </motion.div>
  )
}

export default Trust
