import React from "react"
import { useSpring, animated, config } from "react-spring"
import Navbar from "./Navbar"

const SingleIdea = () => {

    const fadeIn = useSpring({
        to:
            {
            opacity: 1,
            height: "30rem",
            width: "30rem",
            x: -150,
            y: -100, 
            rotateZ:360
        },
        from: {
            opacity: 0.5,
            height: "1rem",
            width: "1rem",
            x: -500,
            rotateZ: 0,
        },
        config: config.molasses
    })

    return(
        <div className="w-screen h-screen bg-gradient-to-r from-[#B2DACD] to-[#C7D0EE]">
            <div className="w-screen h-14 opacity-0 hover:opacity-100">
                <Navbar/>
            </div>
            <animated.div className="absolute w-[10rem] h-[10rem] border-2 border-black left-[40rem] top-[15rem] rounded-md 
                                    flex flex-col justify-center items-center" style={fadeIn}>
                <div>
                Hi
                </div>
            </animated.div>
        </div>
    )
}

export default SingleIdea