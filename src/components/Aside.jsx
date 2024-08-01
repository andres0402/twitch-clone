import React, { useState } from "react";
import StreamInfo from "./StreamInfo.astro";


export function Aside (props){

    const [isMaximized, setIsMaximized] = useState(true)

    function handleMaximize(){
        setIsMaximized(!isMaximized)
    }

    return (
        <>
            {isMaximized ? (
                <aside className="bg-zinc-700 flex flex-col justify-between px-2 py-3 w-[240px] h-screen">
                <div className="">
                    <div className="flex flex-row justify-between">
                        <p className="text-xl font-semibold text-white">Para ti</p>
                        <button className="hover:bg-zinc-600 px-1 py-1 rounded-md" onClick={handleMaximize}>
                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" color="white" aria-hidden="true" focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG h-[25px] w-[25px]"><g><path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path></g></svg>
                        </button>
                    </div>

                    <div className="flex flex-row justify-between hover:bg-zinc-600 px-1 py-1 w-full">
                        <p className="text-sm font-semibold text-white">CANALES QUE SIGO</p>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M11 6 7 2 3 6l1.5 1.5L6 6v6h2V6l1.5 1.5L11 6Zm6 8-4 4-4-4 1.5-1.5L12 14V8h2v6l1.5-1.5L17 14Z"></path></svg>
                        </button>
                    </div>

                    <div className="flex flex-col">
                        {props.streams && (
                                props.streams.map(stream => (
                                    <button class="px-1 py-1 hover:bg-zinc-600">
                                        <div class="flex flex-row justify-between items-center">
                                            <div class="flex flex-row gap-1 items-center">
                                                <img src={stream.img} class="rounded-full" height="30px" width="30px"/>
                                                <div class="flex flex-col ml-1">
                                                    <p class="text-white font-semibold text-start">{stream.name}
                                                    </p>
                                                    <p class="text-zinc-400 text-sm text-start">
                                                        {stream.category}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex flex-row items-center gap-1">
                                                <div class="bg-red-600 h-[8px] w-[8px] rounded-full">
                                                </div>
                                                <span class="text-zinc-300">{stream.viewers}</span>
                                            </div>
                                        </div>
                                    </button>
                                   
                                )
                                )
                            )}
                    </div>
                    
                </div>

                <div>
                    <div className="flex flex-row justify-between px-1 py-1 w-full">
                            <p className="text-sm font-semibold text-white">CANALES RECOMENDADOS</p>
                    </div>

                    <div className="flex flex-col">
                    {props.streams && (
                                props.recommendedStreams.map(stream => (
                                    <button class="px-1 py-1 hover:bg-zinc-600">
                                        <div class="flex flex-row justify-between items-center">
                                            <div class="flex flex-row gap-1 items-center">
                                                <img src={stream.img} class="rounded-full" height="30px" width="30px"/>
                                                <div class="flex flex-col ml-1">
                                                    <p class="text-white font-semibold text-start">{stream.name}
                                                    </p>
                                                    <p class="text-zinc-400 text-sm text-start">
                                                        {stream.category}
                                                    </p>
                                                </div>
                                            </div>
                                                <div class="flex fle-row items-center gap-1">
                                                    <div class="bg-red-600 h-[8px] w-[8px] rounded-full">
                                                    </div>
                                                    <span class="text-zinc-300">{stream.viewers}</span>
                                                </div>
                                        </div>
                                    </button>
                                   
                                )
                                )
                            )}
                    </div>
                </div>
            </aside>
            )
            :
            (
                <aside className="bg-zinc-700 flex flex-col items-center justify-between px-2 py-3 w-[50px] h-screen">
                    <div className="flex flex-col items-center gap-2">
                        <button className="hover:bg-zinc-600 px-1 py-1 rounded-md my-1" onClick={handleMaximize}>
                            <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" role="presentation" aria-hidden="true" focusable="false" className="ScIconSVG-sc-1q25cff-1 jpczqG"><g><path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z"></path></g></svg>
                        </button>
                        <svg width="20" height="20" viewBox="0 0 20 20" className="my-2"><path fill-rule="evenodd" d="M9.171 4.171A4 4 0 0 0 6.343 3H6a4 4 0 0 0-4 4v.343a4 4 0 0 0 1.172 2.829L10 17l6.828-6.828A4 4 0 0 0 18 7.343V7a4 4 0 0 0-4-4h-.343a4 4 0 0 0-2.829 1.172L10 5l-.829-.829zm.829 10 5.414-5.414A2 2 0 0 0 16 7.343V7a2 2 0 0 0-2-2h-.343a2 2 0 0 0-1.414.586L10 7.828 7.757 5.586A2 2 0 0 0 6.343 5H6a2 2 0 0 0-2 2v.343a2 2 0 0 0 .586 1.414L10 14.172z" clip-rule="evenodd"></path></svg>
                        {props.streams && (
                            props.streams.map(stream => (
                                <button>
                                    <img src={stream.img} className="rounded-full" height={"30px"} width={"30px"}/>
                                </button>
                            )
                            )
                        )}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.002 3.999a2 2 0 0 1 2 2v2L18 6v8l-3.998-2v2a2 2 0 0 1-2 1.999h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8zM12 6H4v8h8V6z" clip-rule="evenodd"></path></svg>
                        {props.recommendedStreams && (
                            props.recommendedStreams.map(stream => (
                                <button>
                                    <img src={stream.img} className="rounded-full" height={"30px"} width={"30px"}/>
                                </button>
                            )
                            )
                        )}
                    </div>
                </aside>
            )
        }
        </>
        
    )
}