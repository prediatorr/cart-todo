import { useRouteError } from "react-router-dom";//gives data about error

const Error = ()=>{
    const err= useRouteError();
    //const{status,statusText} =err; destructuring
    //console.log(err)
    return (
        <>
            <h1>Oops!</h1>
            <h2>Something wewnt wrong!! </h2>
            <h2>{err.status} page {err.statusText}</h2>
        </>
    )
}

export default Error;