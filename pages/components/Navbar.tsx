import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"
import { useState, useCallback, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import AccountMenu from "./AccountMenu";
import Image from "next/image";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div className={`
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
           
            ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ' '}`}>

                
                <Image src={"/images/logo.svg"} width={1980} height={100} alt={"logo"} className="h-4 lg:h-7"/>
                <div className="
                flex-row
                ml-8
                gap-7
                hidden
                lg:flex
                "
                >
                    <NavbarItem label="Accueil"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="Pour vous"/>
                    <NavbarItem label="Tendance"/>
                    <NavbarItem label="Favoris"/>
                    <NavbarItem label="Rechercher par Langue"/>
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex felx-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}/>
                    <MobileMenu visible={showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursort-pointer transition">
                        <AiOutlineSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursort-pointer transition">
                        <AiOutlineBell/>
                    </div>

                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg;w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src="/images/default-user.png"  width={1980} height={10} alt={"Avatar"} className=""/>
                        </div>
                        <BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar