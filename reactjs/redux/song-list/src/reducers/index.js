import { combineReducers } from "redux";

const SongReducers = () => {
  return [
    {
      id: 1,
      title: "Song 1",
      duration: "3:30",
    },
    {
      id: 2,
      title: "Song 2",
      duration: "4:30",
    },
    {
      id: 3,
      title: "Song 3",
      duration: "5:30",
    },
    {
      id: 4,
      title: "Song 4",
      duration: "6:30",
    },
    {
      id: 5,
      title: "Song 5",
      duration: "5:00",
    },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload.song;
  } else {
    return selectedSong;
  }
};

export default combineReducers({
  songs: SongReducers,
  selectedSong: SelectedSongReducer,
});
