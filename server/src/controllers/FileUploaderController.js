// export const fileUpload = (req,res)=>{
//     try{
//         if(req.files.length > 0){
//             return res.status(200).json({status:true, file:req.files, msg:"File uploaded successfully"})
//         }else{
//             return res.status(200).json({status:false, msg:"No files  uploaded"})
//         }
//     }catch(e){
//         return {status:false, error:e.toString()}
//     }
// }