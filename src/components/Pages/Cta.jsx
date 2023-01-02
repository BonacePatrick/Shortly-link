import React from 'react'

const Cta = () => {
  return (
    <>
    <section id="cta" className="py-24 bg-cyan">
        <div className="flex flex-col p-2 space-y-6">
            <h5 className="mx-auto space-y-10 text-4xl 
            font-bold text-center text-white">
                Boost your Link to day!
            </h5>
            <button className="px-10 py-4 mx-auto text-2xl font-bold
             text-white rounded-full bg-veryDarkBlue hover:bg-darkViolet
              md:text-base md:py-3 focus:outline-none ">
                Get Started
             </button>
        </div>
    </section>
    </>
  )
}

export default Cta