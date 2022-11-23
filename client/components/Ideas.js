import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import {useTrail, animated, to} from "react-spring"
import { Navigate } from "react-router-dom"


const AllIdeas = () => {

    const navigate = useNavigate()
    const [trail, api] = useTrail(20, () => ({ 
        opacity: 1, 
        sc: 0.9,
        x: "0px",
        y: "0px",
        skewX: 0,
        from: {
            opacity: 0,
            sc: 0.2,
            x: "1000px",
            y: "1000px",
            skewX: 10,
        }
    }))

    const clickHandler = () => {
        navigate("/singleIdea")
    }


    return (
        <div className="w-screen h-max bg-gradient-to-r from-[#B2DACD] to-[#C7D0EE]">
             <div className="w-screen h-14 opacity-0 hover:opacity-100">
                <Navbar/>
            </div>
            <div className="grid grid-cols-4 w-screen h-screen p-10 justify-items-center">
                {
                    trail.map(({sc, x, y, skewX, ...props}, i) => (
                        <animated.div key={i} 
                                    className="bg-white w-[100px] h-[100px] border-2 border-black rounded-md "
                                    style={{...props, 
                                            transform: to(
                                                    [sc, x, y, skewX],
                                                    (sc, x, y, skewX) => 
                                                    `scale(${sc}) translate(${x}, ${y}) skew(${skewX}deg)`
                                                        )}}
                                    onClick={clickHandler}>
                                        {i + 1}
                        </animated.div>
                    ))
                }
            </div>

        </div>
    )
}


export default AllIdeas