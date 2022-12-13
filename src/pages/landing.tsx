import { Main } from "../components/main";
import { Money } from "../components/money";
import { NavBarLand } from "../components/navbarLand";
import { Add } from "../components/signInAd";
import { Widgets } from "../components/Widgets";

export function Landing() {
    return (
        <div>
            <NavBarLand />
            <Main />
            <Money />
            <Widgets />
            <Add />
        </div>
    )
}