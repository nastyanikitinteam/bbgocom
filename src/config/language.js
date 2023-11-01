import UsaIcon from "images/countries/usa.svg";
import RuIcon from "images/countries/russia.svg";
import ThailandIcon from "images/countries/thailand.svg";

export const languageList = [
  {
    value: "EN",
    label: "EN",
  },
  {
    value: "RU",
    label: "RU",
  },
  {
    value: "TH",
    label: "TH",
  },
];

export const languageListWithIcon = [
  {
    value: "en",
    label: (
      <div className="option-withIcon">
        <UsaIcon />
        EN
      </div>
    ),
  },
  {
    value: "ru",
    label: (
      <div className="option-withIcon">
        <RuIcon />
        RU
      </div>
    ),
  },
  {
    value: "th",
    label: (
      <div className="option-withIcon">
        <ThailandIcon />
        TH
      </div>
    ),
  },
];
