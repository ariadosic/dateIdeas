import React from "react"
import { useNavigate } from "react-router-dom"
import { useSpring, animated, useSpringRef, useChain } from "react-spring"

const Homepage = () => {
    const navigate = useNavigate()
    const createFadeInAndOut = (to, ref, delay) => {
        const [fadeIn, setFadeIn] = useSpring(() => ({
            from: {opacity: 0},
            to,
            config: {
                duration: 2000
            },
            delay: delay || 0,
            ref: ref || "",
        }))
        return {get: fadeIn, set: setFadeIn}
    }

    const springRef0 = useSpringRef()
    const fadeIn0 = createFadeInAndOut({ opacity: 1})

    const springRef1 = useSpringRef()
    const fadeIn1 = createFadeInAndOut([{ opacity: 1}, {opacity: 0}], springRef1)

    const springRef2 = useSpringRef()
    const fadeIn2 = createFadeInAndOut([{ opacity: 1}, {opacity: 0}], springRef2)
    
    const springRef3 = useSpringRef()
    const fadeIn3 = createFadeInAndOut([{ opacity: 1}, {opacity: 0}], springRef3)

    const springRef4 = useSpringRef()
    const fadeIn4 = createFadeInAndOut([{ opacity: 1}, {opacity: 0}], springRef4)
    
    const fadeIn5 = createFadeInAndOut({ opacity: 1}, "", 17000)
    
    useChain([springRef0, springRef1, springRef2, springRef3, springRef4])

    const handleClick = () => {
        navigate("/landingpage")
    }
    return(
        <animated.div className="bg-[url('https://sozaino.site/wp-content/uploads/2022/01/kumo37.png')] w-screen h-screen"  style={fadeIn0.get}>
            <animated.div className="absolute right-1/2 top-64 text-6xl text-gray-50" style={fadeIn1.get}>
            hey you
            </animated.div>
            <animated.div className="absolute left-[16rem] top-64 text-6xl text-gray-50" style={fadeIn2.get}>
            having trouble thinking of ideas?  
            </animated.div>
            <animated.div className="absolute left-[26rem] top-64 text-6xl text-gray-50" style={fadeIn3.get}>
            you're not alone
            </animated.div>
            <animated.div className="absolute left-[24rem] top-64 text-6xl text-gray-50" style={fadeIn4.get}>
            i have just the solution
            </animated.div>
            <animated.div className="text-gray-50 absolute left-36 top-44 text-9xl" style={fadeIn5.get}>
                Ideas
            </animated.div>
            <animated.button type="button" className="text-gray-50 absolute left-[18rem] top-[18rem] text-5xl" style={fadeIn5.get} onClick={handleClick}> Click for a Suggestion</animated.button>

        </animated.div>
    )
}


export default Homepage