const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
        console.log(this.app.mysql, "mysql")
        const user = await this.app.mysql.get('user');        
        console.log(uid, user);
        return { user };
    }
}

module.exports = UserService;