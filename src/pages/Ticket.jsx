import React, { useEffect, useState } from 'react'
import '../pages/Ticket.css'

const Ticket = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentTime(date.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(username)) {
      setError("Invalid email format");
      return;
    }
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleRegistrationNumberChange = (e) => {
    const input = e.target.value;
    const formattedInput = input.replace(/[^A-Z0-9]/g, '');
    setUsername(formattedInput);
  }

  return (
    <div className='main'>
      <div className='card'>
        <h1 class="text-3xl  text-black">Ticket</h1>

        <div className='div ' style={{ display: "flex", flexDirection: "column", width: "230px", padding: '9px' }}>
          <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>

            <label className='label'> Lead Source</label> <select className='input'>
              <option name="male"> Web</option>
              <option name="female">Chat</option>
              <option name="female">Call</option>
            </select>
            <label className='label'> Name</label><input className='input' type="password" name='password' password='password' placeholder='Name' />
            <label className='label'> Contact Number</label><input className='input' type="email" name='email' placeholder='Contact Number' />
            <label className='label'> Email Address</label><input className='input' type="password" name='password' password='password' placeholder='Email Address' onChange={(e) => setUsername(e.target.value)} />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <label className='label'> Registration Number </label>  <input
              className='input'
              type="text"
              name='registrationNumber'
              placeholder='Only Caps'
              onChange={handleRegistrationNumberChange}
              value={username}
              maxLength={7}
              style={{ textTransform: "uppercase" }}
              pattern="[A-Z0-9]+"
              required
            />
            <label className='label'> Breakdown Issue</label> <input className='input' type="text" name='text' text='text' placeholder='Breakdown Issue' />
            <label className='label'> Loaction </label><input className='input' type="text" name='text' placeholder='Loaction' />
            <label className='label'> Service Fee</label> <input className='input' type="text" name='text' placeholder=' Service Fee' />
            <label className='label'>Assistance Time</label> <input className='input' type="text" name='text' placeholder='Assistance Time' />
            <label className='label'>Comments </label><input className='input' type="text" name='text' placeholder='Comments' />
            <button className='buttonstyle'>Submit</button>
          </form>
          <p>Current Time: {currentTime}</p>
        </div>
      </div>
    </div>
  )
}

export default Ticket