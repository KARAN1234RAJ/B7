import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  // console.log(props.songs);
  const songs = props.songs;
  console.log(songs);
  return (
    <div>
      <h1>My Song List</h1>
      <div>
        {songs.map((song) => {
          return (
            <>
              <h2>{song.title}</h2>
              <button onClick={() => selectSong(song)}>songDetails</button>
            </>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
