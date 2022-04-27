import fanLogo from "../assets/logo/fan_rewards.png";
import { Button } from "../components/button";
import arrowDown from "../assets/utils/arrow_down.png";
import { useEffect } from "react";

const AOS = require('aos');

export const Landing = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="relative w-full flex flex-col">
            <video className="relative object-cover h-[82vh] w-full" preload="auto" muted autoPlay loop>
                <source className="relative" src="/videos/rl_esports_fanrewards.mp4" type="video/mp4" />
            </video>

            <div className="absolute w-full h-full flex flex-col space-y-3 justify-center sm:pt-16  sm:py-0 py-20">
                <div data-aos="zoom-in" data-aos-once={true} data-aos-delay="300" className="relative self-center h-3/5">
                    <img src={fanLogo} className="w-auto h-full " alt="logo fan rewards" />
                </div>

                <div data-aos="fade-up" data-aos-once={true} data-aos-delay="300" className="relative self-center h-1/4">
                    <Button text="SIGN UP NOW!" />
                </div>

                <div data-aos="fade-up" data-aos-once={true} data-aos-delay="300" className="relative self-center h-1/4 cursor-pointer">
                    <img src={arrowDown} className="w-auto h-full " alt="setinha pra baixo" />
                </div>
            </div>

            <span className="w-full h-1 bg-primary"></span>
        </section>
    );
}