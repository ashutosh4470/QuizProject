// fetch question hook to fetch api data and set value to store
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

// //redux action
import * as Action from "../redux/question_reducer"
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading: false, apiData: [], serverError: null });

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));


        (async () => {
            try {
                const [{questions , answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`,(data)=>data);
                console.log({questions , answers});
                if (questions.length > 0) {
                    setGetData(prev => ({ ...prev, isLoading: false }));
                    setGetData(prev => ({ ...prev, apiData: questions}));
                    // dispatch an action
                    dispatch(Action.startExamAction({question : questions, answers}))
                } else {
                    throw new Error("No Question Available");
                }

            } catch (err) {
                setGetData(prev => ({ ...prev, isLoading: false }));
                setGetData(prev => ({ ...prev, serverError: err }));
            }
            })();
    }, [dispatch])
    return [getData, setGetData];
}

export const moveNextQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.moveNextAction())
        
    } catch (error) {
        console.log(error);
    }
}

export const movePrevQuestion = ()=> async(dispatch)=>{
    try {
        dispatch(Action.moveBackAction())
    } catch (error) {
        console.log(error);
    }
}
