import { Download } from '@mui/icons-material'
import React from 'react'

export default function Row1() {
  return (
    <div className='text-right'>
        <button className='py-3 px-5 bg-sky-500 text-white rounded-lg transition-all duration-300 hover:bg-sky-600'><Download/> Download Report</button>
    </div>
  )
}
