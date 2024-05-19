import { useLogoutFunction } from "@propelauth/react";

const LogoutButton = () => {
    const logout = useLogoutFunction();
    return <button onClick={() => logout(false)}>Logout</button>;
}

export default LogoutButton;