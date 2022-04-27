import { useState } from "react";
import arrowDown from "../assets/utils/arrow_down.png";

export const Carrousel = () => {

    const [imageIndex, setImageIndex] = useState(0);
    const ids = [0, 1, 2, 3, 4, 5, 6];

    return (

        <section className="relative w-full flex flex-col">
            <div className="relative w-full flex flex-col justify-center bg-gradient-to-b from-faq to-black sm:px-40 space-y-5 pb-10 sm:pt-20 pt-10 px-10">
                <p className="font-extrabold font-fa text-reward sm:text-4xl text-xl text-center"> GET REWARDED </p>
                <p className="font-light font-rl text-white text-base text-center">PREVIEW THE LATEST ITEMS BELOW. FAN REWARDS ARE AVAILABLE ON ALL ROCKET LEAGUE CHAMPIONSHIP SERIES AND COLLEGIATE ROCKET LEAGUE STREAMS ON TWITCH!</p>
            </div>

            <div className="relative lg:h-[100vh] md:h-[70vh] sm:h-[60vh] h-[300px]"
                style={{
                    backgroundImage: `url(/carrousel/carr${String(imageIndex)}.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'contain',
                    backgroundSize: '100% 100%'
                }}>

                <div className="sm:flex hidden absolute w-full h-full justify-between align-middle">
                    <img src={arrowDown} onClick={() => { imageIndex === 0 ? setImageIndex( ids.length - 1 ) : setImageIndex( imageIndex - 1 ) }} className="sm:w-40 sm:h-40 w-20 h-20 rotate-[90deg] self-center cursor-pointer" alt="setinha pra direita" />
                    <img src={arrowDown} onClick={() => { imageIndex === (ids.length - 1) ? setImageIndex(0) : setImageIndex( imageIndex + 1 ) }} className="sm:w-40 sm:h-40 w-20 h-20 rotate-[270deg] self-center cursor-pointer" alt="setinha pra esquerda" />
                </div>
            </div>

            <div className="relative w-full flex flex-col justify-center bg-gradient-to-b from-faq to-black sm:px-40 px-5 space-y-5 pb-20 pt-20">
                <ul className="relative flex flex-row space-x-2 w-full justify-center">
                    {ids.map((id) => {
                        if (id === imageIndex) {
                            return (
                                <li key={id} className="w-6 h-6 bg-primary rounded-full"></li>
                            )
                        }

                        return (
                            <li key={id} className="w-6 h-6 bg-hovered hover:bg-primary cursor-pointer rounded-full" onClick={() => { setImageIndex(id) }}></li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}