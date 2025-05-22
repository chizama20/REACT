import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

import { useState, useEffect} from "react";

function Profile() {
    const [screen, setScreen] = useState("age");
    const [selectedAge, setSelectedAge] = useState("");
    const [gender, setGender] = useState("");
    const [addiction, setAddiction] = useState("");
    const [goal, setGoal] = useState("");

    const ageRanges = ["13 to 17","18 to 24", "25 to 34", "35 to 50", "50 and above"];
    const genders =["Male", "Female", "Others"];
    const addictions =["Smoking", "Vaping", "Fap", "Alcohol", "None of the above", "More than one of the above"];
    const goals =["Learn new skills regularly", "Strengthen my relationships", "Build a successful career", "Stay fit and healthy", "None of the above", "More than one of the above"];

    const userProfile = {
        age: selectedAge,
        gender: gender,
        addiction: addiction,
        goal: goal,
        timestamp: new Date()
    };

     useEffect(() => {
    if (screen === "run"){
        saveProfile();
        }
    }, [screen]);

    const saveProfile = async () => {
    try {
        await addDoc(collection(db, "profiles"), userProfile);
        console.log("Profile saved!");
    } catch (e) {
        console.error("Error saving profile: ", e);
    }
    };

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
            <button className="gback-btn" onClick={() => setScreen("age") }>⬅️</button>v
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
            <button className="aback-btn" onClick={() => setScreen("gender") }>⬅️</button>
            <p>Do you have any addictions?</p>
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
            <button className="goback-btn" onClick={() => setScreen("addict") }>⬅️</button>
            <p>Select a goal in mind</p>
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

    return(
        <div className="run-screen">
            <button className="rback-btn" onClick={() => setScreen("goal") }>⬅️</button>
            <p>Age: {userProfile.age}</p>
            <p>Gender: {userProfile.gender}</p>
            <p>Addiction: {userProfile.addiction}</p>
            <p>Goal: {userProfile.goal}</p>
            <button className="continue" onClick={() => setScreen("") }>Continue</button>
        </div>
    );
    
}

export default Profile;
