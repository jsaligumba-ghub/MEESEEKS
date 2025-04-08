
export const Tokenomics = () => {

  
  const TokenomicsData = [
      {
          color: "#7acee0",
          value: 65,
          title: "Community",
          description: "Open Snek.fun fair launch to public"
      },
      {
          color: "#7acee0",
          value: 25,
          title: "Initial Liquidity",
          description: "LP Tokens are forever burned"
      },
      {
          color: "#7acee0",
          value: 6,
          title: "CEX Reserves",
          description: "Exchange listings and expansion opportunities"
      },
      {
          color: "#7acee0",
          value: 3,
          title: "SUGAR Ecosystem",
          description: "Sugar Factory, Staking and other initiatives"
      },
      {
          color: "#7acee0",
          value: 1,
          title: "Marketing",
          description: "Contests, airdrops, events and social media"
      }
  ];
return (
  <section className="w-full relative min-h-screen h-auto py-20 bg-gradient-to-b from-white to-cyan-100 max-lg:h-auto max-lg:w-full max-lg:">
      <div className="max-w-5xl mx-auto max-lg:h-[645px] max-sm:w-[275px] max-lg:mt-0 border-4 border-cyan-400  rounded-2xl">
      <div className="font-primary text-center w-auto">
              <h1  className="text-6xl text-[#7acee0] w-[450px] font-bold max-sm:text-2xl max-sm:w-auto">
                  TOKENOMICS
              </h1>
          </div>
      <div className="w-full flex flex-row-reverse max-lg:flex- max-lg:flex-col">
     
      <div className="w-full flex flex-col justify-center">
          <div className="w-[400px] mx-auto px-[20px] py-[10px] max-sm:w-auto">
          {TokenomicsData.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                  
                  <div className="flex flex-col">
                  <div className="flex flex-row items-center justify-start">
                  <div style={{ backgroundColor: item.color }} className="w-6 h-6 mr-2 rounded-lg border-l-[3px] border-b-[3px] border-[2px] border-cyan-200 "></div>
                  <p style={{ color: item.color }} className="text-xl font-semibold font-primary">{item.value}%</p>
                  <h3 style={{ color: item.color }} className="text-lg font-bold font-primary ml-3">{item.title}</h3>
                  </div>
      
                      <p className="text-sm font-secondary text-cyan-700">{item.description}</p>
                      </div>
              </div>
          ))}
      </div>
      </div>
      <div className="w-full mx-auto max-lg:size-80 max-lg:h-auto max-sm:w-auto">
          <img 
          src="/tokenomics.png" 
          alt="Tokenomics" className="w-[1250px] h-auto mx-auto scale-x-[-1] mt-8" />
      </div>
      </div>
     
      </div>
  </section>
)
}
export default Tokenomics;