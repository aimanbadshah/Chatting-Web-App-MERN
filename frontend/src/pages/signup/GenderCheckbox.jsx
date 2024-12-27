const GenderCheckbox = () => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer`}>
            <span className='lable-text text-gray-950'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900'/>
        </label>
      </div>
      <div className='form-control'>
      <label className={`label gap-2 cursor-pointer`}>
            <span className='lable-text text-gray-950'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox



// STARTER CODE FOR THE GENDER CHECKBOX COMPONENT
// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//       <div className='form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//             <span className='lable-text text-gray-950'>Male</span>
//             <input type="checkbox" className='checkbox border-slate-900'/>
//         </label>
//       </div>
//       <div className='form-control'>
//       <label className={`label gap-2 cursor-pointer`}>
//             <span className='lable-text text-gray-950'>Female</span>
//             <input type="checkbox" className='checkbox border-slate-900'/>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckbox
