"use client"
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react"
import { useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function Home() {
  const [counter,setCounter] = useState(0)
  const [cleared,setCleared] = useState(0)
  const plus = ()=>{
    setCounter(counter+1)
  }
  const minus = ()=>{
    setCounter(counter-1)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center gap-5 flex-col">
      <HoverCard>
      <HoverCardTrigger asChild>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl select-none">{counter}</h1>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <p className="leading-7 [&:not(:first-child)]:mt-6">Counter value is {counter}<br></br>Counter has been reseted {cleared} {cleared==1?"time":"times"}</p>
      </HoverCardContent>
    </HoverCard>
      <span>
      <Button className="h-16 w-16 m-5" onClick={minus} disabled={counter==0?true:false}><Minus size={40} strokeWidth={3} /></Button>
      <Button className="h-16 w-16 m-5" onClick={plus} disabled={counter==5?true:false}><Plus size={40} strokeWidth={3} /></Button>
      </span>
      <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Reset Counter</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{counter==0?"Counter is already at 0":"Are you absolutely sure?"}</AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={counter==0?true:false} onClick={()=>{setCounter(0);setCleared(cleared+1)}}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </div>
  );
}