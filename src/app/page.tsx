 "use client"
import Accordion from "@/components/Accordion/Accordion";
import Button from "@/components/Button/Button";
import Chackbox from "@/components/Chackbox";
import Spinner from "@/components/Spinner/Spinner"; 
import { useState } from "react";
export default function Home() {
  const data = [
    { title: "What services do you offer?", content: "We specialize in web development, Android app development, iOS app development, and e-commerce solutions." },
    { title: "How can your services benefit my business?", content: "Our tailored solutions enhance efficiency, boost digital presence, and drive growth by meeting your specific business needs." },
    { title: "What are your payment terms?", content: "Payment terms are flexible and tailored to suit your project scope and budget. We ensure transparency and clarity in all financial matters." }
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="f ">
        <Button/> 
        <Spinner color="green" size="lg" rounded={false}/>
        <Chackbox/> 
        {data.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
    </main>
  )
}
