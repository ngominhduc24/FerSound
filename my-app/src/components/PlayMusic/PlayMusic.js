import { Songs } from "./Context";
import DataSongs from "../../data/songs.json";
import { useState } from "react";
import Playing from "./Playing";
import DetailSong from "./DetailSong";
import ListSongs from "./ListSongs";
import "./css/PlayMusic.css";
import Navbar from "./Navbar";

export default function PlayMusic() {
    const [song, setSong] = useState(DataSongs[0])

    const handleSetSong = (idSong) => {
        const song = DataSongs.find(song => song.id === idSong)
        if (!song)
            setSong(DataSongs[0])
        else
            setSong(song)
    }
    return (
        <div className="App">
            <Navbar />
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <DetailSong />
                    <ListSongs />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}
