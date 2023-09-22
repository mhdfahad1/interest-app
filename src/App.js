import './App.css';
import { TextField, Stack, Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [validPrinciple, setValidprinciple] = useState(true)
  const [validrate, setValidRate] = useState(true)
  const [validYear, setValidyear] = useState(true)


  const handleCalculate = (e) => {
    e.preventDefault()
    if (!principle || !rate || !year) {
      alert('please fill the form')
    } else {
      setInterest(Math.floor(principle * rate / 100 * year))
    }


  }
  const validUserInput = (e) => {
    // {key}=object
    const { name, value } = e.target
    if (!!value.match(/^[0-9]+$/)) {
      // valid expression
      if (name === "principle") {
        setPrinciple(value)
        setValidprinciple(true)
      } else if (name === "rate") {
        setRate(value)
        setValidRate(true)
      }
      else if (name === "year") {
        setYear(value)
        setValidyear(true)
      }
    }
    else {
      // invalid expression
      if (name === "principle") {
        setPrinciple(value)
        setValidprinciple(false)
      }
      else if (name === "rate") {
        setRate(value)
        setValidRate(false)
      }
      else if (name === "year") {
        setYear(value)
        setValidyear(false)
      }
    }

  }
  const handleReset=()=>{
  setInterest(0)
  setPrinciple(0)
  setRate(0)
  setYear(0)
  }
  return (
    <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center align-items-center bg-dark '>

      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h1>Simple Intrest App</h1>
        <p>Calculate your simple interest easily</p>
        <div style={{ height: '150px' }} className="intrest-card w-100 bg-warning d-flex flex-column justify-content-center align-items-center
        rounded shadow text-light mt-5">
          <h1>₹ {' '}{interest}</h1>
          <p>Total Simple Interest</p>

        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic" label="₹ Principal Amount" variant="outlined" value={principle || ""} name='principle' onChange={(e) => validUserInput(e)} />
          </div>

          {
            !validPrinciple &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid Principle Amount
            </div>
          }

          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic" label="Rate of Interest" variant="outlined" value={rate || ""} name='rate' onChange={(e) => validUserInput(e)} />
          </div>

          {
            !validrate &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid rate Amount
            </div>
          }

          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic" label="Time Period (yr)" variant="outlined" value={year || ""} name='year' onChange={(e) => validUserInput(e)} />
          </div>

          {
            !validYear &&
            <div className='mb-3 text-danger fw-bolder'>
              *Invalid year Amount
            </div>
          }

          <Stack direction="row" spacing={2}>
            <Button type='submit' style={{ height: '70px', width: '250px' }} className='' variant="contained" 
            disabled={validPrinciple&&validYear&&validrate?false:true}>Calculate</Button>
            <Button style={{ height: '70px', width: '250px' }} onClick={handleReset} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>

    </div>
  );
}

export default App;

