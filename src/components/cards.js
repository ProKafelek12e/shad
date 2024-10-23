import { Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter } from "./ui/card";
import { Sun, CloudRainWind, Cloudy, CloudSnow, Wind, ArrowDownToLine, Droplet, Thermometer,Link2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
export function WeatherCard({temp,weather,extra, date}) {
  return (
    <Card className="w-80">
      
        <CardHeader>
        <CardDescription className='flex justify-center'>{date}</CardDescription>
            <CardTitle className='flex flex-col items-center justify-around'>
              {weather=='Clear' && <Sun size={40}/>}
              {weather=='Clouds' && <Cloudy size={40}/>}
              {weather=='Rain' && <CloudRainWind size={40}/>}
              {weather=='Snow' && <CloudSnow size={40}/>}
              {weather=='Wind' && <Wind size={40}/>}
              <p>{Math.round(temp)}°C</p>
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
 
export function ArticleCard({title,img,url,author,content,date}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date.slice(0, 10)}{author}</CardDescription>
        <span className="w-[350px]">
          <Image src={img} />
        </span>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Link href={url}>
        <Button>Read <Link2/></Button>
        </Link>
      </CardFooter>
    </Card>
  )
}