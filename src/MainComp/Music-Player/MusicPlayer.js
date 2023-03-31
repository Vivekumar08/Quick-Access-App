import React,{useState,useEffect} from 'react';
import Player from "./Player/Player";
import "./index.css"

export default function MusicPlayer() {
	const [songs] = useState([
		{
			title: "On N On",
			artist: "Justice",
			img_src: "./images/song-1.jpg",
			src: "./music/on-n-on.mp3"
		},
		{
			title: "Somebody New",
			artist: "Joywave",
			img_src: "./images/song-2.jpg",
			src: "./music/somebody-new.mp3"
		},
		{
			title: "Awake Alive",
			artist: "Skillet ",
			img_src: "./images/song-3.jpg",
			src: "./music/Skillet_Awake_Alive.mp3"
		},
		{
			title: "Somebody New",
			artist: "Joywave",
			img_src: "./images/song-4.jpg",
			src: "./music/somebody-new.mp3"
		}
	]);

	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(0);

	useEffect(() => {
		setNextSongIndex(() => {
			if (currentSongIndex + 1 > songs.length - 1) {
				return 0;
			} else {
				return currentSongIndex + 1;
			}
		});
	}, [currentSongIndex,songs.length]);
	return (
		<div>
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	)
}
