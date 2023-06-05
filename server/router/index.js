const express = require('express');
const mysql = require("mysql");
const bodyParser = require("express");
const router = express();

// MySQL 연결
const db = mysql.createPool({
    host: "127.0.0.1", // 호스트
    user: "root",      // 데이터베이스 계정
    password: "1234",      // 데이터베이스 비밀번호
    database: "se_test",  // 사용할 데이터베이스
});

// post 요청 시 값을 객체로 바꿔줌
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: true }))

// http://localhost:4001/ 으로 접속 시 응답메시지 출력
router.get('/', (req,res) => {
    res.send('Server Response Success');
})

router.get('/test', (req,res) => {
    res.send({ test : "this is test!!"});
})

router.get('/getSnackListAll', (req,res) =>{
    db.query("select * from snack", (err, data) => {
        if(err) {
            res.send(err)
        }else{
            res.send(data)
        }
    });
})

router.post('/getSnacksByNo', (req, res) =>{
    db.query("Select * From snack where snack_no = ",(err,data) =>{
        if(err) {
            console.log("err");
            res.send(err)
        }else{
            console.log("success");
            res.send(data)
        }
    });
})
router.post('/getSnacksByName', (req, res) =>{
    const sName = req.body.sName;
    db.query("Select * From snack where snk_name like ?", ['%'+sName+'%'],(err,data) =>{
        if(err) {
            res.send(err)
        }else{
            console.log(data)
            res.send(data)
        }
    });
})

router.post('/api/getSnacksByTags', (req, res) =>{
    db.query("Select * From snack",(err,data) =>{
        if(err) {
            console.log("err");
            res.send(err)
        }else{
            console.log("success");
            res.send(data)
        }
    });
})


module.exports = router;