/*Author Akhil*/
var mysql= require('mysql');
var connection =mysql.createConnection({
    host : '****',
    user: '***',
    password: '****',
    port:3306,
    database: 'csi_reg'
});
connection.connect(function(err){
    if(err){
        console.error('error in connection');//+err.stack
        return;
    }
    console.log("connected to DB");
});
module.exports=connection;
