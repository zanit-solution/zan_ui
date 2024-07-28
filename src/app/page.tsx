"use client"
import Button from "@/components/Button/Button";
import Chackbox from "@/components/Chackbox/Chackbox";
import Spinner from "@/components/Spinner/Spinner";
import { useState } from "react";
export default function Home() {
  const [h, setHa] = useState([])
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ]
  const multiple = (its) => {
    if (h.length) {
      if (h.some(item => item?.id == its.id)) {
        const filteredItem = h.filter(item => item.id !== its.id)
        setHa(filteredItem)
      }
      else {
        setHa([...h, its])
      }

    }
    else {
      setHa([{ ...its }])
    }
  }
  return (
    <main className="f ">
      <Button />
      <Spinner color="red" />
      {
        data.map(it => <Chackbox checked={h.some(item => item?.id == it.id)} onChange={() => multiple(it)}
        />)
      }
    </main>
  )
}
