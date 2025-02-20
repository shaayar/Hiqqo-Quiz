const express = require("express");
const router = express.Router();
const { quizCreate, updateQuiz, deleteQuiz, createQuestion, deleteQuestion } = require("../controllers/quizController");


router.route('/quiz')
    .post(quizCreate);

// Update Quiz Route
router.route('/updateQuiz/:quizId').put(updateQuiz);

router.route('/quizzes/:quizId')
    .delete(deleteQuiz);

router.route('/quizzes/:quizId/questions/:questionId')
    .delete(deleteQuestion);

    router.route('/quizzes/:quizId/questions').post(createQuestion);

module.exports = router;


