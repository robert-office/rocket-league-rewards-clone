import ShareIcon from '@mui/icons-material/Share';
import LogoShield from "../assets/logo/logo_shield.png";
import TextLogo from "../assets/logo/logo_white.png";

const menuOptions = [
    "NEWS",
    'BROADCASTS',
    'FAN REWARDS',
    'SUPPORT'
]

export const Header = () => {
    return (
        <header className="relative bg-header w-full h-14">
            <section className="relative w-full flex flex-row p-1">

                <div className="flex space-x-4 justify-center align-middle">
                    <div className="relative w-12 h-12 pr-2 border-r border-r-gray-300 flex justify-center align-middle cursor-pointer">
                        <img src={LogoShield} alt="logo shield" className="self-center" />
                    </div>
                    <div className="relative w-20 self-center cursor-pointer">
                        <img src={TextLogo} alt="text logo" />
                    </div>
                </div>

                <div className="w-1/2 flex ml-4">
                    {menuOptions.map((name, id) => {
                        return (
                            <div key={id} className="relative flex flex-col mx-1 group cursor-pointer">
                                <div className="h-full flex justify-center mx-3">
                                    <p className="font-rl font-medium text-center text-gray-300 self-center group-hover:text-white whitespace-nowrap">{name}</p>
                                </div>

                                <span className={`absolute -bottom-1 hidden group-hover:flex h-[4px] w-full ${ id % 2 === 0 ? 'bg-hovered' : 'bg-primary' } self-end`}></span>
                            </div>
                        )
                    })}
                </div>

                <div className="w-1/2 self-center">
                    <div className='flex justify-end space-x-3 mr-2'>
                        <ShareIcon width={10} className="text-white" />
                        <p className='font-fa text-base font-extrabold text-gray-300 hover:text-white whitespace-nowrap'>RULES</p>
                    </div>
                </div>
            </section>
        </header>
    )
}