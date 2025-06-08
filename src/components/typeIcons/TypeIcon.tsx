import "./typeIcon.css";

type PropsType = {
  type: string;
};

const TypeIcon = ({ type }: PropsType) => {
  return (
    <div className={`type ${type}`}>
      <img src={`/svg/${type}.svg`} alt="" />
    </div>
  );
};

export default TypeIcon;
