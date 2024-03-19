import React, { useRef } from "react";
import Card from "./Card";


function Foreground() {
    const ref= useRef(null);
  const data = [
    {
      desc: " Hellooo there! Shreyansh Vyas this side.",
      fileSize: ".9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
    },
    {
        desc: " Hellooo there! Shreyansh Vyas this side.",
        fileSize: ".6mb",
        close: false,
        tagDetails: { isOpen: true, tagTitle: "Upload", tagColor:"blue" },
    },
    {
        desc: " Hellooo there! Shreyansh Vyas this side. Showing Slide3",
        fileSize: ".5mb",
        close: true,
        tagDetails: { isOpen: false, tagTitle: "Download Now", tagColor:"green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[2] flex gap-7 flex-wrap p-5">
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
