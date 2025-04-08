import React from 'react'

const socialIcons = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '/ic-x.svg' },
    { name: 'Telegram', href: 'https://telegram.org', icon: '/ic-tele.svg' },
    { name: 'CoinGecko', href: 'https://coingecko.com', icon: '/ic-gecko.svg' },
    { name: 'Discord', href: 'https://discord.com', icon: '/ix-disc.svg' }
  ];
  

const Hero = () => {
  return (
    <section className="relative w-full h-screen sepia-[25px] " style={{ backgroundImage: "url('/meeseeks.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
        <div className='flex w-full h-full'>
            <div className='flex flex-col w-[950px] h-[350px] m-auto mt-20 text-white'>
                <div className='flex flex-col w-auto h-auto text-center text-white'>
                <div className="relative text-center">
  <h1 className="absolute inset-0 text-[130px] font-bold uppercase text-cyan-700 blur-sm mr-2 max-lg:text-6xl">$MEESEEKS</h1>
  <h1 className="relative text-[130px] font-bold uppercase text-white max-lg:text-6xl">$MEESEEKS</h1>
</div>
                <p className='text-center text-xl italic '>Rick's Annoying Assistant</p>
            </div>
            <div className="flex flex-row space-x-2 max-lg:hidden">
                    
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href={icon.href} className="text-white hover:text-gray-300 bg-cyan-800 p-3 rounded-full border-[1px] border-l-4 border-b-4 border-white hover:border-l-[1px] hover:border-b-[1px] duration-300 transition-all ease-in-out mx-auto mt-5">
                            <img src={icon.icon} alt={icon.name} className="h-12  max-lg:hidden" />
                        </a>
                    ))}
                </div>
        </div>
        <div className="bg-gradient-to-t from-cyan-400 to text-teal-700 h-64 mt-10 w-full absolute bottom-0 z-[99] max-lg:h-[150px] max-lg:w-full" />

        </div>
    </section>
  )
}

export default Hero