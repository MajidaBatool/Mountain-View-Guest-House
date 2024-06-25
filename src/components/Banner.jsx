import React from 'react'

const Banner = ({children,title,subtitle,next}) => {
  return (
    <div className='banner'>
        <h1 className='text-white'>{title}</h1>
        <h2 className='text-white'>{next}</h2>
        <div></div>
        
        <p className='text-white font-bold'>{subtitle}</p>
        {children}
    </div>
  )
}

export default Banner