import { Aside } from "../components/aside";
import { Navbar } from "../components/Navbar";

export function Settings() {
    return (
        <div className="flex">
            <Aside />
            <div className="flex flex-col min-h-screen flex-grow">
                <Navbar />
            </div>
        </div>
    )
}