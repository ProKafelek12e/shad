import { Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter } from "./ui/card";
import { Sun, CloudRainWind, Cloudy, CloudSnow, Wind, ArrowDownToLine, Droplet, Thermometer } from "lucide-react";
export function WeatherCard({temp,weather,extra, date}) {
  return (
    <Card className="w-80">
      
        <CardHeader>
        <CardDescription className='flex justify-center'>{date}</CardDescription>
            <CardTitle className='flex flex-row justify-around'>
              <p>{Math.round(temp)}°C</p>
              <span>
              {weather=='Clear' && <Sun/>}
              {weather=='Clouds' && <Cloudy/>}
              {weather=='Rain' && <CloudRainWind/>}
              {weather=='Snow' && <CloudSnow/>}
              {weather=='Wind' && <Wind/>}
              </span>
              </CardTitle>
        </CardHeader>
        <CardFooter className="flex flex-row justify-around">
            <span className="flex flex-col w-20 items-center">
            <Droplet/>{extra.humidity}%
            </span>
            <span className="flex flex-col w-20 items-center">
            <ArrowDownToLine/>{extra.pressure} hPa
            </span>
            <span className="flex flex-col w-20 items-center">
              <Thermometer/>{Math.round(extra.feels)}°C
            </span>
        </CardFooter>
    </Card>
  )
}
