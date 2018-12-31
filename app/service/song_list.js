const Service = require('egg').Service;

 class SongListService extends Service {
    async find(uid) {
        const songList = await this.app.mysql.get('SongList');
        return { songList };
    }
}

module.exports = SongListService;