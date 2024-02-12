import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
export const Main = () => {

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    function startQuiz(){
      if(inputRef.current?.value){  
        dispatch(setUserId(inputRef.current?.value))
      }
    }
  return (

    <div className='container'>
    <h1 className='title text-secondary'>Quiz Application</h1>

    <form id='form'>
        <input ref={inputRef} className='userid' type='text' placeholder='Username'/>
    </form>
    <div className="start">
        <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
    </div>

</div> 

  )
}
