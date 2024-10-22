"use client"
import { useEffect, useState} from 'react'
import { WeatherCard } from '@/components/cards'

export default function page() {
    useEffect(()=>{
        const getWeather = async ()=>{
            const data = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.18667018134291&lon=21.571567886983093&appid=857e242877e6706c40a39eb1619b2eca&units=metric')
            const json = await data.json()
            console.log(json)
        }
        getWeather()
    },[])
  return (
    <div>
        <WeahterCard/>
    </div>
  )
}
