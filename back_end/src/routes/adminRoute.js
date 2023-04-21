import express from 'express'
const router = express.Router()

router.post('/logIn',async (req,res)=>{
    try {
        console.log("Admin login");
        res.status(200).json({messge:'Admin login'})
    } catch (error) {
        res.status(500).json({messge:'Server Error',error:error})
    }
})

export default router