import Image from "next/image";

import DevLogo from "@assets/Group.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";


import Sello1 from "@assets/footer/confianza.png";
import Sello2 from "@assets/footer/jp.png";

import Sello3 from "@assets/footer/bbva.png";
import Sello4 from "@assets/footer/bizum.png";
import Sello5 from "@assets/footer/lacaiza.png";
import Sello6 from "@assets/footer/maestro.png";
import Sello7 from "@assets/footer/mastercard.png";
import Sello8 from "@assets/footer/sabadell.png";
import Sello9 from "@assets/footer/santander.png";
import Sello10 from "@assets/footer/servired.png";
import Sello11 from "@assets/footer/telepago.png";
import Sello12 from "@assets/footer/servired.png";

const sellos = [
  Sello3,
  Sello4,
  Sello5,
  Sello6,
  Sello7,
  Sello8,
  Sello9,
  Sello10,
  Sello11,
  Sello12,
];

export default function Footer() {
  return (
    <div className="h-[45vh] w-full bg-black flex justify-around items-center gap-4 py-8">
      <div>
        {" "}
        <Image src={DevLogo} alt="logo_dev" className="object-cover" />
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Link de Interesés</h4>
        <ul className="grid grid-cols-2 items-start underline font-normal tracking-wide">
          <li>Quienes Somos</li>
          <li>Preguntas Frecuentes</li>
          <li>Premios Repartidos</li>
          <li>Ayuda</li>
          <li>Blog</li>
          <li>Mapa Web</li>
        </ul>
        <h4 className="font-bold text-xl">Otros Links</h4>
        <ul className="underline font-normal tracking-wide">
          <li>Comprar Lotería De Navidad</li>
          <li>Comprar Lotería Del Niño</li>
          <li>Lotería De Navidad Para Empresas</li>
          <li>Bote XX Millones Euromillones</li>
          <li>Lotería Sorteo Especial</li>
          <li className="no-underline">
            Lotería <span className="underline">Jueves y Sábado</span>
          </li>
        </ul>
      </div>

      <div className=" flex flex-col gap-4 w-[22%] h-full">
        <h4 className="font-bold text-xl">Confianza y Seguridad</h4>
        <h4>Sellos de Confianza</h4>
        <div className="flex gap-1">
          <Image src={Sello1} alt="icon_2" />
          <Image src={Sello2} alt="icon_3" />
        </div>

        <h4>Métodos de Pago</h4>
        <div className="flex flex-wrap gap-2">
          {sellos.map((item, _) => (
            <Image key={_} src={item} alt="image" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-xl">Textos legales</h4>
        <ul className=" underline font-normal tracking-wide">
          <li>Condiciones Generales</li>
          <li>Política De Privacidad</li>
          <li>Política De Cookies</li>
        </ul>
        <h4 className="font-bold text-xl">Contact</h4>
        <ul className="font-normal tracking-wide">
          <li className="underline">hello@devtalenty.com</li>
          <li>+506 124 - 356 780</li>
          <li>Chat</li>
          <li>De lunes a viernes de 9:00h a 19:00h</li>
        
          <li className="no-underline">
            Siguenos en: <div className="flex gap-2"><FaFacebookF/> <FaInstagram/><FaTwitter/></div>
          </li>
        </ul>
      </div>

    </div>
  );
}
