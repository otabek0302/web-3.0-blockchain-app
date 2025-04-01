import { heroImage } from "../../assets";


const Image = () => {
  return (
    <div className="space-y-6 flex flex-col flex-1 items-center justify-start w-full">
      <div className="flex flex-1 flex-col items-start justify-start w-full h-full">
        <img src={heroImage} alt="hero" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Image;
