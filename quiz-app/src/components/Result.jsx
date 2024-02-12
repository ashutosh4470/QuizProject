import React from 'react'
import "../styles/Result.css"
import { Link } from 'react-router-dom'
import { ResultTable } from './ResultTable'
export const Result = () => {

    const onRestart=()=>{
        console.log("On Restart");
    }
    return (
        <div>
            <h1 className='title text-secondary'>Quiz Application</h1>
            <div className="result flex-center">
                <div className="flex">
                    <span>Username</span>
                    <span className="bold">AshutoshMahale</span>
                </div>
                <div className="flex">
                    <span>Total Quiz Points</span>
                    <span className="bold">50</span>
                </div>
                <div className="flex">
                    <span>Total Question</span>
                    <span className="bold">05</span>
                </div>
                <div className="flex">
                    <span>Total Earn Points</span>
                    <span className="bold">30</span>
                </div>
                <div className="flex">
                    <span>Quiz Result</span>
                    <span className="bold">passed</span>
                </div>

                <div className="start">
                    <Link className='btn' to={'/'} onClick={onRestart} >Restart</Link>
                </div>
                <div className="container">
                    <ResultTable />
                </div>
            </div>
        </div>
    )
}
