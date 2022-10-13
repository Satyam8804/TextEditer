import React from 'react'

export default function AboutUs(props) {
//      const [btnText, setBtnText] = useState("Enable Dark Mode")
//     const [myStyle, setMyStyle] = useState({
//         color:'black',
//         backgroundColor:'white'
//     })

//     const ToggleState=()=>{
//         if (myStyle.color =='black') {
//          setMyStyle({
//                 color:'white',
//         backgroundColor:'rgba(0,0,0,.84)'
//             })
//             setBtnText("Enable Light Mode")
//         }
//         else{
//             setMyStyle({
//                 color:'black',
//                 backgroundColor:'white'
//             })
//             setBtnText("Enable Dark Mode")
//         }
//     }
   
  return (

    <>
    {/* <div style={myStyle} > */}
    <div className='container my-4'id='area' >
     <h1>About Us</h1>   
    <p>
    <strong>This is the first item's accordion body.</strong> 
    It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. 
    These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions.
     You can modify any of this with custom CSS or overriding our default variables. 
     It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, 
     though the transition does limit overflow.
     </p>
    </div>
    
    {/* <div className='container my-3'>
    <button className="btn btn-primary " onClick={ToggleState}>{btnText}</button>
    </div> */}
    {/* </div> */}
   
    </>
  )
}
