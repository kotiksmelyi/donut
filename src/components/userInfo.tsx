import { User } from "../usermodel"


export function UserInfo({id, username, balance, profile_picture_url}: User) {

    return (
        <nav className='flex top-0 justify-end h-12 bg-second'>
            <div className="flex flex-row mr-9">
            <img src="./icons/droparrow.svg" className="w-5 h-2 m-auto mr-2 "/>
            <div className="m-auto mr-3">
            <h3 className="text-white text-base m-auto">{username}</h3>
            <h3 className="text-third text-sm m-auto">Баланс: <span>{balance}</span></h3>
            </div>
            <img src={`${profile_picture_url}`} className="w-8 h-8 m-auto rounded-full" />
            </div>
        </nav>
    )
}