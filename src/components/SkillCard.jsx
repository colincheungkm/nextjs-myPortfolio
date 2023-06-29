const SkillCard = ({ logo, name }) => {
  return (
    <div
      className={`p-6 text-zinc-100  rounded-xl hover:scale-105 ease-in duration-300  border-y border-zinc-200 hover:border-[#00bcd4] hover:text-[#00bcd4]`}
    >
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">{logo}</div>

        <div className="flex flex-col items-center justify-center text-xl tracking-wider">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
