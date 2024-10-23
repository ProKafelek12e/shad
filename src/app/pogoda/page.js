"use client"
import { useEffect, useState} from 'react'
import { WeatherCard } from '@/components/cards'

export default function page() {

  const [weather,setWeather] = useState()
  const [load,setLoad] = useState(true)
    useEffect(()=>{
        const getWeather = async ()=>{
          try{

            const data = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=52.18667018134291&lon=21.571567886983093&appid=857e242877e6706c40a39eb1619b2eca&units=metric')
            const json = await data.json()
            console.log(json)
            setWeather(json)
          }
          catch{

          }
          finally{
            setLoad(false)
          }
        }
        getWeather()
    },[])
  return (
    <div className='h-[80vh]'>
        {load==false && <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center'>{weather.city.name}</h1>}
        <span className='flex flex-col justify-around items-center h-full'>
        {load==false && <WeatherCard date={weather.list[0].dt_txt}temp={weather.list[0].main.temp} weather={weather.list[0].weather[0].main} extra={{humidity:weather.list[0].main.humidity,pressure:weather.list[0].main.pressure,feels:weather.list[0].main.feels_like}} />}
        <span className='flex flex-row'>
        {load==false && <WeatherCard date={weather.list[8].dt_txt}temp={weather.list[8].main.temp} weather={weather.list[8].weather[0].main} extra={{humidity:weather.list[8].main.humidity,pressure:weather.list[8].main.pressure,feels:weather.list[8].main.feels_like}} />}
        {load==false && <WeatherCard date={weather.list[16].dt_txt}temp={weather.list[16].main.temp} weather={weather.list[16].weather[0].main} extra={{humidity:weather.list[16].main.humidity,pressure:weather.list[16].main.pressure,feels:weather.list[16].main.feels_like}} />}
        {load==false && <WeatherCard date={weather.list[24].dt_txt}temp={weather.list[24].main.temp} weather={weather.list[24].weather[0].main} extra={{humidity:weather.list[24].main.humidity,pressure:weather.list[24].main.pressure,feels:weather.list[24].main.feels_like}} />}
        {load==false && <WeatherCard date={weather.list[32].dt_txt}temp={weather.list[32].main.temp} weather={weather.list[32].weather[0].main} extra={{humidity:weather.list[32].main.humidity,pressure:weather.list[32].main.pressure,feels:weather.list[32].main.feels_like}} />}
        </span>
        </span>
    </div>
  )
}
