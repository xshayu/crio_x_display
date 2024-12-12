import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState<string>();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    setName(`${firstName} ${lastName}`);
  }

  return (
    <>
    <h1>Full Name Display</h1>
    <form
      onSubmit={handleFormSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '5px'
      }}  
    >
      <label>
        First Name: <input type="text" name="firstName" required/>
      </label>
      <label>
        Last Name: <input type="text" name="lastName" required/>
      </label>
      <button type="submit">Submit</button>
    </form>
    {name?.length && 
      <p>Full Name: {name}</p>
    }
    </>
  )
}

export default App
