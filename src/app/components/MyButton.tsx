import { useRouter } from "next/navigation";

interface MyButtonProps {
  isFormValid: () => boolean;
  name: string;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const router = useRouter();

  return (
    <button
      className={`w-full md:w-[50%] p-3 rounded-md  ${
        props.isFormValid()
          ? "bg-blue-400"
          : "bg-blue-300 text-gray-600 cursor-not-allowed"
      }`}
      onClick={() => router.push("/resume")}
    >
      {props.name}
    </button>
  );
};

export default MyButton;
