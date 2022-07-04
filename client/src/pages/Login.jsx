import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {


    let [email, setEmail ] = useState("")
    let [pwd, setPwd ] = useState("")

    let handleSubmit = (e)=>{
      e.preventDefault()
      console.log(email, pwd)
      setEmail("")
      setPwd("")
    }


    return <div className="p-4 lg:p-40 grid grid-cols-1 lg:grid-cols-2 ">
      <div className="mb-8">
        <h1 className="">Dove Messager</h1>
        <h2>Login</h2>
      </div>
      <div className="">
        <form className="mb-4" onSubmit={(e)=>handleSubmit(e)} >
          <label htmlFor="email">Email :</label>
          <input id="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="border w-full rounded mb-4" type="email" />
          <label htmlFor="password">Password :</label>
          <input id="password" onChange={(e)=>setPwd(e.target.value)} value={pwd} className="border w-full rounded mb-4" type="password" />
          <button className="px-4 py-2 border">Login</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
};

export default Login;
