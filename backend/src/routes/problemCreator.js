// const express = require('express');
// const problemRouter = express.Router();
// const adminMiddleware = require('../middleware/adminMiddleware');
// const {createProblem, updateProblem, deleteProblem, getProblemById, getAllProblem, solvedAllProblembyUser, submittedProblem} = require('../controllers/userProblem');
// const userMiddleWare = require('../middleware/userMiddleWare');



// // create API
// problemRouter.post("/create", adminMiddleware, createProblem);
// problemRouter.put("/update/:id", adminMiddleware, updateProblem);
// problemRouter.delete("/delete/:id", adminMiddleware, deleteProblem);


// problemRouter.get("/problemById/:id", userMiddleWare, getProblemById);
// problemRouter.get("/getAllProblem", userMiddleWare, getAllProblem);
// problemRouter.get("/problemSolvedByUser", userMiddleWare, solvedAllProblembyUser);
// problemRouter.get("/submittedProblem/:pid", userMiddleWare, submittedProblem);


// module.exports = problemRouter;

// fetch
// update
// delete



















const express = require('express');

const problemRouter =  express.Router();
const adminMiddleware = require("../middleware/adminMiddleware");
const {createProblem,updateProblem,deleteProblem,getProblemById,getAllProblem,solvedAllProblembyUser,submittedProblem} = require("../controllers/userProblem");
const userMiddleware = require("../middleware/userMiddleware");


// Create
problemRouter.post("/create",adminMiddleware ,createProblem);
problemRouter.put("/update/:id",adminMiddleware, updateProblem);
problemRouter.delete("/delete/:id",adminMiddleware, deleteProblem);


problemRouter.get("/problemById/:id",userMiddleware,getProblemById);
problemRouter.get("/getAllProblem",userMiddleware, getAllProblem);
problemRouter.get("/problemSolvedByUser",userMiddleware, solvedAllProblembyUser);
problemRouter.get("/submittedProblem/:pid",userMiddleware,submittedProblem);


module.exports = problemRouter;