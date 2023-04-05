const express=require('express');
const dbs=require('dbname')

const APIROUTER=express();

APIROUTER.get('/login',(req,res)=>{

      req.render('')
      
})


APIROUTER.post('/login',(req,res)=>{
      var sql = `SELECT * FROM dbs.dbname where phone=? and email=?`;
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
            

        }
      });
})

