import { Button } from "@headlessui/react";

const SkillTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = `${isSelected ? 
        "dark:text-white font-medium border-b-2 border-indigo-500 text-black" : 
        "text-gray-500 font-medium"} ${name === "All" ? "text-2xl" : "text-base"}`;

    return (
        <Button
            className={buttonStyles}
            onClick={() => onClick(name)}
        >
            {name}
        </Button>
    );
};

export default SkillTag;
