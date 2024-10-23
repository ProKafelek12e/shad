"use client"
import { Card,CardHeader,CardTitle,CardDescription,CardContent,CardFooter } from "@/components/ui/card";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState} from 'react'
export default function page() {
    const [load,setLoad] = useState(true)
    const [articles,setArticles] = useState([])
    useEffect(()=>{
        const getArticles = async()=>{
            try{
                const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2024-09-23&sortBy=publishedAt&apiKey=0e4622ed8ca94b0ba9e819de15ddaf22')
                const arts = await response.json()
                console.log(arts.articles)
                setArticles(arts.articles)
            }
            catch(error){
                console.log(error)
            }
            finally{
                setLoad(false)
            }
        }
        getArticles()
    },[])
    return (
        <div className="flex flex-row flex-wrap">
        {console.log(articles)}
      {(load==true?<p>Loading...</p>:
        articles.map((article,idx)=>(
            <Card key={idx} className="w-[350px]">
            <CardHeader>
              <span className="w-full relative h-[150px]">
                <Image
                  fill
                  src={article.urlToImage||'https://upload.wikimedia.org/wikipedia/commons/e/e4/Color-blue.JPG'}
                  alt="Article Image"
                  style={{ objectFit: 'cover' }} // Optional: Adjust the image fit
                />
              </span>
              <CardTitle>
                <h1 className='h-[73px] text-clip overflow-hidden'>
                {article.title}
                </h1>
                </CardTitle>
            </CardHeader>
            <CardContent className='h-[180px] text-clip overflow-hidden'>
              {article.content}
            </CardContent>
            <CardFooter className="flex flex-col justify-between max-h[50px] gap-4">
                <span className="flex flex-row justify-between w-full">
                <p>
                    {article.source.name} 
                </p>
                <p>
                    {article.author}
                </p>
                </span>
                <span className="w-full flex flex-row-reverse">

              <Link href={article.url} className="right-3">
              <Button>More <Link2/></Button>
              </Link>
                </span>
            </CardFooter>
          </Card>
        ))
    )}
    </div>
  )
}
