import { useState } from "react";
import "./index.css";

const academicsArr = [
  {
    name: "American University of Iraq, Sulimani - AUIS",
    year: "2021 - present",
    gpa: 3.71,
    learningOutcomes: [
      "Learn Software Engineering accadimically",
      "Meet Doctor Hoger Mahomed",
      "Meet the mystro",
    ],
  },
  {
    name: "Qaraqosh High Schoo;",
    year: "2017 - 2020",
    gpa: 98.83,
    learningOutcomes: [
      "Learn Software Engineering accadimically",
      "Meet Doctor Hoger Mahomed",
      "Meet the mystro",
    ],
  },
];

const ExperienceArr = [
  {
    role: "Photographer",
    company: "PDI",
    year: "2021 - 2022",
    roles: ["BlaBlaBla1", "BlaBlaBla2", "BlaBlaBla3"],
  },
  {
    role: "Facilitator",
    company: "Wolrd Learning",
    year: "2023 - 2024",
    roles: ["BlaBlaBla1", "BlaBlaBla2", "BlaBlaBla3"],
  },
];

export default function App() {
  return (
    <div className="App">
      <GeneralInformation />
      <Education />
      <Experiences />
    </div>
  );
}

function GeneralInformation() {
  const [name, setName] = useState("Noor Safaa Wadeea");
  const [phone, setPhone] = useState("07713900699");
  const [linkedIn, setLinkedIn] = useState("NoorJijji");
  const [location, setLocation] = useState("Sulimanin, Iraq");

  return (
    <div className="general">
      <h1>{name}</h1>
      <div className="break"></div>
      <ul>
        <li>
          <img src="telephone.png" />
          <span>{phone}</span>
        </li>
        <li>
          <img src="linkedin.png" />
          <span>{linkedIn}</span>
        </li>
        <li>
          <img src="location.png" />
          <span>{location}</span>
        </li>
      </ul>
    </div>
  );
}

function Education() {
  const arr = academicsArr;
  const [academics, setAcademics] = useState(arr);

  return (
    <div className="education">
      <h1>Educatiion</h1>
      {academics.map((school) => (
        <School schoolObj={school} />
      ))}
    </div>
  );
}

function School({ schoolObj }) {
  return (
    <div className="school">
      <h3>{schoolObj.name}</h3>
      <p>
        <span>{schoolObj.year}</span>
        <span>{schoolObj.gpa}</span>
      </p>
      <ul>
        {schoolObj.learningOutcomes.map((lo) => (
          <li>{lo}</li>
        ))}
      </ul>
    </div>
  );
}

function Experiences() {
  const arr = ExperienceArr;
  const [experiences, setExperiences] = useState(arr);
  return (
    <div className="experience">
      <h1>Professional Experiences</h1>
      {experiences.map((exp) => (
        <SingleExp ExperienceObj={exp} />
      ))}
    </div>
  );
}

function SingleExp({ ExperienceObj }) {
  return (
    <div className="singleExp">
      <h3>
        {ExperienceObj.role} - {ExperienceObj.company}
      </h3>
      <p>{ExperienceObj.year}</p>
      <ul>
        {ExperienceObj.roles.map((rol) => (
          <li>{rol}</li>
        ))}
      </ul>
    </div>
  );
}
