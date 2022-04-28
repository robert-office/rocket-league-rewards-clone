import { Asiders } from "../sections/asiders";
import { Carrousel } from "../sections/carrousel";
import { Faq } from "../sections/faq";
import { Header } from "../sections/header";
import { Landing } from "../sections/landing";

export const Home = () => {
    return (
        <>
            <Header/>
            <Landing/>
            <Asiders/>
            <Carrousel/>
            <Faq/>
        </>
    );
}