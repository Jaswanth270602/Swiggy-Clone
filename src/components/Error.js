
import {useRouteError} from "react-router-dom";

const ErrorCom=()=>
{
    const err=useRouteError();
    console.log(err)
    return (
        <>
        <h1>Oops , something went wrong !!</h1>
        
        <h1>err code: {err.status} <br/> problem : {err.statusText}</h1>
        </>
    )
}

export default ErrorCom;