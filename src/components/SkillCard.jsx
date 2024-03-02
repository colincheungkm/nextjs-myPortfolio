const SkillCard = ({ logo, name }) => {
  return (
    <div className={`p-3 text-zinc-100 rounded-xl borde border-zinc-200`}>
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto text-[64px]">{logo}</div>
        <div className="flex flex-col items-center justify-center text-sm tracking-wider">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
