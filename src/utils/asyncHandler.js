const asyncHandler = (func) => {
    (err, re, res, next) => {
        Promise.resolve(func(err, re, res, next).catch((error) => next(error)));
    }
}

export {asyncHandler}









// const asyncHandler = (asyncHandler) =>  async (err, req, res, next) => {
//     try {
//         await asyncHandler(err, req, res, next)

//     } catch (error) {
//         res.staus(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
    
// }

// export {asyncHandler}