
import { Button } from '../components/button';
import RlCar1 from '../assets/asides/rl_car_1.png';
import RlCar2 from '../assets/asides/rl_car_2.png';

export const Asiders = () => {
    return (
        <section className="relative w-full flex flex-col">
            <div className="relative w-full flex sm:flex-row flex-col">
                <article className="relative sm:w-1/3 w-full flex flex-col space-y-10 py-10 justify-center align-middle">
                    <div className="w-full px-3">
                        <p className="font-extrabold font-fa text-black sm:text-4xl text-xl text-center"> EARN FAN REWARDS </p>
                    </div>
                    <div className="w-full px-3">
                        <p className="font-light font-rl text-black text-base text-center">GET FAN REWARDS JUST BY WATCHING ROCKET LEAGUE ESPORTS BROADCASTS! EARN DECALS, WHEELS, GOAL EXPLOSIONS, AND MORE!</p>
                    </div>
                    <div className="w-full px-4">
                        <Button text="VIEW FAN REWARDS" />
                    </div>
                </article>
                <aside className="relative sm:w-2/3 w-full">
                    <img src={RlCar1} className="relative w-full h-full" alt="carro demonstrativo" />
                </aside>
            </div>

            {/* segundo carro */}
            <div className="relative w-full flex sm:flex-row flex-col-reverse">
                <aside className="relative sm:w-3/5 w-full">
                    <img src={RlCar2} className="relative w-full h-full" alt="carro demonstrativo" />
                </aside>
                <article className="relative sm:w-1/3 w-full flex flex-col space-y-10 py-10 justify-center align-middle">
                    <div className="w-full px-3">
                        <p className="font-extrabold font-fa text-black sm:text-4xl text-xl text-center"> LINK. WATCH. EARN. </p>
                    </div>
                    <div className="w-full px-3">
                        <p className="font-light font-rl text-black text-base text-center">LINK YOUR TWITCH ACCOUNT TO YOUR ROCKET LEAGUE ACCOUNT, TUNE IN AND WATCH OFFICIAL ROCKET LEAGUE BROADCASTS, AND START EARNING FAN REWARDS!</p>
                    </div>
                    <div className="w-full px-4">
                        <Button text="VIEW FAN REWARDS" />
                    </div>
                </article>
            </div>
            <div className='w-full h-1 bg-primary'></div>
        </section>
    );
}