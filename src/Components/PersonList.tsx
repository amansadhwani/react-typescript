import { nameProps } from "./Person.types"

type personListProps = {
    // name: {
    //     first: string,
    //     last: string
    // }[]
    name:nameProps[]

}
const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.name.map((item, index) => {
                return <h2 key={index}>{item.first} {item.last}</h2>
            })}

        </div>
    )
}

export default PersonList