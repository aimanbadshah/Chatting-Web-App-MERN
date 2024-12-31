import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>
            Sign Up
            <span className="text-green-500"> AHGS</span>
            </h1>
            <form onSubmit={handleSubmit}> 
                <label className="label p-2">
                  <span className="text-base label-text text-gray-950">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" 
                  value={inputs.fullname}
                  onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
                />

                <label className="label p-2">
                  <span className="text-base label-text text-gray-950">Username</span>
                </label>
                <input type="text" placeholder="Username" className="w-full input input-bordered h-10" 
                  value={inputs.username}
                  onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />

                <label className="label p-2">
                  <span className="tex-base label-text text-gray-950">Password</span>
                </label>
                <input type="password" placeholder="Set Password" className="w-full input input-bordered h-10" 
                  value={inputs.password}
                  onChange={(e) => setInputs({...inputs, password: e.target.value})}
                />

                <label className="label p-2">
                  <span className="tex-base label-text text-gray-950">Confirn Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" 
                  value={inputs.confirmPassword}
                  onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                />

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                <div>
                    <button disabled={loading} className="btn btn-block btm-sm mt-2 border border-slate-700">
                      {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                    </button>
                </div>
                <center>
                  <Link to={"/login"} className="text-sm hover:underline hover:text-green-600 mt-2 inline-block text-gray-950" href="#">
                    Already have an account?
                  </Link>
                </center>
            </form>
        </div>
    </div>
  );
};

export default SignUp;


//STARTER CODE FOR THE SIGN UP COMPONENT
// import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//             Sign Up
//             <span className="text-blue-500"> ChatApp</span>
//             </h1>
//             <form> 
//                 <label className="label p-2">
//                 <span className="text-base label-text text-gray-950">Full Name</span>
//                 </label>
//                 <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
//                 <label className="label p-2">
//                 <span className="text-base label-text text-gray-950">Username</span>
//                 </label>
//                 <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
//                 <label className="label p-2">
//                 <span className="tex-base label-text text-gray-950">Password</span>
//                 </label>
//                 <input type="password" placeholder="Set Password" className="w-full input input-bordered h-10" />
//                 <label className="label p-2">
//                 <span className="tex-base label-text text-gray-950">Confirn Password</span>
//                 </label>
//                 <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
//                 <GenderCheckbox />
//                 <div>
//                     <button className="btn btn-block btm-sm mt-2 border border-slate-700">Sign Up</button>
//                 </div>
//                 <center><a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-950">Already have an account?</a></center>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp
