import { useState } from "react";

const RoomTile = (props) => {

    let [lastMsg, setLastMsg] = useState(props.lastMsg)

    return ( <div className="p-4 flex flex-col cursor-pointer hover:bg-blue-50">
        <h5 className="">{props.userName}</h5>
        <p className="">{props.lastMsg}</p>
    </div> );
}
 
export default RoomTile;