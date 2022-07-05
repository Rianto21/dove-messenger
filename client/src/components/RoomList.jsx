import RoomTile from "./RoomTile";
import { useState } from "react";

const RoomList = (props) => {
    let [roomList, setRoomList] = useState([])

    return ( <div className="flex flex-col">
        {
            roomList.map((room)=>{
                return <RoomTile userName={room.userName} lastMsg={room.lastMsg}></RoomTile>
            })
        }
    </div> );
}
 
export default RoomList;