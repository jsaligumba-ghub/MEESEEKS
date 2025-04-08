import React from 'react'

const socialIcons = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '/ic-x.svg' },
    { name: 'Telegram', href: 'https://telegram.org', icon: '/ic-tele.svg' },
    { name: 'CoinGecko', href: 'https://coingecko.com', icon: '/ic-gecko.svg' },
    { name: 'Discord', href: 'https://discord.com', icon: '/ix-disc.svg' }
  ];
  

const Community = () => {
  return (
    <section className="relative w-full h-screen " style={{ backgroundImage: "url('/m6.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className='flex w-full h-full'>
            <div className="bg-gradient-to-b from-cyan-300 to text-teal-700 h-64 w-full absolute max-lg:h-[150px] max-lg:w-full" />
            <div className='flex flex-col w-[1250px] h-[350px] m-auto text-white'>
                <div className='flex flex-col w-auto h-auto text-center text-white max-lg:mx-auto'>
                <div className="relative text-center max-lg:mx-auto">
  <h1 className="relative text-[80px] font-bold uppercase text-white max-lg:text-6xl">#MEESEEKS COMMUNITY</h1>
</div>
                <p className='text-center text-xl italic '>Be a part of MEESEEKS COMMUNITY!</p>
            </div>
            <div className="flex flex-row space-x-2 max-lg:hidden">
                    
                    {socialIcons.map((icon) => (
                        <a key={icon.name} href={icon.href} className="text-white hover:text-gray-300 bg-cyan-800 p-2 rounded-xl border-[1px] border-l-4 border-b-4 border-white hover:border-l-[1px] hover:border-b-[1px] duration-300 transition-all ease-in-out mx-auto mt-5">
                            <img src={icon.icon} alt={icon.name} className="h-12  max-lg:hidden" />
                        </a>
                    ))}
                </div>
        </div>
        </div>
    </section>
  )
}

export default Community