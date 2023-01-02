import React from 'react'
import {useForm} from 'react-hook-form'

const Shorten = () => {

    const {register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data)

  return (
    <>
    <section id="shorten" className="relative bg-gray-100">
        {/* --shorten container--- */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {/* --form--- */}
            <form id="link-form" onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col w-full p-10 -mt-20 
            bg-cyan rounded-lg md:flex-row md:space-y-0 md:space-x-3 space-y-4 ">
                <input type="text" className="flex-1 p-3 border-2 rounded-lg 
                placeholder-yellow-500 focus:outline-none" 
                placeholder='shorten a link here' id='link-input'
                {...register("input",{required:true, pattern: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i})}             
                />

                <button className="px-10 py-3 text-white bg-veryDarkBlue rounded-lg
                 hover:bg-cyanLight focus:outline-none md:py-2">
                    Shorten It!
                 </button>

                 <error className="absolute left-7 bottom-3 text-red text-sm">
                   {errors.input?.type === "required" && "Link is required"}
                   {errors.input?.type === "pattern" && "Enter valid link"} 
                 </error>
            </form>

            {/* ---Link one-- */}
            <div className="flex flex-col items-center justify-between w-full 
            p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center
                 text-veryDarkViolet md:text-left">
                    https://www.test.com
                 </p>

                 <div className="flex flex-col items-center justify-end flex-1 space-x-4 
                 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://ts.t/f4k
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan 
                    rounded-lg hover:hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                 </div>

            </div>

             {/* ---Link two-- */}
            <div className="flex flex-col items-center justify-between w-full 
            p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center
                 text-veryDarkViolet md:text-left">
                    https://www.lookfeel.com
                 </p>

                 <div className="flex flex-col items-center justify-end flex-1 space-x-4 
                 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://lf.t/f4k
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan 
                    rounded-lg hover:hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                 </div>

            </div>

             {/* ---Link three-- */}
             <div className="flex flex-col items-center justify-between w-full 
            p-6 bg-white rounded-lg md:flex-row">
                <p className="font-bold text-center
                 text-veryDarkViolet md:text-left">
                    https://www.designweb.com
                 </p>

                 <div className="flex flex-col items-center justify-end flex-1 space-x-4 
                 space-y-2 md:flex-row md:space-y-0">
                    <div className="font-bold text-cyan">
                        https://dw.t/f4k
                    </div>
                    <button className="p-2 px-8 text-white bg-cyan 
                    rounded-lg hover:hover:opacity-70 focus:outline-none">
                        Copy
                    </button>
                 </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Shorten