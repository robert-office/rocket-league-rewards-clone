import { useEffect } from 'react';

const VanillaTilt = require('vanilla-tilt');


type IButton = {
    text: string
}

export const Button = ({ text }: IButton) => {

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".button"), {
            max: 10,
            speed: 400,
            scale: 1.2,
            glare: true
        });

        //It also supports NodeList
        VanillaTilt.init(document.querySelectorAll(".button"));
    }, []);

    return (
        <div className='-skew-x-[28deg]'>
            <div className="button cursor-pointer w-full px-14 py-3 flex justify-center align-middle bg-primary">
                <p className="font-fa skew-x-[28deg] font-black text-white text-lg self-center" > {text} </p>
            </div>
        </div>
    );
}