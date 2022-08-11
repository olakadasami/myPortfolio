import { Link } from "react-router-dom"

const Button = ({ children, href }) => {
    return (
        <Link className="px-4 hover:translate-x-4 transition py-2 rounded border-white" to={href}>
            {children}
        </Link>
    )
}

export default Button