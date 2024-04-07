"use client"
import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './data'
import { goe } from './world_countries'
import { useTheme } from '@mui/material'

interface props{
    isDashboard:boolean
}

export default function ChartGoe({isDashboard}:props) {
    const themeFromMui=useTheme()
  return (
    <div className='h-full'>
        <ResponsiveChoropleth
        data={data}
        features={goe.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor={themeFromMui.palette.primary.main}
        borderWidth={0.5}
        borderColor="#152538"
        projectionScale={160}
        legends={
            
            isDashboard?[]:[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: themeFromMui.palette.primary.main,
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: themeFromMui.palette.primary.main,
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}
