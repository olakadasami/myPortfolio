import { Link } from "react-router-dom"

const Button = ({ children, href }) => {
    return (
        <Link className="inline-block px-12 hover:-translate-y-1 duration-300 border w-fit transition py-4 rounded text-center border-gray-200" to={href}>
            {children}
        </Link>

    )
}

export default Button