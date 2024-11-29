import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const percentage = 64; 

  return (
    <div
      style={{
        width: 200,
        backgroundColor: "#032706",
        borderRadius: "50%",
        height: 200,
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={18}
        borderRadius={0}
        styles={buildStyles({
          textSize: "26px",
          textColor: "#fff",
          pathColor: "#5BD489",
          trailColor: "#3D614B",
          backgroundColor: "#032706",
          strokeLinecap: "butt",
        })}
      />
    </div>
  );
};

export default CircularProgress;
