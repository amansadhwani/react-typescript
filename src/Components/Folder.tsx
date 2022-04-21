// type FolderDataProps = {
//     name: string,
//     isFolder: boolean
// }
import React, { useState } from 'react'


export type nameProps = {
    name: string,
    isFolder: boolean,
    items: itemsData[]
}

export type itemsData = {
    name: string,
    isFolder: boolean,
    
}

export type personProps = {
    name: nameProps
}

const Folder = (props: personProps) => {
    const [expand, setExpand] = useState(false)
    if (props.name.isFolder) {
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>folderData
                    {props?.name?.name}
                </span>
                <div style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}>
                    {props?.name?.items.map((item) => {
                        // return <Folder name={item}/>
                        return <>{item.name}</>
                    })}

                </div>
            </div>
        )
                } else {
                    return  <span>
                    {props?.name?.name}
                </span>
                }
}

export default Folder