import { profileProps } from "./Profile"
import Login from "./Login"

type privateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<profileProps> // proptype of profile component
}

const Private = ({ isLoggedIn, Component}: privateProps) => {
    if (isLoggedIn) {
        return <Component name={"aman"} />
    } else {
        return <Login />
    }
}

export default Private