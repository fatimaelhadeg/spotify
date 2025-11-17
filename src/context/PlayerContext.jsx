import { createContext ,useRef,useState } from "react";
import { songsData } from "../assets/assets";
const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setTrack] = useState(songsData[0])
    const [playStatus,setPlayStatus] = useState(false);
//1:45


    const contextValue = {
        audioRef,
        seekBg,
        seekBar
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}


export default PlayerContextProvider;