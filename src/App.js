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
  const [name, setName] = useState("Noor Safaa Wadeea");
  const [phone, setPhone] = useState("07713900699");
  const [linkedIn, setLinkedIn] = useState("NoorJijji");
  const [location, setLocation] = useState("Sulimanin, Iraq");
  const [email, setEmail] = useState("jijjinoor@gmail.com");

  function handleSubmitGeneral(value) {
    setName(value.name);
    setPhone(value.phone);
    setLinkedIn(value.linkedIn);
    setEmail(value.email);
    setLocation(value.location);
  }

  return (
    <div className="app">
      <FormInput onSubmit={handleSubmitGeneral} />
      <CV
        name={name}
        phone={phone}
        linkedIn={linkedIn}
        location={location}
        email={email}
      />
    </div>
  );
}

function FormInput({ onSubmit }) {
  return (
    <div className="formInput">
      <InputGeneral onSubmit={onSubmit} />
    </div>
  );
}

function InputGeneral({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      linkedIn: e.target.linkedIn.value,
      location: e.target.location.value,
    };

    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Noor Safaa" name="name" />
        <label>Email</label>
        <input type="text" placeholder="jijjinoor@gmail.com" name="email" />
        <label>Phone Number</label>
        <input type="text" placeholder="0771 111 1111" name="phone" />
        <label>LinkedIn</label>
        <input type="text" placeholder="NoorJijji" name="linkedIn" />
        <label>Location</label>
        <input type="text" placeholder="Sulimani, IQ" name="location" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function CV({ name, phone, linkedIn, location, email }) {
  return (
    <div className="App">
      <GeneralInformation
        name={name}
        phone={phone}
        linkedIn={linkedIn}
        location={location}
        email={email}
      />
      <Education />
      <Experiences />
    </div>
  );
}

function GeneralInformation({ name, phone, linkedIn, location, email }) {
  return (
    <div className="general">
      <h1>{name}</h1>
      <div className="break"></div>
      <ul>
        <li>
          <img src="email.png" />
          <span>{email}</span>
        </li>
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
    <div className="sec education">
      <h1>Educatiion</h1>
      {academics.map((school) => (
        <School schoolObj={school} />
      ))}
    </div>
  );
}

function School({ schoolObj }) {
  return (
    <div className="miniSec school">
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
    <div className="sec experience">
      <h1>Professional Experiences</h1>
      {experiences.map((exp) => (
        <SingleExp ExperienceObj={exp} />
      ))}
    </div>
  );
}

function SingleExp({ ExperienceObj }) {
  return (
    <div className="miniSec singleExp">
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
