import { useEffect, useRef, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import style from './style.module.css'
type accordionProps = {
    title:string,
    content:string|React.ReactNode,
    isOpen:boolean,
    onClick:()=>void,
    icon?:React.ReactNode
}
const Accordion = ({ title, content, isOpen, onClick }:accordionProps) => {
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef?.current?.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={onClick}
        aria-label="accordion-toggle"
      >
        <span className="text-lg font-semibold">{title}</span>
        {isOpen ? (
          <FaPlus className={`w-6 h-6 transform transition-transform rotate-180 ${style.rotate_in}`} />
        ) : (
          <FaMinus className={`w-6 h-6 transform transition-transform rotate-180 ${style.rotate_out}`} />
        )}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <div className="p-4 bg-white">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
