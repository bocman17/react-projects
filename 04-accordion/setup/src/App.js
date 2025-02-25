import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  // useState
  const [questions, SetQuestion] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
