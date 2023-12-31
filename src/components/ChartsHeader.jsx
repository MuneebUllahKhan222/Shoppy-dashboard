import React from 'react'

const ChartsHeader = ({category, title}) => {
  <div className='mb-10'>
      <p className='text-gray-400'>
        {category}
      </p> 
      <p className='text-3xl font-extrabold text-slate-900'>
        {title}
      </p>
    </div>
}

export default ChartsHeader