const SkillCard = ({ logo, name }) => {
  return (
    <div
      className={`p-6 border-zinc-400 text-zinc-100 border-2 rounded-xl hover:scale-105 ease-in duration-300 hover:border-[#00bcd4] hover:text-[#00bcd4]`}
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">{logo}</div>

        <div className="flex flex-col items-center justify-center text-xl">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
