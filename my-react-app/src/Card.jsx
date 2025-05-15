import { useState } from "react";

function Card(){
    const [color, setColor] = useState("#FFFFFF");

    function changeColor(event){
        setColor(event.target.value);
    }

    return(    
        <div>
            <h1>Color Picker</h1>
            <div style={{backgroundColor: color}} className="set-color">
                <p>
                    Selected Color: {color}
                </p>
            </div>

            <div className="set">
                <p>Select a Color:</p>
                <input type="color" onChange={changeColor}></input>
            </div>

        </div>
    );
}

export default Card