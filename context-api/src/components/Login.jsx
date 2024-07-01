import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
function Login() {
  const [userName, setUserName] = useState("");
  const { user, setUser } = useContext(UserContext);

  function handleClick(e) {
    e.preventDefault();
    setUser(userName);
  }
  return (
    <div className='flex gap-3'>
      <input className=' p-2 text-lg rounded-md'
        type='text'
        placeholder='UserName'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleClick(e);
        }}
      />
      <button className=' hover:bg-slate-600' onClick={handleClick}> Submit </button>
    </div>
  )
}

export default Login