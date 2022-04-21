export type profileProps = {
    name: string

}

 const Profile = ({ name }: profileProps) => {

    return (<>
    <h2>Name is {name}</h2>

    </>)

}


export default Profile