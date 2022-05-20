exports.up = (pgm) => {
  pgm.addTable('user_album_likes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    album_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('user_album_likes', 'unique_user_id_and_album_id', 'UNIQUE(user_id, "albumId")');
};

exports.down = (pgm) => {
  pgm.dropTable('user_album_likes');
};
