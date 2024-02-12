import React, { useEffect, useState } from 'react'
import data from '../database/Data';
import { useDispatch, useSelector } from 'react-redux';
//custom Hook
import { useFetchQuestion } from '../hooks/fetchQuestions';
import { updateResult } from '../hooks/setResult';
export const Question = ({onChecked}) => {
    const [checked, setChecked] = useState(undefined);
    const [{isLoading, apiData, serverError}] = useFetchQuestion()
    // useSelector(state=>console.log(state))
    // const question = data[0];
    
    const questions  = useSelector(state => state.questions.queue[state.questions.trace])
    const {trace} = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);

    const dispatch = useDispatch();

    useEffect(()=>{
        // console.log({trace,checked});
        dispatch(updateResult({trace,checked}));
    },[checked])


    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({trace,checked}));

    }


    if(isLoading) return <h3>isLoading....</h3>
    if(serverError) return <h3>{serverError || "Unknown Error"}</h3>

    return (
        <div className='questions'>
            <h2 className='text-dark'>{questions?.question}</h2>
            <ul key={questions?.id}>
               { questions?.options.map((q, i)=>(
                <li key={i}>
                    <input type="radio"
                        value={false}
                        name='options'
                        id={`q${i}-options`}
                        onChange={()=> onSelect(i)}
                    />

                    <label className='text-primary' htmlFor={`q${i}-options`}>{q}</label>
                    <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
                </li>
                ))}
            </ul>
        </div>
    )
}
