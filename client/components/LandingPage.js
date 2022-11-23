import React from "react"
import Navbar from "./Navbar"
import {Link, useNavigate} from "react-router-dom"
import { animated, useSpring, config} from "react-spring"
import AuthForm from "./AuthForm"

const LandingPage = () => {
    const navigate = useNavigate()

    const makeSlide = (yValue) => {
        const [getSlide, setSlide] = useSpring(()=> ({
            from: {x:0, y: yValue, opacity: 0 },
            to: {x:0, y: 0, opacity: 1},
            config: config.wobbly
        }))
        return {getSlide, setSlide}
    }

    const slideFromTop = makeSlide(700)
    const slideFromBottom = makeSlide(-700)

    const handleClick = (event) => {
        console.log(event.target.name)
        if(event.target.name === "random"){
            navigate("/randomidea")
        } else if(event.target.name === "all"){
            navigate("/allideas")
        }
    }

    return (
        <animated.div className="w-screen h-fit bg-gradient-to-r from-sky-50 to-sky-300">
            <div  className="w-screen h-14 opacity-0 hover:opacity-100">
                <Navbar/>
            </div>
           <div className="w-screen h-screen flex flex-row items-center">
                <animated.div className="flex flex-col w-1/2 items-center" style={slideFromTop.getSlide}>
                    <p>Why not sign up for an account first?</p>
                    <div className="w-1/2 h-fit border-2 border-solid border-x-indigo-300 border-y-indigo-300 rounded-lg bg-indigo-200">
                        <AuthForm/>
                    </div>
                </animated.div> 
                <animated.div className="flex flex-col w-1/2 h-[412px] items-center" style={slideFromBottom.getSlide}>
                    <p>...Or just browse around!!</p>
                    <div className="flex flex-col justify-evenly items-center w-[360px] h-[388px] border-2 border-solid border-x-blue-400 border-y-blue-400 bg-blue-300 rounded-lg">
                            <button className="w-3/4 h-1/4 border-2 border-white bg-cyan-200 rounded-lg" name="random" onClick={handleClick}>Get a Random Idea</button>
                            <button className="w-3/4 h-1/4 border-2 rounded-lg border-white bg-emerald-200" name="all" onClick={handleClick}> Look at All Ideas</button>
                    </div>
                </animated.div>
                
           </div>
        </animated.div>
    )
}

export default LandingPage