const jwt =require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
        const decoded = jwt.verify(req.cookies.token , process.env.JWT_KEY)
        req.userData= decoded
        next()
    }
    catch(error){
        return res.status(401).json({
            message: 'Login to access this page'
        })
    }
}