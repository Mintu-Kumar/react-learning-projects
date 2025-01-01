import { useEffect, useState } from "react";

let CurrentTime = ()=>{
    const [time, setTime] =  useState(new Date());

    useEffect(()=>{
        const intercalId = setInterval(()=>{    
            // setInterval 2 argument leta h 1 method and 2usra interval time
            setTime(new Date())
        },1000)

        return ()=>{
           clearInterval(intercalId);
        }
    },[])
    return <p className="lead">
        This is the current time : {time.toLocaleDateString()} -{""} {time.toLocaleTimeString()}
    </p>
}

export default CurrentTime;