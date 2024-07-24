import react from "react";

interface BotonLinkProps {
    texto: string;
}

const BotonLink: React.FC<BotonLinkProps> = ({texto}) => {
    return(
        <button className="flex justify-center bg-transparent border rounded-3xl transition ease-in-out delay-50 text-white font-bold py-2 px-4 hover:-translate-y-2 hover:translate-x-2 w-36 hover:bg-gray-800">
            <p>{texto}</p>
        </button>
    );
}

export default BotonLink;