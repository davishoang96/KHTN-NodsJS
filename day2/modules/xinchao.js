var qs = require("querystring");
var fs = require("fs");

// exports.inXinChao = function(req, res){
//     method = req.method;
//     console.log(method);
    
//     if(method == 'GET')
//     {
//         console.log('html rendered');
//         var htmlPage = fs.readFileSync('./helloNguoiDung.html');
//         res.end(htmlPage);
//     }  else if(method == 'POST')
//     {
//         var htmlPage = fs.readFileSync('./helloNguoiDung.html');

//         var body = '';
//         req.on('data', function(data){
//             body += data;
//         });

//         req.on('end', function(){
//             dataBody = qs.parse(body);
//             console.log(dataBody);

//             res.write('Xin chao ' + dataBody.hoten);

//             res.end();
//         });

//     }
// }

exports.inXinchao2 = function(req, res){
    var nguoiDung = {
        hoten: 'Hoang Viet',
        nickname: 'crystark',
        password: '123321'
    };

    var htmlPage = fs.readFileSync('./helloDangNhap.html');

    method = req.method;
    console.log(method);
    if(method == 'GET')
    {
        
        res.end(htmlPage);
    } 
    else if(method == 'POST')
    {
        
        

        var body = '';
        req.on('data', function(data){
            body += data;
        });

        req.on('end', function(){
            var dataBody = qs.parse(body);
            console.log(dataBody);

            if(dataBody.nickname == nguoiDung.nickname && dataBody.password == nguoiDung.password)
            {
               
                res.write('Xin chao ' + dataBody.hoten + 'nickname la ' + dataBody.nickname);
                res.end();
            } 
            else 
            {
                
                res.write('Nickname hoac password ko dung');
                console.log('not ok');
            }
            

            res.end();
            
        });
    } else 
    res.end('error');
}