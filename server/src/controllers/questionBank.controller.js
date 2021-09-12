const QuestionModel = require('../models/questionBank.model')

// get all question list
exports.getQuestionList = (req, res) => {
  QuestionModel.getAllQuestion((err, questionResult) => {
    if (err) res.send(err)
    res.send(questionResult)
  })
}

// get question by tag
exports.getQuestionByTag = (req, res) => {
  QuestionModel.getQuestionByTag(req.params.search, (err, qry) => {
    if (err) res.send(err)
    res.send(qry)
  })
}

// add new question
exports.createNewQuestion = (req, res) => {
  const questionReqData = new QuestionModel(req.body)
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' })
  } else {
    QuestionModel.addQuestion(questionReqData, (err, question) => {
      if (err) res.send(err)
      res.json({
        status: true,
        message: 'Question added Successfully',
      })
    })
  }
}

// Delete Question

exports.deleteQuestion = (req, res) => {
  QuestionModel.deleteQuestion(req.params.id, (err, question) => {
    if (err) res.send(err)
    res.json({ success: true, message: 'Question deleted successully!' })
  })
}
