module.exports = {
    app:{
        port: process.env.PORT || 3000
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'docker',
        database: process.env.MYSQL_DATABASE || 'dashboardauth',
    }
};