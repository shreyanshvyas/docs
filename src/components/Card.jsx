import React from "react";
import { motion } from "framer-motion"
import { FaFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Card({ data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} className="relative bg-zinc-900/90 text-zinc-200 rounded-[45px] px-8 py-10 w-60 h-72 overflow-hidden flex-shrink-0">
      <FaFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute w-full bottom-0 left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5 className="text-sm">{data.fileSize}</h5>
          <span className="w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".7rem" />
            ) : (
              <MdDownload size=".7rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div className={`tag w-full py-4 ${data.tagDetails.tagColor === "green"?"bg-green-600":"bg-blue-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">
              {data.tagDetails.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
