import React from 'react'

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('$Cunk ID copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
};

const Contract = () => {
  return (
    <section className='relative w-full h-[300px]' style={{ backgroundImage: "url('/bg1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='flex flex-col w-full h-[300px]'>
            <div className="flex flex-row w-full h-[70px] mb-3 text-white uppercase mt-6 mx-auto px-11 ">
        <h1 className='w-auto text-5xl font-bold mx-auto max-lg:text-3xl'>CONTRACT ID</h1>
            </div>
            <div className='flex flex-col w-[650px] h-auto mx-auto mt-5  max-lg:mx-auto max-lg:w-full'>
            <div className='w-auto h-auto flex flex-row border-2 rounded-2xl m-auto p-5 bg-cyan-600-700/10 shadow-lg border-cyan-200/80 max-lg:mx-auto max-sm:w-[370px]  '>
                <h1 className='text-4xl font-bold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-cyan-300 max-lg:text-2xl  max-lg:mx-auto max-sm:text-lg'>ID: 00000000000000000000</h1>
                <button className='rounded-2xl bg-cyan-500 text-white ml-7 p-3 uppercase font-bold cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:border-l-green-500 hover:animate-pulse hover:text-white max-lg:text-base' onClick={() => copyToClipboard('0000000000000')}>COPY ID</button>
            </div>
            {/* <div className='flex flex-row h-auto mx-auto mt-5 font-bold text-white gap-20'>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
  <button className="flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400">
    <img src="/ix-disc.svg" alt="tg" className="size-18 mx-auto" />
    <h1 className="m-auto mt-3">DISCORD</h1>
  </button>
</a>

            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <button className='flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400'>
                <img src='/ic-x.svg' alt='tg' className='size-16 mx-auto' />
                <h1 className='m-auto mt-3'>X/TWITTER</h1>
            </button>
            </a>
            <a href="https://t.me/yourtelegramchannel" target="_blank" rel="noopener noreferrer">

            <button className='flex flex-col w-20 h-24 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:border-l-green-500 hover:animate-pulse hover:text-green-400'>
                <img src='/ic-tele.svg' alt='tg' className='size-16 mx-auto' />
                <h1 className='m-auto mt-3'>TELEGRAM</h1>
            </button>
            </a> */}
            {/* </div> */}
            </div>
        </div>
        
    </section>
  )
}

export default Contract