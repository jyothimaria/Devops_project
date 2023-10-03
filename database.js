const mysql = require('mysql');

const connection = mysql.createConnection({
       host : 'db4free.net',
       database : 'devopsproject_1',
       user : 'devops_proj_1',
       password : 'Devops_project_1'


});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }




});

module.exports = connection;