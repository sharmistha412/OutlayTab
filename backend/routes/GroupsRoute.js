const express= require("express")
const router = express.Router();
const db=require("../db/db")


router.get("/",(req,res)=>{
    db.query("SELECT * FROM Groups;",(err,results)=>{
        if(err)
        throw err;
        res.send(results);
    })    
})

router.post("/",async (req,res)=>{
    const qry= "INSERT INTO Groups (GroupName) VALUES (?)";
    const {GroupName,UserList}=req.body;
    let groupId=await db.query(qry,[GroupName],(err,result)=>{
        if(err)
        {
        throw err;
        }
        console.log(result);
        return result.insertId;
    })

    console.log(groupId)
    // const qry2="INSERT INTO UsersGroups (User_Id,Group_Id) Values (?,?)";
    // for(let i=0;i<UserList.length;i++)
    // {
    //     db.query(qry2,[UserList[i],groupId],(err,result)=>{
    //         if(err)
    //         throw err;
    //         console.log(result);
    //     })
    // }
    res.send("DONE");
})

module.exports = router;