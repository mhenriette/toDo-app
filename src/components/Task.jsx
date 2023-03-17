import trash from "../assets/trash.svg";

const Task = ({ text, checked, onChange, onClick }) => {
  return (
    <div className="flex items-center justify-between border-b border-solid py-3 border-gray-300 ">
      <div
        className={`flex items-center gap-5 text-gray-300 text-2xl font-normal flex-grow ${checked && "line-through"
          }`}
      >
        <input
          type="checkbox"
          id={text}
          name="trial"
          checked={checked}
          onChange={onChange}
          className="bg-red-400"
        />
        <label htmlFor={text}>{text}</label>
      </div>
      <img src={trash} alt="trash" className="w-8 h-8" onClick={onClick} />
    </div>
  );
};

export default Task;
