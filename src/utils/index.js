const mapDBToModelAlbum = ({ id, name, year }) => ({ id, name, year });

const mapDBToModelSong = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
});

const mapDBToModelUsers = ({
  id, username, password, fullname,
}) => ({
  id,
  username,
  password,
  fullname,
});

const mapDBToModelPlaylist = ({
  id, name, owner,
}) => ({
  id, name, owner,
});

const mapDBToModelPlaylistSongs = ({
  id,
  playlist_id,
  song_id,
}) => ({
  id,
  playlistId: playlist_id,
  songId: song_id,
});

module.exports = {
  mapDBToModelAlbum,
  mapDBToModelSong,
  mapDBToModelUsers,
  mapDBToModelPlaylist,
  mapDBToModelPlaylistSongs,
};
