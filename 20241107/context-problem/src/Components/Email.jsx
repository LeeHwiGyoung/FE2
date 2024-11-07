import { useContext } from "react";
import { UserContext } from "../Context/UserContext"

export default function Email() {
    const {userData} = useContext(UserContext);
    return (
        <strong>{userData.email}</strong>
    )
}