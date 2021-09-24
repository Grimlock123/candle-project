import { useState } from "react";
// import { useEffect } from "react";
import { Button } from "reactstrap";
import CandleCard from "./CandleCard";

function CandleApi() {
    const [testApi, setTestApi] = useState([])

    const test = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(json => {setTestApi(json);})
    }
    
    // useEffect(()=>{
    //     test();
    // },[]);

    return(
        <>
        <Button onClick={test}>hi</Button>
        <div>
            { 
                testApi.map((api) =>(
                    <>
                    <li key={api.id}>{api.title}</li>
                    <CandleCard title={api.title}/>
                    </>
                    )
                )
            }
        </div>
        </>
        
    )
    
}
export default CandleApi;