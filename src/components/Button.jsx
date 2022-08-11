import { Link } from "react-router-dom"

const Button = ({ children, href }) => {
    return (
        <div className="px-12 hover:-translate-y-1 duration-300 border w-fit transition py-4 rounded text-center border-gray-200">
            <Link className="" to={href}>
                {children}
            </Link>
        </div>
    )
}

export default Button