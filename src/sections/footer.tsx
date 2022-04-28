import TextLogo from "../assets/logo/logo_white.png";
import Ad from "../assets/utils/content_ad.png";
import Psy from "../assets/logo/psyonix-logo.svg";

export const Footer = () => {

    return (
        <section className="w-full bg-black flex flex-col space-y-20 py-20">

            <div className="relative sm:w-28 w-full justify-center align-middle sm:pl-5">
                <img src={TextLogo} className="w-40 mx-auto" alt="text logo" />
            </div>

            <div className="relative px-5 flex sm:flex-row flex-col sm:space-x-20 space-y-16 sm:space-y-0">
                <div className="flex flex-col space-y-3">
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Rocket League</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">News</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Broadcasts</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Fan Rewards</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Rocket League</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">News</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Broadcasts</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Fan Rewards</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Rocket League</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">News</p>
                    <p className="text-white hover:text-hovered font-rl text-xl sm:text-left text-center">Broadcasts</p>
                </div>
                <div className="sm:w-1/2 mx-auto">
                    <img src={Ad} className="sm:ml-auto w-30 h-20" alt='content advisor' />
                </div>
            </div>
            <div className="w-full flex sm:flex-row flex-col sm:space-x-2 space-y-5 sm:space-y-0 px-3">
                <img src={Psy} className="w-10 h-10 mx-auto sm:mx-0" alt="logo psyonix" />

                <p className="text-white font-rl text-xs sm:text-left text-center">© 2022 Psyonix LLC. Rocket League, Psyonix, and all related marks and <br/> logos are registered trademarks or trademarks of Psyonix LLC. All rights reserved.</p>
            </div>
        </section>
    )
}