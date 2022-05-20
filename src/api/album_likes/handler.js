class AlbumLikesHandler {
  constructor(albumLikesService, albumsService) {
    this._albumLikesService = albumLikesService;
    this._albumsService = albumsService;

    this.postLikeHandler = this.postLikeHandler.bind(this);
    this.getLikesHandler = this.getLikesHandler.bind(this);
  }

  async postLikeHandler(request, h) {
    const { albumId } = request.params;
    const { id: credentialId } = request.auth.credentials;

    await this._albumsService.verifyAlbumId(albumId);

    const likedAlbum = await this._albumLikesService.checkLikeUnlike(credentialId, albumId);

    if (!likedAlbum) {
      const response = h.response({
        status: 'success',
        message: 'Berhasil ditambahkan ke Album yang Disukai',
      });
      response.code(201);
      return response;
    }

    await this._albumLikesService.deleteAlbumLike(credentialId, albumId);

    const response = h.response({
      status: 'success',
      message: 'Dihapus dari Album yang Disukai',
    });
    response.code(201);
    return response;
  }
}

module.exports = AlbumLikesHandler;
