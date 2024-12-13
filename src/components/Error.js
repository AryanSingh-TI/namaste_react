import { useRouteError } from "react-router-dom";
//this is a hook provided by react-router-dom
//it is a convention to have hooks names start with use
//this hook is used to give a detailed explanation of the Error that may occur during routing
const Error = () => {
    const err = useRouteError();
    console.log(err)
    return  (
        <div>
            <h1>
                Oops!!
            </h1>
            <h2>
                Something went wrong
            </h2>
            <h3>
                {err.data}
            </h3>
            <h3>
                {err.status + " " + err.statusText}
            </h3>
        </div>
    );
}

export default Error;