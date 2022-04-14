import React from "react"

import "./under-hero.scss"


const UnderHero = () => {


    return (
        <div id="under-hero">

            <h1 className="text-center mt-20 text-3xl font-black	">
                Year collection
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 px-10 mt-5">

                <div className="w-full rounded-2xl cursor-pointer" id="under-hero1">
                    <section className="rounded-2xl">
                        <span className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white">Spring</span>
                    </section>
                </div>

                <div className="w-full rounded-2xl  cursor-pointer" id="under-hero2">
                    <section className="rounded-2xl">
                        <span className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white">Summer</span>
                    </section>
                </div>

                <div className="w-full rounded-2xl cursor-pointer" id="under-hero3">
                    <section className="rounded-2xl">
                        <span className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white">Fall</span>
                    </section>
                </div>

                <div className="w-full rounded-2xl cursor-pointer" id="under-hero4">
                    <section className="rounded-2xl">
                        <span className="lg:text-7xl md:text-6xl sm:text-4xl text-2xl text-white">Winter</span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default UnderHero