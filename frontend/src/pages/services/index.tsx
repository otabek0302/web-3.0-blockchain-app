const ServicesPage = () => {
  return (
    <section className="relative flex items-center justify-center -mt-14 md:-mt-24 gradient-bg-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:h-screen flex flex-col items-center justify-center">
          
          <div className="mb-32 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold text-white">Services that we continue to improve</h1>
            <p className="text-white text-lg">The best choice for buying and selling cryptocurrencies.The most secure and fastest way to buy and sell cryptocurrencies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative white-glassmorphism rounded-[32px!important] p-10 space-y-4">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 white-glassmorphism w-20 h-20 border-2 border-white rounded-full text-white text-lg font-bold flex items-center justify-center">01</span>
              <h2 className="text-4xl font-bold text-white mb-8">Security guarantee</h2>
              <p className="text-white text-sm md:text-lg">We use the latest security technologies to protect your data and transactions.</p>
              <p className="text-white text-sm md:text-lg">We implement industry-leading encryption and security measures to ensure your transactions and data remain protected.</p>
            </div>
            <div className="relative white-glassmorphism rounded-[32px!important] p-10 space-y-4">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 white-glassmorphism border-2 border-white rounded-full text-white text-lg font-bold flex items-center justify-center">02</span>
              <h2 className="text-4xl font-bold text-white mb-8">Best exchange rates</h2>
              <p className="text-white text-sm md:text-lg">We offer the best exchange rates for your cryptocurrencies.</p>
              <p className="text-white text-sm md:text-lg">Our platform provides competitive rates and transparent pricing, ensuring you get the best value for your transactions.</p>
            </div>
            <div className="relative white-glassmorphism rounded-[32px!important] p-10 space-y-4">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 white-glassmorphism border-2 border-white rounded-full text-white text-lg font-bold flex items-center justify-center">03</span>
              <h2 className="text-4xl font-bold text-white mb-8">Fastest transactions</h2>
              <p className="text-white text-sm md:text-lg">We offer the fastest transactions for your cryptocurrencies.</p>
              <p className="text-white text-sm md:text-lg">Our platform provides fast and secure transactions, ensuring you get your funds quickly and efficiently.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
