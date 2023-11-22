import { ReactEventHandler } from "react"


const Button2 = (props: {children: React.JSX.Element, cl:string, onClick?:ReactEventHandler}) => {
  return (
    <button className={`text-xl rounded-lg p-[6px] ${props.cl} ` } onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export default Button2