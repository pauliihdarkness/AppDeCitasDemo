import { NavLink } from "react-router-dom";
import "./CustomLink.css";

export default function CustomLink({ to = "/", children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `custom-link ${isActive ? 'active' : ''}`
            }
        >
            {children}
        </NavLink>
    );
}
