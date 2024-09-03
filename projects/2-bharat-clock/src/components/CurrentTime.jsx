import { useEffect, useState } from "react";

let CurrentTime = ()=>{
    const [time, setTime] =  useState(new Date());

    useEffect(()=>{
        const intercalId = setInterval(()=>{
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