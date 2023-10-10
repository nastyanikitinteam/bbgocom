import { FC } from "react";

interface IProps {
  icon: any;
  name: string;
  code: string;
}

const Country: FC<IProps> = ({ icon, name, code }) => (
  <div className="default-item">
    <div className="icon">{icon}</div>
    <span className="name">{name}</span>
    <span className="code">{code}</span>
  </div>
);

export default Country;
