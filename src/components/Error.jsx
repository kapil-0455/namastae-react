import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
            <h1>Oops!!!</h1>
            <h2>Something went wrong!</h2>
            <h3>{err.status}: {err.statusText || err.message}</h3>
        </div>
    );
};

export default Error;