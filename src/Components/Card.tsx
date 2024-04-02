import { IconType } from "react-icons";

interface CardProps {
  color: string;
  level: number;
  title: string;
  Icon: IconType;
}

const Card = ({ title, color, level, Icon }: CardProps) => {
  return (
    <div className="bg-white min-w-56 max-w-58 shadow-lg p-6 rounded-lg mt-2">
      <div className="flex gap-1 items-center justify-evenly">
        <div>
          <h3 className="text-black font-semibold text-lg">{title}</h3>
          <h4 className="text-gray-700 font-semibold text-sm">{level}%</h4>
          <p className="text-xs font-medium">normal</p>
        </div>
        <div
          className="widgetCircle"
          style={{
            background: `conic-gradient(
        ${color} ${(Math.abs(level) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
          }}
        >
          <Icon
            className="relative"
            style={{
              color: color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;