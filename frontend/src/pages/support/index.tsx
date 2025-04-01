const SupportPage = () => {
  return (
    <section className="relative flex items-center justify-center -mt-14 md:-mt-24 gradient-bg-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:p-32 px-4">
          
          <div className="relative w-full md:max-w-32 lg:max-w-72">
            <h2 className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pb-10 md:pb-0 text-white text-4xl md:text-8xl font-bold text-nowrap text-center md:-rotate-90">Support Center</h2>
          </div>
          <div className="flex-1 space-y-6">
            
            <div className="relative white-glassmorphism rounded-[32px!important] px-10 py-12 space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">Contact us</h2>
              <p className="text-white text-lg flex gap-2">
                <span>Contact us</span>
                <span>+123 456 7890</span>
              </p>
            </div>
            
            <div className="relative white-glassmorphism rounded-[32px!important] px-10 py-12 space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">Email</h2>
              <p className="text-white text-lg flex gap-2">
                <span>Email</span>
                <span>support@krypto.com</span>
              </p>
            </div>
            
            <div className="relative white-glassmorphism rounded-[32px!important] px-10 py-12 space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">Address</h2>
              <p className="text-white text-lg flex gap-2">
                <span>Address</span>
                <span>123 Main St, Anytown, USA</span>
              </p>
            </div>
            
            <div className="relative white-glassmorphism rounded-[32px!important] px-10 py-12 space-y-4">
              <h2 className="text-4xl font-bold text-white mb-8">Hours</h2>
              <p className="text-white text-lg flex gap-2">
                <span>Hours</span>
                <span>9:00 AM - 5:00 PM</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
