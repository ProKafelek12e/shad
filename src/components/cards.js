import { CardHeader } from "./ui/card";
import { Sun, CloudRainWind, CloudSnow, Wind,ArrowDownToLine } from "lucide-react";
export function WeatherCard({temp,weather,extra}) {
  return (
    <Card>
        <CardHeader>
            <CardTitle>{temp}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            {extra.humidity}<ArrowDownToLine/>{extra.pressure}{extra.feels_like}
        </CardFooter>
    </Card>
  )
}
