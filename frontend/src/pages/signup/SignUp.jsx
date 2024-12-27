import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3x1 font-semibold text-center text-gray-300'>
            Sign Up
            <span className="text-blue-500"> ChatApp</span>
            </h1>
            <form> 
                <label className="label p-2">
                <span className="text-base label-text text-gray-950">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="w-full input input-bordered h-10" />
                <label className="label p-2">
                <span className="text-base label-text text-gray-950">Username</span>
                </label>
                <input type="text" placeholder="Username" className="w-full input input-bordered h-10" />
                <label className="label p-2">
                <span className="tex-base label-text text-gray-950">Password</span>
                </label>
                <input type="password" placeholder="Set Password" className="w-full input input-bordered h-10" />
                <label className="label p-2">
                <span className="tex-base label-text text-gray-950">Confirn Password</span>
                </label>
                <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                <GenderCheckbox />
                <center><a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-950">Already have an account?</a></center>
                <div>
                    <button className="btn btn-block btm-sm mt-2 border border-slate-700">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp


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
//                 <center><a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-950">Already have an account?</a></center>
//                 <div>
//                     <button className="btn btn-block btm-sm mt-2 border border-slate-700">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp
