var express = require('express')
    , http = require('http')
    , mysql = require('mysql')
    , request = require('request')
    , session = require('express-session')
    , app = express()
    , server = http.createServer(app)
    , bodyParser = require('body-parser')
    , url = require('url')
    , spawn = require("child_process").spawn;
    

    var con = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "789521",
        database: "db_kfc"
    });
    var A = 0;

    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.set('view engine', 'pug');
    app.engine('html', require('ejs').renderFile);
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(session({
        secret: 'ambc@!vsmkv#!&*!#EDNAnsv#!$()_*#@',
        resave: false,
        saveUninitialized: true
    }));


    app.get('/', function(req, res) {
        res.render('login.html');
    });
    



    app.post('/login', function(req,res){
        const body=req.body;
        con.getConnection(function(err,con) {
            if (err) throw err; 
            else {
                var sql = 'SELECT Id FROM IdPwd WHERE Id = "'+body.uid+'"';
                var sql0 = 'SELECT id, curedsent FROM Cured WHERE sentid = "DB"';
                var sql2 = 'SELECT id, curedsent FROM Cured WHERE sentid = "Leven"';
                var sql1 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "DB"';
                var sql3 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "Leven"';
                var sql4 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "DB"';
                var sql5 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "Leven"';
                req.session.user_uid = body.uid
                con.query(sql, function(err, result, fields) {
                    if(result[0].Id=="DBAdmin"){
                        con.query(sql1, function(err, result0, fields) {
                            con.query(sql4, function(err, result1, fields) {
                                res.render('admain',{"result1":result0,"result2":result1});
                            });
                        });
                    }
                    /*
                    else if(result[0].Id=="DBUser"){
                        res.render('write.html');
                    }*/
                    else if(result[0].Id=="DBUser"){
                        con.query(sql0, function(err, result1, fields) {
                            res.render('main',{"result":result1});
                        });
                    }
                    else if(result[0].Id=="LevenAdmin"){
                        con.query(sql3, function(err, result2, fields) {
                            con.query(sql5, function(err, result3, fields) {
                                res.render('admain',{"result1":result2,"result2":result3});
                            });
                        });
                    }
                    /*
                    else if(result[0].Id=="LevenUser"){
                        res.render('write.html');
                    }*/
                    else if(result[0].Id=="LevenUser"){
                        con.query(sql2, function(err, result3, fields) {
                            res.render('main',{"result":result3});
                        });
                    }
                
                
                });
            }
        });   
    });
    app.post('/toWrite', function(req,res){
        res.render('write.html');
    });

    app.post('/toMain',function(req,res){

        if((req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB"))){
            var sql0 = 'SELECT id, curedsent FROM Cured WHERE sentid = "DB"';
            con.query(sql0, function(err, result1, fields) {
                res.render('main',{"result":result1});
            });
        }
            else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
            var sql2 = 'SELECT id, curedsent FROM Cured WHERE sentid = "Leven"';
            con.query(sql2, function(err, result12, fields) {
                res.render('main',{"result":result12});
            });
        }
    });


    app.post('/toLogin', function(req,res){
        delete req.session.user_upwd;
        delete req.session.user_uid;
        res.redirect('/');
    });


    app.post('/toAMain', function(req,res){
        var sql1 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "DB"';
        var sql3 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "Leven"';
        var sql4 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "DB"';
        var sql5 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "Leven"';
        if(req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB")){
            con.query(sql1, function(err, result0, fields) {
                con.query(sql4, function(err, result1, fields) {
                    res.render('admain',{"result1":result0,"result2":result1});
                });
            });
        }
        else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
            con.query(sql3, function(err, result2, fields) {
                con.query(sql5, function(err, result3, fields) {
                    res.render('admain',{"result1":result2,"result2":result3});
                });
            });
        }
    });

    app.get('/toAMain', function(req,res){
        var sql1 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "DB"';
        var sql3 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "Leven"';
        var sql4 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "DB"';
        var sql5 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "Leven"';
        if(req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB")){
            con.query(sql1, function(err, result0, fields) {
                con.query(sql4, function(err, result1, fields) {
                    res.render('admain',{"result1":result0,"result2":result1});
                });
            });
        }
        else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
            con.query(sql3, function(err, result2, fields) {
                con.query(sql5, function(err, result3, fields) {
                    res.render('admain',{"result1":result2,"result2":result3});
                });
            });
        }
    });



    app.post('/toCheck', function(req,res){
        if(req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB")){
            var sql1 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "DB"';
            var sql4 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "DB"';
             con.query(sql1, function(err, result0, fields) {
                            con.query(sql4, function(err, result1, fields) {
                                res.render('check',{"result1":result0,"result2":result1});
                            });
                        });
        }
        else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
            var sql3 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "Leven"';
            var sql5 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "Leven"';
            con.query(sql3, function(err, result2, fields) {
                con.query(sql5, function(err, result3, fields) {
                    res.render('check',{"result1":result2,"result2":result3});
                });
            });
        }
    });

    app.get('/sentdeled',function(req,res){
        
        if(req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB")){
            var sql1 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "DB"';
            var sql4 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "DB"';
            con.query(sql1, function(err, result0, fields) {
                            con.query(sql4, function(err, result1, fields) {
                                res.render('check',{"result1":result0,"result2":result1});
                            });
                        });
        }
        else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
            var sql3 = 'SELECT id, sentid, detecsent FROM Cursed WHERE sentid = "Leven"';
            var sql5 = 'SELECT id, sentid, curedsent FROM Cured WHERE sentid = "Leven"';
            con.query(sql3, function(err, result2, fields) {
                con.query(sql5, function(err, result3, fields) {
                    res.render('check',{"result1":result2,"result2":result3});
                });
            });
        }
    });

    
    app.post('/droptheS',function(req,res){
        var sql="";
        console.log(typeof(req.body.id));
        console.log(req.body.id);
        console.log(req.body.testName);
        if(typeof(req.body.id)=="string"){
            if(req.body.testName[0]==1){
                var sql3 = 'SELECT sentid, detecsent FROM Cursed WHERE id = '+req.body.id+'';
                con.query(sql3, function(err, result2, fields) {
                    var sql5 = 'INSERT INTO Cured(sentid,curedsent) VALUES("'+result2[0].sentid+'","'+result2[0].detecsent+'")'
                    con.query(sql5, function(err, result3, fields) {
                        console.log("메시지 내보내기 완료");
                        var sql7 = 'DELETE FROM Cursed WHERE id = '+req.body.id+'';
                        con.query(sql7, function(err, result4, fields) {
                            
                        });
                    
                    });
                });
            }
        }
        else{
            x=0;
            var del = [];
            for(var i=0 ; i< req.body.testName.length; i++){
                if(req.body.testName[i]==1){
                    console.log(req.body.id[i-x])
                    var sql3 = 'SELECT sentid, detecsent FROM Cursed WHERE id = '+req.body.id[i-x]+'';
                    del.push(req.body.id[i-x]);
                    con.query(sql3, function(err, result2, fields){
                        console.log(result2[0])
                        var sql5 = 'INSERT INTO Cured(sentid,curedsent) VALUES("'+result2[0].sentid+'","'+result2[0].detecsent+'")'
                        con.query(sql5, function(err, result3, fields) {
                            console.log("메시지 내보내기 완료");
                            console.log(del)
                            for(var j=0;j<del.length;j++){
                            sql = "DELETE FROM Cursed WHERE id= "+del[j]+";";
                            
                            console.log(sql);
                            con.query(sql, function(err, result, fields){
                            console.log("메시지 삭제완료");
                            });
                            }
                        });
                    });
                x += 1;
                }
            }
            
        }
        
        res.redirect('/toAMain')
    })


    app.post('/sentdel',function(req,res){
        var sql="";
        console.log(typeof(req.body.id));
        console.log(req.body.id);
        console.log(req.body.testName);
        if(typeof(req.body.id)=="string"){
            if(req.body.testName[0]==1){
                if(req.body.istherecurse[0]==0){
                sql = "DELETE FROM Cured WHERE id= "+req.body.id+";";
                console.log(sql);
                con.query(sql, function(err, result, fields){
                console.log("메시지 삭제완료");
                });
            }
                else if(req.body.istherecurse[0]==1){
                sql = "DELETE FROM Cursed WHERE id= "+req.body.id+";";
                console.log(sql);
                con.query(sql, function(err, result, fields){
                console.log("메시지 삭제완료");
                });
            }
            }
        }
        else{
            v=0;
            for(var i=0 ; i< req.body.testName.length; i++){
                if(req.body.testName[i]==1){
                    if(req.body.istherecurse[i-v]==0){
                    sql = "DELETE FROM Cured WHERE id= "+req.body.id[i-v]+";";
                    v += 1;
                    console.log(sql);
                    con.query(sql, function(err, result, fields) {
                    console.log("메시지 삭제완료");
                });
            }
                else if(req.body.istherecurse[i-v]==1){
                    sql = "DELETE FROM Cursed WHERE id= "+req.body.id[i-v]+";";
                    v += 1;
                    console.log(sql);
                    con.query(sql, function(err, result, fields) {
                    console.log("메시지 삭제완료");
                });
            }
                    
                }
            }
            
        }
        res.redirect('/sentdeled')
        
    })

    app.get('/writedone', function(req, res) {
        if((req.session.user_uid.includes("DB")||req.session.user_uid.includes("db")||req.session.user_uid.includes("Db")||req.session.user_uid.includes("dB"))){
        var sql0 = 'SELECT id, curedsent FROM Cured WHERE sentid = "DB"';
        con.query(sql0, function(err, result1, fields) {
            res.render('main',{"result":result1});
        });
    }
        else if(req.session.user_uid.includes("Leven")||req.session.user_uid.includes("leven")){
        var sql2 = 'SELECT id, curedsent FROM Cured WHERE sentid = "Leven"';
        con.query(sql2, function(err, result12, fields) {
            res.render('main',{"result":result12});
        });
    }
    });

    app.post('/write', function(req,res){
        const body=req.body;
        var A=0;
        con.getConnection(function(err,con) {
            if (err) throw err;
            else{
                if(req.session.user_uid.includes("DB") || req.session.user_uid.includes("Db") || req.session.user_uid.includes("dB") || req.session.user_uid.includes("db")){
                    var sql = 'SELECT * FROM CurseWord'
                    con.query(sql, function(err, result, fields) {
                        for(i in result){
                            if(req.body.msg.includes(result[i].Word)){
                                A = 1;
                                console.log(A);
                            }
                        }
                        if(A == 1){
                            var sql1 = 'INSERT INTO Cursed(sentid,detecsent) VALUES("DB","'+req.body.msg+'")'
                            con.query(sql1, function(err, result, fields) {});
                        }
                        else if(A == 0){
                            var sql2 = 'INSERT INTO Cured(sentid,curedsent) VALUES("DB","'+req.body.msg+'")'
                            con.query(sql2, function(err, result, fields) {});
                        }
                        res.redirect('/writedone')
                    });
                    
                }
                else if(req.session.user_uid.includes("Leven") || req.session.user_uid.includes("leven")){
                    var sql = 'SELECT * FROM CurseWord'
                    curseword = []
                    con.query(sql, function(err, result, fields) {
                        var messages = req.body.msg;
                        console.log(messages);
                        for(i in result){
                            curseword.push([result[i].Word,result[i].Class])
                        }
                        
                        var process = spawn('python',["./hopefullyFinal.py", JSON.stringify(curseword,encoding='utf-8'), JSON.stringify(messages,encoding='utf-8')]);
                        process.stdout.on('data', function (data){
                            var textChunk = data.toString('utf-8');
                            if (err) throw err;
                            
                            else if(textChunk == 1){
                                var sql3 = 'INSERT INTO Cursed(sentid,detecsent) VALUES("Leven","'+req.body.msg+'")'
                                con.query(sql3, function(err, result, fields) {});
                            }

                            else if(textChunk == 0){
                                var sql4 = 'INSERT INTO Cured(sentid,curedsent) VALUES("Leven","'+req.body.msg+'")'
                                con.query(sql4, function(err, result, fields) {});
                            }


                            
                            res.redirect('/writedone')
                        });

                    });
                }
            }
            

        });

       // var sql = 'INSERT INTO MESSAGE(msgno, sender, receiver, message,time)'+
       //         'values ('+A+',"'+req.body.rcv+'","","'+req.body.msg+'","'+req.body.time+'")'

    })

    server.listen(3300, function() {
        console.log('Express server listening on port ' + server.address().port);
    })
