import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import pizza from "./pizza.png"
export default function Tile({title,subtitle,status,imageSource}) {
   
    const navigate = useNavigate();
    function makedivClickable(){
        navigate("/restaurants")
    }

    return (
        <>
             
         <div onClick={makedivClickable} className='  rounded-2xl bg-white shadow-xl'>
          
            <div className='mx-3 my-3'>
            <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>{title}</h1>
            <h1 className='uppercase text-sm text-slate-500 font-semibold'>{subtitle}</h1>

            <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>{status}</span>
      
            </div>
            <img className='h-[70px] float-right ' src={imageSource}></img>
            {/* <img className='h-[70px] float-right ' src={imageSource}></img> */}
          
            </div>

        </>
    )
}
// return (
//     <>
         
//         <div className='  rounded-2xl bg-white shadow-xl'>
//         <Link to={"/restaurants"}>
//         <div className='mx-3 my-3'>
//         <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>Food Delivery</h1>
//         <h1 className='uppercase text-sm text-slate-500 font-semibold'>FOODIE WEEKENDS</h1>

//         <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>live Now</span>
  
//         </div>
//         <img className='h-[70px] float-right ' src={pizza}></img>
//         </Link> 
//         </div>
       
//         <div className=' rounded-2xl bg-white  shadow-xl'>
//         <Link to={"/restaurants"}>
//         <div className='mx-3 my-3'>
//         <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>Food Delivery</h1>
//         <h1 className='uppercase text-sm text-slate-500 font-semibold'>FOODIE WEEKENDS</h1>

//         <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>live Now</span>
  
//         </div>
//         <img className='h-[70px] float-right ' src={pizza}></img>
//         </Link> 
//         </div>
        
//         <div className=' rounded-2xl bg-white bg-white shadow-xl'>
//         <Link to={"/restaurants"}>
//         <div className='mx-3 my-3'>
//         <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>Food Delivery</h1>
//         <h1 className='uppercase text-sm text-slate-500 font-semibold'>FOODIE WEEKENDS</h1>

//         <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>live Now</span>
  
//         </div>
//         <img className='h-[70px] float-right ' src={pizza}></img>
//         </Link> 
//         </div>
        
        
//         <div className=' rounded-2xl bg-white shadow-xl '>
//         <Link to={"/restaurants"}>
//         <div className='mx-3 my-3'>
//         <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>Food Delivery</h1>
//         <h1 className='uppercase text-sm text-slate-500 font-semibold'>FOODIE WEEKENDS</h1>

//         <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>live Now</span>
  
//         </div>
//         <img className='h-[70px] float-right ' src={pizza}></img>
//         </Link> 
//         </div>
 
//     </>
// )

// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import pizza from "./pizza.png"
// export default function Tile() {
   
//     const navigate = useNavigate();
//     function makedivClickable(){
//         navigate("/restaurants")
//     }

//     return (
//         <>
             
//              <div onClick={makedivClickable} className='  rounded-2xl bg-white shadow-xl'>
//             <Link to={"/restaurants"}>
//             <div className='mx-3 my-3'>
//             <h1 className='uppercase font-extrabold font-bold text-slate-700 text-lg'>Food Delivery</h1>
//             <h1 className='uppercase text-sm text-slate-500 font-semibold'>FOODIE WEEKENDS</h1>

//             <span className=' uppercase bg-gradient-to-r from-orange-100 rounded-md px-2 font-semibold text-sm bold text-orange-500'>live Now</span>
      
//             </div>
//             <img className='h-[70px] float-right ' src={pizza}></img>
//             </Link> 
//             </div>

//         </>
//     )
// }