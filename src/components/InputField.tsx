import React from 'react'

function InputField() {
  return (
    <form action="" className="input">
        <input type="input" placeholder='Enyet a task' className="input__box" />
        <button className='input__submit' type={'button'}>GO</button>
    </form>
  )
}

export default InputField