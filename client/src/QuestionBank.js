import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import './style.css'

const PER_PAGE = 7
function QuestionBank() {
  const [search, setSearch] = useState('')
  const [record, setRecord] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [addquestion, setAddquestion] = useState({
    ques: '',
    topic: '',
    tags: '',
  })

  //  Object Destructuring
  const { ques, topic, tags } = addquestion

  const onInputChange = (e) => {
    setAddquestion({ ...addquestion, [e.target.name]: e.target.value })
  }

  // On Page load display all Questions
  const loadQuestions = async () => {
    var response = fetch('http://localhost:5000/api/v1/textSearch')
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setRecord(myJson)
      })
  }
  useEffect(() => {
    loadQuestions()
  }, [])

  //Search Records here
  const searchRecords = () => {
    axios
      .get(`http://localhost:5000/api/v1/textSearch/searchRecord/${search}`)
      .then((response) => {
        setRecord(response.data)
      })

    loadQuestions()
  }

  // Code for add Question

  const submitQuestion = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:5000/api/v1/textSearch/', addquestion)
    alert('Question Added Successfully')

    loadQuestions()
  }

  // Code for Delete the Question
  const deleteQuestion = (questionId) => {
    axios
      .delete(`http://localhost:5000/api/v1/textSearch/${questionId}`)
      .then((result) => {
        loadQuestions()
      })
      .catch(() => {
        alert('Error in the Code')
      })
  }

  // Pagination

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  const currentPageData = record
    .slice(offset, offset + PER_PAGE)
    .map(({ ques, id, serial_number }) => (
      <tr>
        <td col width='20px'>
          {serial_number}
        </td>
        <td>{ques}</td>
        <td col width='20px'>
          {' '}
          <a
            className='text-danger mr-2'
            onClick={() => {
              const confirmBox = window.confirm(
                'Do you really want to delete ' + ques
              )
              if (confirmBox === true) {
                deleteQuestion(id)
              }
            }}
          >
            {' '}
            <i
              class='far fa-trash-alt'
              style={{ fontSize: '18px', marginRight: '5px' }}
            ></i>{' '}
          </a>
        </td>
      </tr>
    ))

  const pageCount = Math.ceil(record.length / PER_PAGE)

  return (
    <section>
      <div className='container'>
        <h4 className='mb-3 text-center mt-4'>AdmitKard Question Bank</h4>
        <div className='row mt-3'>
          <div className='col-sm-12'>
            <div className='row mb-4 mt-3'>
              <div className='col-sm-4'>
                <div className='form-outline'>
                  <input
                    type='text'
                    id='form1'
                    onKeyUp={searchRecords}
                    onChange={(e) => setSearch(e.target.value)}
                    className='form-control'
                    placeholder='Search Question Here'
                    style={{ backgroundColor: '#ececec' }}
                  />
                </div>
              </div>

              <div className='col-sm-6'> </div>

              <div className='col-sm-2'>
                <div className='float-right'>
                  <button
                    data-toggle='modal'
                    data-target='#exampleModal'
                    className='btn btn-primary'
                  >
                    Add Question
                  </button>
                </div>
              </div>
            </div>

            <table className='table table-hover  table-striped table-bordered ml-4 '>
              <thead>
                <tr>
                  <th col='2'>Q.No.</th>
                  <th>Quetions</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{currentPageData}</tbody>
            </table>
          </div>
        </div>
        <div
          style={{
            margin: '540px',
            marginTop: '10px',
            position: 'absolute',
          }}
        >
          {' '}
          <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link'}
            nextLinkClassName={'pagination__link'}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
          />
        </div>
      </div>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Add Question
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div class='form-group'>
                <textarea
                  class='form-control'
                  placeholder='Enter Question'
                  name='ques'
                  value={ques}
                  onChange={(e) => onInputChange(e)}
                  id='exampleFormControlTextarea3'
                  rows='7'
                ></textarea>
                <input
                  class='form-control mt-2 mb-2'
                  value={topic}
                  onChange={(e) => onInputChange(e)}
                  placeholder='Enter Topic'
                  name='topic'
                  type='text'
                />
                <input
                  class='form-control'
                  placeholder='Enter Tags'
                  value={tags}
                  onChange={(e) => onInputChange(e)}
                  name='tags'
                  type='text'
                />
              </div>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                data-dismiss='modal'
                onClick={submitQuestion}
                class='btn btn-success'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuestionBank
