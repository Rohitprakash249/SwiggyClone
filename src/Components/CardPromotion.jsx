import React from 'react'

export default function CardPromotion(props) {
    

    return (
        <>
            <div name='parent div for card promotion' className='maindiv'>
               
                <div className='border-2 rounded-xl flex  justify-between items-center  border-orange-400 bg-gradient-to-l from-orange-100 mx-4 my-4 bg-white' name="for card Promotions">
                   <div className='mx-3 my-3' > 
                    <p className='text-[#ff5a01] font-bold uppercase'>Credit card</p>
                    <p className='text-orange-400 uppercase text-sm' >lifetime free, just for you</p>
                
               </div>
                 <img alt='card' className=' block h-[80px] rounded-br-lg z-0 ' src='/card.png'></img>
              
           
                 
                </div>
              
              
            </div>
        </>
    )
}
// return (
//     <>
//         <div name='parent div for card promotion' className='maindiv'>
           
//             <div className='border-2 rounded-xl flex justify-between items-center z-40 border-orange-400 bg-gradient-to-l from-orange-100 mx-4 my-4 bg-white' name="for card Promotions">
//                 <div className='mx-2 my-2'>
//                 <p className='text-[#ff5a01] font-bold uppercase'>Credit card</p>
//                 <p className='text-orange-400' >lifetime free, just for you</p>
//                 </div>
           
//              <img alt='card' className=' block  rounded-br-lg ' src='/card.png'></img>
       
             
//             </div>
          
          
//         </div>
//     </>
// )