
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import RoomTile from "../components/RoomTile";
import {FaEllipsisV} from "react-icons/fa"

const Home = () => {
    let auth = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if (!auth.token) {
            navigate("/login")
        }else{
            
        }
    },[])



    return <div className="grid grid-cols-3">
        <div className="col-span-1-span-1 h-screen   ">
            <div className="flex p-4 border-b bg-white justify-between items-center">
                <div className="rounded-full w-10 h-10 bg-blue-500"></div>
                <div className="p-3 rounded-full cursor-pointer hover:bg-slate-100 text-gray-600"><FaEllipsisV /></div>
            </div>
            <div className="h-full overflow-y-scroll ">
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="askdlasod adajsnd asdasdjasd asdasdjas das dasdas"></RoomTile>
            <RoomTile userName="Ilham Wisnu" lastMsg="tes"></RoomTile>
            </div>
        </div>
        <div className="col-span-2 border-l h-screen ">
            <div className="flex p-4 drop-shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-red-400 "></div>
                <div className="flex flex-col ml-4">
                    <h4 className="font-bold text-xl">Ilham Wisnu</h4>
                </div>
            </div>
        </div>
    </div>
};

export default Home;
