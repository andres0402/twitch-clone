import React, { useState } from "react";


export function Chat (){

    const [isMaximized, setIsMaximized] = useState(true)

    function handleMaximize(){
        setIsMaximized(!isMaximized)
    }

    return (
        <>
            {isMaximized ? (
            <div className="grid grid-cols-1 grid-rows-[30px_1fr_40px] h-[895px] row-span-2">
                <div className="p-1 bg-[#504e4e] flex flex-row items-center justify-start gap-24">
                    <button className="hover:bg-zinc-600 px-1 py-1 rounded-md my-1" onClick={handleMaximize}>
                            <svg width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG"><g><path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path></g></svg>
                        </button>
                    <p className="text-center text-sm text-white">midudev</p>
                </div>
                <div className="bg-zinc-800">
                    Hola
                </div>
                <div className="bg-[#504e4e] flex flex-row items-center">
                    <input type="text" placeholder="Envía un mensaje" className="bg-transparent w-72 h-[30px] px-2 border-none"/>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-smile w-[25px] mr-1" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M9 10l.01 0" />
                            <path d="M15 10l.01 0" />
                            <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                        </svg>

                    </button>
                </div>
            </div>
            )
        :
        (
            <div className="flex flex-row fixed right-1">
                <button className="hover:bg-zinc-600 px-1 py-1 rounded-md my-1 h-[30px] w-[30px]" onClick={handleMaximize}>
                <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" color="white" aria-hidden="true" focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG h-[25px] w-[25px]"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
                </button>
            </div>
        )}
        </>
    )
}