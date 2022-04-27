import { Asiders } from "../sections/asiders";
import { Carrousel } from "../sections/carrousel";
import { Header } from "../sections/header";
import { Landing } from "../sections/landing";

export const Home = () => {
    return (
        <>
            <Header/>
            <Landing/>
            <Asiders/>
            <Carrousel/>
        </>
    );
}