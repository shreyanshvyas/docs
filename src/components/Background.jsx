import React from "react";

function Background() {
  return (
    <div className="fixed w-full h-screen z-[1]">
      <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 font-semibold text-xl">
        Documents
      </div>
      <h1 className="absolute text-9xl top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] text-zinc-900 font-semibold tracking-tighter leading-none">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
