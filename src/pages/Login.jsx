import { useState } from "react"
import { loginDetails } from "../utils/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const roleArr = ["Student", "Mentor", "Admin"];
    const [activeRole, setActiveRole] = useState('Student');
    const [uid, setUid] = useState(null);
    const [password, setPassword] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (activeRole === "Student") {
            if (loginDetails(uid, password)) {
                navigate('/student');
            }
            else {
                alert("Incorrect UID or password");
            }
        }
    }
    
    return (
        <section className="w-full min-h-screen flex justify-center items-center">
            <form className="border rounded-2xl border-white/20 px-5 py-5 flex flex-col gap-5 w-120">
                <div>
                    <h1 className="font-semibold text-3xl">
                        Welcome Back
                    </h1>
                    <p className="text-gray-400 font-semibold text-sm">
                        Sign in to your account
                    </p>
                </div>
                <div>
                    <h3 className="text-start font-medium px-1 text-gray-200">Role</h3>
                    <div className="flex gap-3">
                        {
                            roleArr.map((role, index) => (
                                <div onClick={() => setActiveRole(role)} key={index} className={`${role === activeRole ? "bg-white text-black " : "border-white/20 hover:bg-white/5"} border rounded-md px-3 py-2 text-sm cursor-pointer duration-100`}>{role}</div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h3 className="text-start font-semibold px-1 py-2 text-white/80"> {(activeRole === "Student") ? "University UID" : "Email"}</h3>
                    <div className="flex gap-3">
                        <input onChange={(e) => setUid(e.target.value)} className="border rounded-xl border-white/20 p-3 text-sm w-full" type="text"
                            placeholder={(activeRole === "Student") ? "Enter your University UID" : "name@example.com"} required />
                    </div>
                </div>
                <div>
                    <h3 className="text-start font-semibold px-1 py-2 text-white/80">Password</h3>
                    <div className="flex gap-3">
                        <input required onChange={(e) => setPassword(e.target.value)} className="border rounded-xl border-white/20 p-3 font-bold w-full" type="password" placeholder="⋅⋅⋅⋅⋅⋅⋅⋅" />
                    </div>
                </div>
                <div>
                    <button onClick={(e) => handleSubmit(e)} type="submit"
                        className="border bg-white text-black rounded-xl border-white/20 p-2 text-sm font-semibold cursor-pointer hover:bg-white/85 hover:scale-105 active:scale-100 duration-100">
                        Submit in
                    </button>
                </div>
                <div>
                    <p className="text-gray-400 font-semibold text-xs">
                        Use your role-based credentials. Contact admin if you need help.
                    </p>
                </div>
            </form>
        </section>
    )
}

export default Login
