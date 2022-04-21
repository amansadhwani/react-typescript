type HeadingProps = {
    children:String
}
const Heading = (props:HeadingProps) => {
    return (
        <div>
           {props.children}
        </div>
    )
}

export default Heading;