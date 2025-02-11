import React from 'react'

const About = () => {
    return(
        <section className="relative w-full h-screen bg-gradient-to-b from-cyan-400 to-cyan-600">
            <div className='flex w-full h-screen'>
                <div className='flex flex-row w-[1250px] h-[400px] m-auto ml-'>
                    <div className='flex flex-col w-[750px] h-[350px] text-white'>
                    <h1 className='text-8xl w-auto h-auto text-white font-bold'>LOOK AT ME!</h1>
                    <p className='text-xl my-auto'>Meeseeks Blockchain draws inspiration from Rick and Morty’s iconic Mr. Meeseeks, the blue humanoid beings summoned to complete a task as efficiently as possible before disappearing. Just like the Meeseeks, this blockchain is designed to be fast, efficient, and purpose-driven—executing transactions, smart contracts, and dApp operations with minimal latency and high precision.</p>
                    </div>
                    <img src='m6.gif' alt='bounce' className='w-[320px] ml-16 rounded-full ' />
                </div>
            </div>
        </section>
    )
}

export default About