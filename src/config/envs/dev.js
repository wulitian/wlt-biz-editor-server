/**
 * @description dev 配置
 * @author wulitian
 */

module.exports = {
    // mysql 连接配置
    mysqlConf: {
        host: '192.168.220.180',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'wlt_lego_course',
    },
    // mongodb 连接配置
    mongodbConf: {
        host: '192.168.220.180',
        port: '27017',
        dbName: 'wlt_lego_course',
    },

    // redis 连接配置
    redisConf: {
        host: '192.168.220.180',
        port: '6379',
    },
}
