const Tweet = require("./db");

exports.addPost = async (req,res) => {

    const post = req.body;
    const transaction = await Tweet.create(post);
    
    return res.status(201).json({
        success: true,
        data: transaction,
    });
}