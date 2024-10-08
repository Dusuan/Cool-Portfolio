import React from "react";
import {Link} from "react-router-dom";
interface BotonLinkProps {
    texto: string;
    link?:  string;
}

const BotonLink: React.FC<BotonLinkProps> = ({texto, link}) => {
    return(
        <button className="hidden text-xs md:flex justify-center bg-transparent border rounded-3xl transition ease-in-out text-white font-bold py-4 px-5 hover:-translate-y-2 hover:translate-x-2 w-36 hover:bg-gray-800">
            <p>{texto}</p>
        </button>
    );
}

export default BotonLink;