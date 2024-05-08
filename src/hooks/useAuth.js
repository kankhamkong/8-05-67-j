import { useContext } from "react";
import AuthContext from "../context/AppContext";

export default function useAuth() {
    return useContext(AuthContext);
}