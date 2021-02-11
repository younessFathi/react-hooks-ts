import { useEffect, useState } from "react";
import { Beverage } from '../model/Beverage';

function useFetchData<Payload>(url: string) : {data: Payload | null , done: boolean}{
    const [data, setdata] = useState<Payload | null>(null);
    const [done, setdone] = useState(false);

    useEffect(() => {
        fetch(url)
          .then(resp=> resp.json())
          .then((d: Payload)=> {
            setdata(d);
            setdone(true);
          });
    }, [url]);
    return {
        data,
        done
    };
}
function UseCustomHookComponant(){
    const {data , done} = useFetchData<Beverage[]>("/tab-list.json");
    return (
        <div>
            { done && (
                <img alt="Beverage logo" src={data![0].logo} />
            )
            }
        </div>
    );
}
export default UseCustomHookComponant;