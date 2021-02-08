import { useContext, useState } from "react";
import UseContext , {UserState} from "../store";

function ConsumerComponant(){

    const user = useContext(UseContext);
    return (
        <>
            <div>firstName : {user.firstName}</div>
            <div>lastName : {user.lastName}</div>
        </>
    );

}
function UseContextComponant(){
    const [user, setuser] = useState<UserState>({
        firstName:"zineb",
        lastName:"waai"
    });
    return (
        <UseContext.Provider value={user}>
            <ConsumerComponant />
            <button onClick={() => setuser({
                firstName:"mama",
                lastName:"baba"
            })}>Change</button>
        </UseContext.Provider>
    );
}

export default UseContextComponant;