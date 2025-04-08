    import React from 'react'
    
    const Investors = () => {
      return (
        <section className="relative w-full h-[450px] bg-white" style={{ backgroundImage: "url('/me6.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className='flex w-full h-[450px]'>
                <div className='flex flex-col w-full h-auto'>
            <h1 className='mx-auto text-4xl text-white font-bold mt-10 uppercase'>Investors</h1>
                <div className='flex flex-row w-[1050px] h-[280px] m-auto justify-between max-lg:w-full max-lg:flex-row max-lg:gap-5 max-lg:mx-auto max-lg:px-3 max-2xl:space-x-8 max-2xl:gap-5 max-sm:w-full max-sm:gap-2'>
                    <div className='flex flex-col w-[225px] h-[250px] rounded-3xl bg-cyan-700/70 backdrop-blur-3xl shadow-lg border border-blue-200/20 transition-colors duration-300 hover:bg-cyan-600/30 hover:ease-in-out cursor-pointer'>
                        <img src='/rs.png' alt='rs' className='size-[90px] mt-3 mx-auto rounded-full border-2 border-white' />
                        <h1 className='text-2xl mt-3 text-center text-white font-bold max-lg:text-lg'>Rick Sanchez</h1>
                        <p className='text-md text-center mt-1 text-slate-600 font-semibold'>Founder of meeseeks</p>
                    </div>
                    <div className='flex flex-col w-[225px] h-[250px] rounded-3xl bg-cyan-700/70 backdrop-blur-3xl shadow-lg border border-blue-200/20 transition-colors duration-300 hover:bg-cyan-600/30 hover:ease-in-out cursor-pointer '>
                        <img src='/morty.png' alt='rs' className='size-[90px] mt-3 mx-auto rounded-full border-2 border-white' />
                        <h1 className='text-2xl mt-3 text-center text-white font-bold max-lg:text-lg'>Morty Smith</h1>
                        <p className='text-md text-center mt-1 text-slate-600 font-semibold'>Investor</p>
                    </div>
                    <div className='flex flex-col w-[225px] h-[250px] rounded-3xl bg-cyan-700/70 backdrop-blur-3xl shadow-lg border border-blue-200/20 transition-colors duration-300 hover:bg-cyan-600/30 hover:ease-in-out cursor-pointer '>
                        <img src='/meeseekz.jpg' alt='rs' className='size-[90px] mt-3 mx-auto rounded-full border-2 border-white' />
                        <h1 className='text-2xl mt-3 text-center text-white font-bold max-lg:text-lg'>Realistic Meeseeks</h1>
                        <p className='text-md text-center mt-1 text-slate-600 font-semibold'>Coder of Meeseeks</p>
                    </div>
                    <div className='flex flex-col w-[225px] h-[250px] rounded-3xl bg-cyan-700/70 backdrop-blur-3xl shadow-lg border border-blue-200/20 transition-colors duration-300 hover:bg-cyan-600/30 hover:ease-in-out cursor-pointer '>
                        <img src='/mee6_logo.jpg' alt='rs' className='size-[90px] mt-3 mx-auto rounded-full border-2 border-white' />
                        <h1 className='text-2xl mt-3 text-center text-white font-bold max-lg:text-lg'>MEE6</h1>
                        <p className='text-md text-center mt-1 text-slate-600 font-semibold'>Discord Bot</p>
                    </div>
                    </div>
                </div>
                </div>
                </section>
      )
    }
    
    export default Investors