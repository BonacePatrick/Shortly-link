import React from 'react'

const FeatureBox = () => {
  return (
    <>
    <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 
        mx-auto md:flex-row md:space-x-7">

            {/* --horizontal line-- */}
            <div className="hidden absolute top-24 left-16 
            h-3 w-10/12 bg-cyan md:block"></div>

            {/* --vertical line-- */}
            <div className="absolute w-2 h-full -ml-1 left-1/2
             bg-cyan md:hidden"></div>

             {/* --box 1-- */}
             <div className="relative flex flex-col 
             p-6 space-y-6 bg-white rounded-lg md:1/3">
                {/* --image positioning-- */}
                <div className="absolute -ml-10 left-1/2 -top-10
                 md:left-16 ">
                    {/* --image container For Background & center-- */}
                    <div className="flex items-center justify-center w-16 h-16 p-4 
                    rounded-full bg-veryDarkViolet">
                        <img src="./assets/icon-brand-recognition.svg" alt="" />
                    </div>
                 </div>
                 <h5 className="pt-6 text-xl font-bold text-center
                  capitalize md:text-left">
                    Brand Recognition
                  </h5>
                  <p className="text-center text-gray-400 md:text-left">
                  Boost your brand recognition with each click. Generic links don't
                  mean a thing. Branded links help instil confidence in your content.
                  </p>
             </div>

              {/* --box 2-- */}
              <div className="relative flex flex-col mt-24
             p-6 space-y-6 bg-white rounded-lg md:mt-8  md:1/3">
                {/* --image positioning-- */}
                <div className="absolute -ml-10 left-1/2 -top-10
                 md:left-16 ">
                    {/* --image container For Background & center-- */}
                    <div className="flex items-center justify-center w-16 h-16 p-4 
                    rounded-full bg-veryDarkViolet">
                        <img src="./assets/icon-detailed-records.svg" alt="" />
                    </div>
                 </div>
                 <h5 className="pt-6 text-xl font-bold text-center
                  capitalize md:text-left">
                    Detailed records
                  </h5>
                  <p className="text-center text-gray-400 md:text-left">
                  Gain insights into who is clicking your links. Knowing when and
                  where people engage with your content helps inform better decisions.
                  </p>
             </div>
                {/* --Box three-- */}

             <div className="relative flex flex-col mt-24
             p-6 space-y-6 bg-white rounded-lg md:mt-16  md:1/3">
                {/* --image positioning-- */}
                <div className="absolute -ml-10 left-1/2 -top-10
                 md:left-16 ">
                    {/* --image container For Background & center-- */}
                    <div className="flex items-center justify-center w-16 h-16 p-4 
                    rounded-full bg-veryDarkViolet">
                        <img src="./assets/icon-fully-customizable.svg" alt="" />
                    </div>
                 </div>
                 <h5 className="pt-6 text-xl font-bold text-center
                  capitalize md:text-left">
                    Fully Customizable
                  </h5>
                  <p className="text-center text-gray-400 md:text-left">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                  </p>
             </div>
      
        </div>
    </section>
    </>
  )
}

export default FeatureBox