const express = require('express')
const router = express.Router()

const questionBankController = require('../controllers/questionBank.controller')

// get all questions
router.get('/', questionBankController.getQuestionList)

// get question by tag
router.get('/searchRecord/:search', questionBankController.getQuestionByTag)

// add new question
router.post('/', questionBankController.createNewQuestion)

// // delete question
router.delete('/:id', questionBankController.deleteQuestion)

module.exports = router
