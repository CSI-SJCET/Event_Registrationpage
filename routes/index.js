/*Author Akhil*/
var express = require('express');
var router = express.Router();
const db=require('../connection/db')
const fs=require('fs');
const dbs=require('./dbname')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSI' });
  console.log(next);
});
router.post('/home',(req,res,next)=>{
  console.log(req.body)
  form_name=req.body.name;
  form_email=req.body.email;
  form_phone=req.body.phone;
  form_year=req.body.year;
  form_brach=req.body.batch;
  form_file=req.file.path;
  
   const date=new Date()
  console.log(date)
  const admin=[[req.body.name,req.body.email,req.body.year,req.body.college,req.file.path]]
  console.log(admin)
  var view_sql="select * from dbs.dbname where email=?"
  db.query(view_sql,form_email,function(err,result){
    if(err){
      console.log(err)
    }else{
      if(result.length>0){
            
            console.log(result[0].email)
            const msg='Email id already exist';
            res.render('index',{msg})
      }else
      {
        
        var view_sql="select * from dbs.dbname where mob=?"
        db.query(view_sql,form_phone,function(err,result){
          if(err){
            console.log(err)
          }
          else{

          }
            
          
        })


   
      }
    }
  })





 
    })
module.exports = router;
