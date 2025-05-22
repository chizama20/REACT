import { useState } from "react";

function Profile() {
  const [screen, setScreen] = useState("age");
  const [selectedAge, setSelectedAge] = useState("");
  const [gender, setGender] = useState("");
  const [addiction, setAddiction] = useState("");
  const [goal, setGoal] = useState("");

  const ageRanges = ["13 to 17", "25 to 34", "35 to 50", "50+"];
  const genders =["Male", "Female", "Others"];
  const addictions =["Smoking", "Vaping", "Fap", "Alcohol", "None of the above", "More than one of the above"];
  const goals =["Learn new skills regularly", "Strengthen my relationships", "BUuild a successful career", "Stay fit and healthy", "None of the above", "More than one of the above"];

  if (screen === "age") {
    return (
      <div className="age-screen">
        <p>How old are you?</p>
        {ageRanges.map((range) => (
          <button
            key={range}
            className={selectedAge === range ? "selected" : ""}
            onClick={() => (setSelectedAge(range), setScreen("gender"))}
          >
            {range}
          </button>
        ))}
      </div>
    );
  }

if (screen === "gender"){
  return(


    <div className="gender-screen">
        <p>What is your gender</p>
        {genders.map((range) => (
            <button
            key={range}
            className={gender == range ? "selected" : ""}
            onClick={() => (setGender(range), setScreen("addict"))}
            >
                {range}
            </button>
        ))}
    </div>
  );
}

if (screen === "addict"){
  return(


    <div className="addiction-screen">
        <p>What is your gender</p>
        {addictions.map((range) => (
            <button
            key={range}
            className={addiction == range ? "selected" : ""}
            onClick={() => (setAddiction(range), setScreen("goal"))}
            >
                 {range}
            </button>
        ))}
    </div>
  );
}

if (screen === "goal"){
  return(


    <div className="longTermGoal-Screen">
        <p>What is your gender</p>
        {goals.map((range) => (
            <button
            key={range}
            className={goal == range ? "selected" : ""}
            onClick={() => (setGoal(range), setScreen("run"))}
            >
                 {range}
            </button>
        ))}
    </div>
  );
}

if (screen === "run"){
  return(


    <div className="run-screen">
        <p>What is your gender</p>
        {genders.map((range) => (
            <button
            key={range}
            className={gender == range ? "selected" : ""}
            onClick={() => (setGender(range), setScreen(""))}
            >
                 {range}
            </button>
        ))}
    </div>
  );
}
}

export default Profile;
