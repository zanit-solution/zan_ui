 
import Button from "@/components/Button/Button";
import Chackbox from "@/components/Chackbox";
import Spinner from "@/components/Spinner/Spinner";
import Image from "next/image"; 
export default function Home() {
  return (
    <main className="f ">
        <Button/> 
        <Spinner color="green" sz="lg" rounded={false}/>
        <Chackbox/> 
    </main>
  )
}
