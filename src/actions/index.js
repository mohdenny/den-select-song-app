// Action creator
export const selectSong = (song=null) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
