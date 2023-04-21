import { useState } from "react";
import Inputemail from "../components/inputemail";
import Inputuser from "../components/inputuser";
import Password from "../components/Password";
import { useCallback } from "react";

const Auth = () => {

    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"))
    }, []);
        
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-norepeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-60">
                <nav className="px-12 py-5">
                    <img src="/images/logo.svg" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 fpnt-semibold">
                            {variant === "login" ? "Se connecter" : "S'inscrire"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === "register" && <Inputuser />}
                            <Inputemail />
                            <Password />
                        </div>
                        <button className="bg-secondary py-3 text-white rounded-md w-full mt-10 hover:bg-yellow-500 transition">
                            {variant === "login" ? "Se connecter" : "S'inscrire"}
                        </button>
                        <p className="text-neutral-500 mt-12">
                            {variant === "login" ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === "login" ? "S'inscrire" : "Se connecter"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;