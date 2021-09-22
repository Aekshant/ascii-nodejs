const express = require('express')
const app = express()
app.use(express.json());
 
app.post('/ascii', function (req, res) {
    const str = req.body.name;
    const ascii = []
    for (var i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i));
    ascii.push(str.charCodeAt(i)+1);
    }
res.send(JSON.stringify({"name":str,ascii}))
})
app.post("/reverse",function(req,res){
    let str = req.body.name;

        const myArr = str.split("-");
    rev= String.fromCharCode.apply(null,myArr)
        
    res.send({"values":str,name:rev})
       
        // }

})
 
app.listen(3000)