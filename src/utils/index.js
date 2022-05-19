const mapDBToModelAlbum = ({
  id, name, year, cover,
}) => ({
  id, name, year, coverUrl: cover,
});

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
  id, name, owner, username,
}) => ({
  id, name, owner, username,
});

const mapDBToModelPlaylistSongs = ({
  id,
  playlist_id,
  song_id,
  username,
}) => ({
  id,
  playlistId: playlist_id,
  songId: song_id,
  username,
});

module.exports = {
  mapDBToModelAlbum,
  mapDBToModelSong,
  mapDBToModelUsers,
  mapDBToModelPlaylist,
  mapDBToModelPlaylistSongs,
};
