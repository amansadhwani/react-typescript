type statusProps = {
    status: 'loading' | 'success' | 'abc'

}
const Status = (props: statusProps) => {
    let message;
    if (props.status === 'loading')
        message = 'Loading....'
    else if (props.status === 'success')
        message = 'Data fetched sucessfully'
    else
        message = 'Error fetching Data'
    return (
        <div>
           {message}
        </div>
    )
}

export default Status