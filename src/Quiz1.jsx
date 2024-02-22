import React,{useRef, useState} from "react";
import './Quiz.css';
import './index.css';
import {data} from './data';
import {useNavigate} from'react-router-dom';
 const Quiz1=()=>{
   const navigate=useNavigate();
    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index])
    let[lock,setLock]=useState(false);
    let[score,setScore]=useState(0)
    let[result,setResult]=useState(false);
    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);
    let option_array=[Option1,Option2, Option3, Option4]
    const checkAns=(e,ans)=>{
        if(lock===false){
        if(question.ans===ans){
          e.target.classList.add("correct");
          setLock(true);
          setScore(prev=>prev+1);
        }
        else{
            e.target.classList.add("wrong");
            setLock(true)
            option_array[question.ans-1].current.classList.add("correct")
        }
    }
    }
    const next=()=>{
        if(lock===true){
            if(index===data.length-1){
                setResult(true);
                return null;
            }
            setIndex(++index);
            setLock(false)
            setQuestion(data[index])
            option_array.map((option)=>{
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;
            })

        }
       
    }
    return(<>
        
                <h1 >Section B</h1>
                
            <div className="container">
                {result?<><h1>Result:-</h1>
                            <hr/></>:<>
                <h1>{index+1}. {question.question}</h1>
                <hr/>
               
                <ul>
                    <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                    <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                    <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                    <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        
                </ul>
                <button onClick={next}> Next</button>
                <div className="index">{index+1} of {data.length} Questions</div>
                </>
          }
                 {result?<><h2>You Scored {score} out of {data.length}</h2>
                 <button onClick={()=>navigate("/last")}> Next Section</button></>:<></>}
                </div>
       
     
            </>);
}
   
export default Quiz1;