import React, { useEffect, useState } from 'react'
import '../styles/Main.css'
import { Question } from './Question';
import { moveNextQuestion , movePrevQuestion} from '../hooks/fetchQuestions';
import { pushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';
// import redux store
import { useSelector ,useDispatch} from 'react-redux';

export const Quiz = () => {
    const [check,setChecked] = useState(undefined);
    const result = useSelector(state => state.result.result)
    const state = useSelector(state=>state);
    const {queue,trace} = useSelector(state => state.questions)
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(state);
    })

    function onPrev(){
        // console.log("On Previous");
        if(trace > 0){
            dispatch(movePrevQuestion());
        }
    }
    function onNext(){
        //update trace value by one by using moveNext function
        if(trace < queue.length){
            dispatch(moveNextQuestion());
            dispatch(pushAnswer(check))
        }
    }

    const onChecked = (check)=>{
        console.log(check);
        setChecked(check);
    }

    // Finished Exam after last Question
    if(result.length && result.length >= queue.length){
        return <Navigate to={"/result"} replace={true} />
    }

    return (
        <div className='container'>
            <h1 className='title text-secondary'>Quiz Application</h1>

            < Question onChecked={onChecked}/>

            <div className="grid"> 
                <button className="btn prev" onClick={onPrev}>Previous</button>
                <button className="btn next" onClick={onNext}>Next</button>
            </div>
        </div>
    )
}
