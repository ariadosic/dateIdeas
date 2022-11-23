import React, {useState} from "react"
import Navbar from "./Navbar"
import {animated, useSpring} from "react-spring"

const RandomIdea = () => {

const [click, setClick] = useState(false)

const {size, x, y, display1, display2} = useSpring({
    size: click ? 500 : 100,
    x: click ? -200: 0,
    y: click? -200: 0,
    display1: click ? "none" : "contents",
    display2: click ? "contents" : "none",
})

const clickHandler = () => {
    setClick(true)
}

return (
    <div className="w-screen h-screen bg-[#BDD8F9]">
        <div className="w-screen h-14 opacity-0 hover:opacity-100">
           <Navbar/>
        </div>
        <animated.div className="w-1/4 border-[0.5px] border-blue-500 absolute top-[18rem] left-[42rem] 
        flex flex-col justify-center items-center p-4 rounded-lg bg-[#DCEBFC] shadow-[10px_10px_5px_#a3a3a3]" style={{width: size, height: size, x:x, y:y}} onClick={clickHandler}>
            <animated.div className="text-center" style={{display: display1}}>
                Click Here For An Idea!
            </animated.div>
            <animated.div className="text-center" style={{display: display2}}>
                Here is a incredibly long description of something
                
            </animated.div>
        </animated.div>
        <div className="bg-white absolute bottom-10 left-[39rem] border-2 border-black hover:bg-zinc-100 active:bg-zinc-200 p-4 rounded-md hover:">
            <button> Give Me Another Idea!</button>
        </div>
    </div>
)
}

export default RandomIdea