

type GreetProps = {
    name: string,
    messageCount?: number,//// optional props
    isLoggedIn: boolean
}
const Greet = ({name,messageCount,isLoggedIn}: GreetProps) => {
    return (
        <div>
            {!isLoggedIn ? <> Please Login In </> :
                <h2>Welcome {name} TO TYPESCRIPT {messageCount}</h2>
            }
        </div>
    )
}

export default Greet