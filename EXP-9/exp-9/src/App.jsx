import React from 'react'
import RegisterForm from './RegisterForm'
import './App.css'

function App() {
    return (
        <div className="app">
            <h1>Registration Form</h1>
            <RegisterForm />

           
            <div className="student-info">
                <p><strong>Name:</strong> Yug Mathur</p>
                <p><strong>Roll No:</strong> 2503201001364</p>
                <p><strong>Class:</strong> CSE-26</p>
            </div>
        </div>
    )
}

export default App
