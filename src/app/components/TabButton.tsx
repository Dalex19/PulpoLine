interface TabButtonProps {
    active: boolean;
    onClick: () => void;
    label: string;
  };
  
  const TabButton:React.FC<TabButtonProps> = (props) => {
    return (
      <button
        className={`${
          props.active
            ? "transition-all border-b-4 border-blue-500 text-black"
            : "text-gray-500"
        } py-2 px-4`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }

  export default TabButton;