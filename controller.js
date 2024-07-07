import post from './schema.js'

export const createpost=async(req,res)=>{
    try {
        const postData=new post(req.body);
        if(!postData){
            return res.status(404).json({message:"post data not found"})
        }
        const saveData=await postData.save()
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}


export const posts=async(req,res)=>{
    try {
        const page=parseInt(req.query.page) || 1;
        const perpage=3;
        const totalposts= await post.countDocuments();
        const totalpage=Math.ceil(totalposts/perpage)

        if(page>totalpage){
            res.status(404).json({message:"page is not found"})
            
        }
        const posts=await post.find()
        .skip((page-1)*perpage)
        .limit(perpage)
        .exec();

        res.status(200).json({posts,totalpage,page})
    } catch (error) {
        res.status(500).json({error:error})
    }

}