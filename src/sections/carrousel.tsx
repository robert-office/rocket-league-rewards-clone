import { useState } from "react";

export const Carrousel = () => {

    const [imageIndex, setImageIndex] = useState("0");

    return (

        <section className="relative w-full flex flex-col">
            <div className="relative w-full flex flex-col justify-center bg-gradient-to-b from-faq to-black sm:px-40 px-5 space-y-5 pb-10 pt-20">
                <p className="font-extrabold font-fa text-reward sm:text-4xl text-xl text-center"> GET REWARDED </p>
                <p className="font-light font-rl text-white text-base text-center">PREVIEW THE LATEST ITEMS BELOW. FAN REWARDS ARE AVAILABLE ON ALL ROCKET LEAGUE CHAMPIONSHIP SERIES AND COLLEGIATE ROCKET LEAGUE STREAMS ON TWITCH!</p>
            </div>

            <div className="relative lg:h-[100vh] md:h-[70vh] sm:h-[60vh] h-[300px]"
                style={{
                    backgroundImage: `url(/carrousel/carr${imageIndex}.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'contain',
                    backgroundSize: '100% 100%'
                }}>

                <div className="absolute w-full flex">

                </div>
            </div>

            <div>


            </div>
        </section>
    );
}