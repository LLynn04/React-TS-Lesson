// import React from 'react'

// probs child
// const Button = ({text, varaint}: {text: string; varaint: string}) => {
//     // const {text} = probs;
//   return (
//     <div>
//         {/* <button>{text}</button> */}
//         <button className={varaint}>{text}</button>
//     </div>
//   )
// }

// export default Button

// interface probs
interface Buttontype {
    text: string;
    varaint: "primary" | "secondary" | "accent";
    fontSize: number;
}
const Button = ({text, varaint, fontSize}: Buttontype) => {
  return (
    <div>
      <button style={{fontSize: fontSize}} className={varaint}>{text}</button>
    </div>
  )
}

export default Button


