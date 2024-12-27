const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
          Login
        <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-950">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="tex-base label-text text-gray-950">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
          </div>
           <center><a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-950">{"Don't"} have an account?</a></center>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


//STARTER CODE FOR THE LOGIN COMPONENT
// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//           Login
//         <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-gray-950">Username</span>
//             </label>
//             <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//           </div>
          
//           <div>
//             <label className="label p-2">
//               <span className="tex-base label-text text-gray-950">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//           </div>
//            <center><a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-950">{"Don't"} have an account?</a></center>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
