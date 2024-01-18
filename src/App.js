import { useState } from "react";
import "./index.css";

const academicsArr = [
  {
    name: "American University of Iraq, Sulimani - AUIS",
    year: "2021 - present",
    gpa: 3.71,
    description: `Learn Software Engineering accadimically
      Meet Doctor Hoger Mahomed 
      Meet the mystro`,
  },
  {
    name: "Qaraqosh High Schoo;",
    year: "2017 - 2020",
    gpa: 98.83,
    description: `Learn Software Engineering accadimically\n,
    Meet Doctor Hoger Mahomed\n,
    "Meet the mystro\n`,
  },
];

const ExperienceArr = [
  {
    role: "Photographer",
    name: "PDI",
    year: "2021 - 2022",
    description: `A lot of blabla bla`,
  },
  {
    role: "Facilitator",
    name: "Wolrd Learning",
    year: "2023 - 2024",
    description: `A lot of blabla bla`,
  },
];

export default function App() {
  const [name, setName] = useState("Noor Safaa Wadeea");
  const [phone, setPhone] = useState("07713900699");
  const [linkedIn, setLinkedIn] = useState("NoorJijji");
  const [location, setLocation] = useState("Sulimanin, Iraq");
  const [email, setEmail] = useState("jijjinoor@gmail.com");

  const [academics, setAcademics] = useState(academicsArr);
  const [experiences, setExperiences] = useState(ExperienceArr);

  function handleSubmitGeneral(value) {
    setName(value.name);
    setPhone(value.phone);
    setLinkedIn(value.linkedIn);
    setEmail(value.email);
    setLocation(value.location);
  }
  function handleSubmitEducation(value) {
    const newObj = {
      name: value.schoolName,
      year: value.years,
      gpa: value.gpa,
      description: value.description,
    };
    setAcademics((arr) => [...arr, newObj]);
  }

  function handleSubmitExperience(value) {
    const newObj = {
      role: value.role,
      name: value.name,
      year: value.years,
      description: value.description,
    };
    setExperiences((arr) => [...arr, newObj]);
  }

  return (
    <div className="app">
      <FormInput
        onSubmitGeneral={handleSubmitGeneral}
        onSubmitEducation={handleSubmitEducation}
        onSubmitExperience={handleSubmitExperience}
      />
      <CV
        name={name}
        phone={phone}
        linkedIn={linkedIn}
        location={location}
        email={email}
        academics={academics}
        experiences={experiences}
      />
    </div>
  );
}

function FormInput({ onSubmitGeneral, onSubmitEducation, onSubmitExperience }) {
  return (
    <div className="formInput">
      <InputGeneral onSubmit={onSubmitGeneral} />
      <InputEducation onSubmitEducation={onSubmitEducation} />
      <InputExperience onSubmitExperience={onSubmitExperience} />
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
    <div className="form-general">
      <form onSubmit={handleSubmit}>
        <label>
          <em>GENERAL INFORAMTION</em>
        </label>
        <br />
        <br />
        <label>Name</label>
        <br />
        <input type="text" placeholder="Noor Safaa" name="name" /> <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="jijjinoor@gmail.com"
          name="email"
        />{" "}
        <br />
        <label>Phone Number</label>
        <br />
        <input type="tel" placeholder="0771 111 1111" name="phone" /> <br />
        <label>LinkedIn</label>
        <br />
        <input type="text" placeholder="NoorJijji" name="linkedIn" /> <br />
        <label>Location</label>
        <br />
        <input type="text" placeholder="Sulimani, IQ" name="location" /> <br />
        <button type="submit">Save</button>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

function InputEducation({ onSubmitEducation }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      schoolName: e.target.name.value,
      years: e.target.email.value,
      gpa: e.target.phone.value,
      description: e.target.description.value,
    };

    onSubmitEducation(formData);
  };

  return (
    <div className="form-education">
      <form onSubmit={handleSubmit}>
        <label>
          <em>EDUCATION</em>
        </label>
        <br />
        <br />
        <label>School Name</label>
        <br />
        <input type="text" placeholder="AUIS" name="name" />
        <br />
        <label>Years</label>
        <br />
        <input type="text" placeholder="2022-2026" name="year" /> <br />
        <label>GPA</label>
        <br />
        <input type="text" placeholder="3.4" name="phone" /> <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="18"
        ></textarea>
        <button type="submit">Save</button>
        <br />
        <br />
      </form>
    </div>
  );
}

function InputExperience({ onSubmitExperience }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      role: e.target.role.value,
      name: e.target.name.value,
      years: e.target.year.value,
      description: e.target.description.value,
    };

    onSubmitExperience(formData);
  };

  return (
    <div className="form-experience">
      <form onSubmit={handleSubmit}>
        <label>
          <em>EXPERIENCE</em>
        </label>
        <br />
        <br />
        <label>Role</label>
        <br />
        <input type="text" placeholder="Photgrapher" name="role" />
        <br />
        <label>Company Name</label>
        <br />
        <input type="text" placeholder="PDI" name="name" />
        <br />
        <label>Years</label>
        <br />
        <input type="text" placeholder="2022-2026" name="year" /> <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          rows="4"
          cols="18"
        ></textarea>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

function CV({
  name,
  phone,
  linkedIn,
  location,
  email,
  academics,
  experiences,
}) {
  return (
    <div className="cvDispaly">
      <GeneralInformation
        name={name}
        phone={phone}
        linkedIn={linkedIn}
        location={location}
        email={email}
      />
      <Education academics={academics} />
      <Experiences experiences={experiences} />
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

function Education({ academics }) {
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
      <div>
        <h3>{schoolObj.name}</h3>
        <p>
          <span>{schoolObj.year}</span>
          <span>{schoolObj.gpa}</span>
        </p>
      </div>
      <div>
        <p>{schoolObj.description}</p>
      </div>
    </div>
  );
}

function Experiences({ experiences }) {
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
      <div>
        <h3>
          {ExperienceObj.role} - {ExperienceObj.name}
        </h3>
        <p>{ExperienceObj.year}</p>
      </div>
      <div>
        <p>{ExperienceObj.description}</p>
      </div>
    </div>
  );
}
