"use client"
import React from 'react'
import ChartLine from '../ChartLine/ChartLine'
import { DownloadOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Transactions } from './data'
import "./row3.css"

export default function Row3() {
  return (
    <div className='flex flex-wrap gap-2 '>
      <div className=' max-w-[700px] h-[390px]  rounded-lg bg-slate-700 text-white flex-grow overflow-y-hidden py-3'>
        <div className='flex justify-between p-4 pb-0'>
          <div>
            <h1>Revenue Generated</h1>
            <p className='mt-2'>$532,352.32</p>
          </div>
          <Button className='rounded-full px-0'><DownloadOutlined/></Button>
        </div>
          <div className='w-full h-full '>
            <ChartLine isdaiboard={true} />
          </div>
      </div>
      <div className='min-w-[235px] flex-grow'>
        <div className='rounded-lg bg-slate-700 text-pink-600 p-3 text-lg font-semibold mb-2'> Recent Transactions</div>
        <div className='overflowCss h-[335px]'>
          {Transactions.map((item,index)=>{
              return(
                <div key={index} className='rounded-lg bg-slate-700 text-white p-3 flex gap-1 items-center justify-between mt-1' >
                  <div>
                    <h1>{item.user}</h1>
                    <h4>{item.txId}</h4>
                  </div>
                  <div>{item.date}</div>
                  <div>{item.cost}</div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
