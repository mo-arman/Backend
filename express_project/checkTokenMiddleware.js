let myToken = "12345"

let checkToken = (req,res,next)=>{

    console.log(req.query.token);
    if(req.query.token==" " || req.query.token == undefined){
        return res.send(
            {
                status:1,
                msg:"please fill the token"
            }
        )
    }
    if(req.query.token == myToken){
        return res.send(
            {
                status:2,
                msg:"Please fill the correct password"
            }
        )
    }
    next();
}

module.exports = {checkToken}


