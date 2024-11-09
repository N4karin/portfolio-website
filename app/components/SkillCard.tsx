const SkillCard = ({ path, name, viewbox }) => {

    const svgViewBox = viewbox && viewbox.trim().length > 0 ? viewbox : "0 0 128 128";

    return (
        <div className="relative flex flex-col items-left group">
            <svg 
                viewBox={svgViewBox}
                className="relative p-2 border-indigo-500 rounded-md border-2 text-indigo-500 dark:hover:text-[#111827] dark:hover:bg-indigo-500 hover:text-white hover:bg-indigo-500
                           transition-transform duration-300 transform group-hover:-translate-y-2"
                dangerouslySetInnerHTML={{ __html: path }}
            />
            <div className="opacity-0 group-hover:opacity-100 transition duration-100">
                {name}
            </div>
        </div>
    );
};

export default SkillCard;
