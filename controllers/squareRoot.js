const axios = require('axios');

exports.squareRoot = async (req,res,next) => {
    try{
        const gate = await axios.get(`https://gxxph4h9l6.execute-api.us-east-1.amazonaws.com/default/front_end_hiring?input=${req.params.num}`)
                                .then(res => {
                                    console.log(res.data);
                                    return res.data;
                                })
                                .catch(err => console.log(err))
        return res.status(200).json({
                        root:gate
                    });
    }
    catch (err){
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}