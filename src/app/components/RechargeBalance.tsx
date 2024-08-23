"use client";
import { useState } from "react";

import MyInputRadio from "./MyInputRadio";
import SimpleInputRadio from "./SimpleInputRadio";
import MyButton from "./MyButton";

import { useClientMediaQuery } from "../hooks/useClientMediaQuery";
import MySelect from "./MySelect";
import RBDescrip from "./RBDescrip";

const myItems = ["5 $", "10 $", "20 $", "50 $"];

export default function RechargeBalance() {
  const isMobile = useClientMediaQuery("(max-width: 600px)");

  const [formState, setFormState] = useState({
    selectedAmount: "",
    inputAmount: "",
    selectedCard: "",
    selectedMethod: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAmountClick = (amount: any) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedAmount: amount,
      inputAmount: amount,
    }));
  };

  const isFormValid = () => {
    return formState.selectedAmount !== "" && formState.selectedMethod !== "";
  };

  return (
    <div className="flex-1 transition-all text-black flex flex-col justify-between md:max-w-[40%] gap-2 md:gap-3">
      <h1 className="text-center font-bold text-xl leading-5 pt-4 md:pt-2">
        10,00 $ <br />
        <span className="text-sm font-normal">Tu Saldo</span>
      </h1>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold">Selecciona Importe a Añadir</h1>
        <fieldset className="border border-solid rounded-sm border-black p-1">
          <legend className="ml-2 px-1">Importe</legend>
          <input
            type="text"
            id="myInput"
            placeholder="Importe ($)"
            name="inputAmount"
            value={formState.inputAmount}
            onChange={handleChange}
            className="w-full outline-none pl-3 pb-1"
          />
        </fieldset>

        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-400">Importe mínimo</span>
          <ul className="flex justify-between">
            {myItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleAmountClick(item)}
                className={`py-1 px-4 rounded-md cursor-pointer md:px-12 ${
                  formState.selectedAmount === item
                    ? "bg-blue-400 text-white"
                    : "bg-blue-200"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-blue-500 rounded-lg p-2">
        <MyInputRadio
          title="Tarjeta bancaria"
          subTitle="Instantaneo"
          name="selectedCard"
          value=""
          selectedValue={formState.selectedCard}
          onChange={handleChange}
        />

        <div className="pl-4 pt-2">
          <SimpleInputRadio
            title="Tarjeta terminada en 0909"
            name="selectedCard"
            value="0909"
            selectedValue={formState.selectedCard}
            onChange={handleChange}
          />
          <SimpleInputRadio
            title="Utilizar otra tarjeta"
            name="selectedCard"
            value="other"
            selectedValue={formState.selectedCard}
            onChange={handleChange}
          />
        </div>
        {!isMobile && <MySelect />}
      </div>

      <div className="flex flex-col gap-1 md:gap-2">
        <MyInputRadio
          title="Bizum"
          subTitle="Importe mínimo 10 $"
          name="selectedMethod"
          value="bizum"
          selectedValue={formState.selectedMethod}
          onChange={handleChange}
        />
        <MyInputRadio
          title="Transferencia"
          subTitle="No instantaneo"
          name="selectedMethod"
          value="transfer"
          selectedValue={formState.selectedMethod}
          onChange={handleChange}
        />

        <div className="flex flex-col md:flex-row-reverse" >
          <MyButton name="Recargar Cuenta" isFormValid={isFormValid} />

          <RBDescrip />
        </div>
      </div>
    </div>
  );
}
