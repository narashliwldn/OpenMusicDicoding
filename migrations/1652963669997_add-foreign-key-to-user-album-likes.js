exports.up = (pgm) => {
  pgm.addConstraint('user_album_likes', 'fk_user_album_likes.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
  pgm.addConstraint('user_album_likes', 'fk_user_album_likes.albumId_albums.id', 'FOREIGN KEY("albumId") REFERENCES albums(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('user_album_likes', 'fk_user_likes.user_id_users.id');
  pgm.dropConstraint('user_album_likes', 'fk_user_album_likes.albumId_albums.id');
};
