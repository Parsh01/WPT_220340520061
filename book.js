const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const sql= require('mysql2');
app.use(express.static('abc'));

const con=sql.createConnection({
    host: 'localhost',
    user: 'Parsh',
    password: 'Parsh',
    database: 'Pankaj',
	port:3306
})




app.get('/obj', function (req, res) {
    
	
        // console.log("reading input " + req.query.xyz);
		
    	// var xyz ={ v1:37, v2:35};

		// res.send(xyz);
//         con.query('insert into book ? ? ?',[bookid,bookname,price],(req,res)=>{
//     if(err){
//         console.log("data is not addede"+err);
//     }else{
//         if(XPathResult.affectedrows >0){
//             console.log("data is  addede"+XPathResult.status);
//         }
        

//     }
//     res.send();
//     res.end;
//  })

		});













app.listen(800,function(){
    console.log('server started 800')
});