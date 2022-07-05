import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
    let [email, setEmail] = useState("");
    let [pwd, setPwd] = useState("");
    const navigate = useNavigate()


    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pwd);
        setEmail("");
        setPwd("");
        navigate("/")
    };

    return (
        <div className="p-4 ">
            <h1 className="my-16 text-3xl font-bold text-center">
                Dove Messager
            </h1>
            <div className="w-full mx-auto md:w-1/2 lg:w-1/4 border rounded-lg p-4">
                <h2 className="mb-8 text-3xl text-center">Register</h2>
                <form className="mb-4" onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="email">Email :</label>
                    <input
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="border w-full rounded mb-2"
                        type="email"
                    />
                    <label htmlFor="password">Password :</label>
                    <input
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        className="border w-full rounded mb-4"
                        type="password"
                    />
                    <button className="px-4 block w-full bg-blue-600 rounded-lg text-white mx-auto py-2 border">
                        Register
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
