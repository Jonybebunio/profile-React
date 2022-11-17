import React from "react"
import About from "./application/About"
import Info from "./application/Info"
import Interests from "./application/Interests"
import Footer from "./application/Footer"

export default function App(){
    return (
        <div className="app">
            <Info />
            <About />            
            <Interests />
            <Footer />
        </div>
    )
}