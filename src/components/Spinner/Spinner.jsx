import Lottie from 'lottie-react';
import SpinnerLottie from './spinner-loader.json';

const Spinner = () => {
  return (
    <div className="min-h-screen p-6 max-w-[1440px] mx-auto mt-40">
      <Lottie animationData={SpinnerLottie} loop={true}></Lottie>
    </div>
  );
};

export default Spinner;
<h1>THis is a spinner</h1>;
