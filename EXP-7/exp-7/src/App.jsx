import './App.css'
import Student from './Student'

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <div className="box">
        <Student name="Yuvraj" course="Computer Science" marks="85" />
        <Student name="Yug Mathur" course="Information Technology" marks="92" />
        <Student name="Sumit Avasthi" course="Electronics" marks="78" />
      </div>
      <p>Yug Mathur <br /> Cse-26 <br />2503201001364</p>
    </div>
  )
}

export default App