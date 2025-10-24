import { Navigate } from "react-router-dom";
import { useAuth } from "../service/authContext";

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return null; // o un loader/spinner
    if (!user) return <Navigate to="/login" replace />;

    return children;
}
