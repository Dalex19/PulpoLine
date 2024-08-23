import { IoIosHelpCircleOutline } from "react-icons/io";

interface MyInputRadioProps {
    title: string;
    subTitle: string;
    name: string;
    value: string;
    selectedValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInputRadio: React.FC<MyInputRadioProps> = (props) => {
  return (
    <div className="flex items-center justify-between md:border md:p-2 md:rounded-s-md md:shadow-sm">
      <div className="flex gap-1">
        <input
          type="radio"
          name={props.name}
          id={props.title}
          checked={props.selectedValue === props.title}
          onChange={props.onChange}
        />
        <label htmlFor={props.title} className="flex items-center gap-1">
          {props.title}{" "}
          <span className="info">
            <IoIosHelpCircleOutline size={14} color="blue" />
          </span>
        </label>
      </div>
      <span className="text-sm text-gray-400">{props.subTitle}</span>
    </div>
  );
}

export default MyInputRadio;
