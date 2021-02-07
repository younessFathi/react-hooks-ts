import { useState } from "react";

function UseStateComponant(){
    const [list , listSet] = useState<number[]>([]);

    return (
        <div>
            <div>
                <button onClick={() => listSet([...list , list.length +1 ])}>Add to array</button>
                {JSON.stringify(list)}
            </div>
        </div>
    );

}

export default UseStateComponant;