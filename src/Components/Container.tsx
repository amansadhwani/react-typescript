type ContainerProps = {
   styles:React.CSSProperties
}
const Heading = (props:ContainerProps) => {
    return (
        <div style={props.styles} >
          Text container style
        </div>
    )
}

export default Heading;