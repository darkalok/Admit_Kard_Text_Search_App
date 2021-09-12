var dbConn = require('../../config/db.config')

var QuesBank = function (question) {
  this.ques = question.ques
  this.topic = question.topic
  this.tags = question.tags
}

// get all question
QuesBank.getAllQuestion = (result) => {
  dbConn.query(
    'SELECT @a:=@a+1 as serial_number, questions.* FROM questions join (SELECT @a:= 0) a',
    (err, res) => {
      if (err) {
        console.log('Error while fetching questions', err)
        result(null, err)
      } else {
        console.log('Question fetched successfully')
        result(null, res)
      }
    }
  )
}

// get question by tag
QuesBank.getQuestionByTag = (ques, result) => {
  dbConn.query(
    'SELECT * FROM questions WHERE tags LIKE ?',
    '%' + ques + '%',
    (err, res) => {
      if (err) {
        console.log('Error while fetching question by id', err)
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}

// add new questions
QuesBank.addQuestion = (ques, result) => {
  dbConn.query('INSERT INTO questions SET ?', ques, (err, res) => {
    if (err) {
      console.log('Error while inserting data')
      result(null, err)
    } else {
      console.log('question created successfully')
      result(null, res)
    }
  })
}

// delete question
QuesBank.deleteQuestion = (id, result) => {
  dbConn.query('DELETE FROM questions WHERE id=?', [id], (err, res) => {
    if (err) {
      console.log('Error while deleting the question')
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = QuesBank
