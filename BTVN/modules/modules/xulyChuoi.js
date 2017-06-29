var qs = require('querystring');
var fs = require('fs');
var os = require('os');


exports.camelize = function(req, res)
{

    method = req.method;
    if(method == 'GET')
    {
        var nhapHtml = fs.readFileSync('./views/nhap.html');
        res.end(nhapHtml);
    }
    else if(method == 'POST')
    {
        
        var body = '';
        req.on('data', function(data){
            body += data;
        });

        req.on('end', function(){
            var body_data = qs.parse(body);
            var chuoi = body_data.chuoi;
            console.log(chuoi);
            
            
          function camelize(str) {
                return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
                }).replace(/\s+/g, '');
            }

            var camelized = camelize(chuoi);

            res.end(camelize(camelized));

        });
    }
    

}

exports.boDau_TiengViet = function(req, res)
{
    method = req.method;
    if(method == 'GET')
    {
        var nhapTV = fs.readFileSync('./views/nhapTV.html');
        res.end(nhapTV);
    }
    else if(method == 'POST')
    {
        var body = '';
        req.on('data', function(data){
            body += data;
        });

        req.on('end', function(){
            var body_data = qs.parse(body);
            var chuoiTV = body_data.chuoiTV;
            console.log(chuoiTV);


            function bodauTiengViet(str) {
                str = str.toLowerCase();
                str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                str = str.replace(/đ/g, "d");
                return str;
            }

            var bdTV = bodauTiengViet(chuoiTV);


            res.end(bdTV);
        })
    }   
}

exports.friendlyURL = function(req, res)
{
    method = req.method;

    if(method == 'GET')
    {
        var urlHTML = fs.readFileSync('./views/nhapURL.html');
        res.end(urlHTML);
    }
    else if(method == 'POST')
    {
        var body = '';

        req.on('data', function(data){
            body += data;
        });

        req.on('end', function(){
            var body_data = qs.parse(body);
            // console.log(body_data);
            var chuoi = body_data.chuoi;
            
            function friendly_URL(str) {
                str = str.toLowerCase();
                str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
                str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
                str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
                str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
                str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
                str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
                str = str.replace(/đ/g, "d");

                // tìm và thay thế các kí tự đặc biệt trong chuỗi sang kí tự 
                str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
                str= str.replace(/-+-/g,"-");
                str= str.replace(/^\-+|\-+$/g,""); 
                    
               

                return str;
            }

            var chuoiMoi = friendly_URL(chuoi);

            res.end(chuoiMoi);
        })



    }
}