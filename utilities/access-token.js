
const normalUser = {
    _id: "1", 
usertype: "user"
};

const adminUser = {
    _id: "2",
usertype: "admin"
};

const superadminUser = {
    _id: "3",
usertype: "superadmin"
};

const authorization = "Bearer 2";

function validateUser (usertypes = []){
    return (req, res, next)=>{
        try{
            const token = authorization.split(" ");
    if(token) {
        if(usertypes?.length){
            if(usertypes.includes(user._id)){
            return "200, authenticated successfully, add req.user & next()"
        }else {
            return "401, unauthorised, error()"
        }
        }else{
            return "add req.user & next()"
        }
        
    }else{
        return "400, error, invalid token, error()";
        }
        }catch(err){
            return err;
        }
        
        
    }
}


console.log(validateUser([], superadminUser)());
