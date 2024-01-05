import "./styles.css";

type FlipProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

export const Flip: React.FunctionComponent<FlipProps> = ({ front, back }) => {
  return (
    <div className="card">
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};
