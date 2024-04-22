import React, { useState } from "react";
import Jazakallah from "./jazakallah";

const Content = () => {
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [totalCount, setTotalCount] = useState(33);
    const [count, setCount] = useState(0);
    const [cnt, setCnt] = useState(0);
    const [showJazakallah, setShowJazakallah] = useState(false);

    function increment() {
        if (!taskCompleted) {
            setCnt(cnt + 1);
            if (cnt === 33) {
                document.querySelector(".tasbihText").textContent = "Alhamdulillah";
                setCount(0);
            } else if (cnt === 67) {
                document.querySelector(".tasbihText").textContent = "Allahu Akbar";
                setTotalCount(34);
                setCount(0);
            } else if (cnt === 102) {
                document.querySelector(".tasbihText").textContent = "La ilaha illallah";
                setTotalCount(10);
                setCount(0);
            } else if (cnt === 113) {
                document.querySelector(".tasbihText").textContent = "Masha allah ! you completed tasbih. Click 'Reset' button to start again ";
                setTaskCompleted(true);
            } else {
                setCount(count + 1);
            }
        }
    }
    
    function decrement() {
        if (!taskCompleted && count > 0) {
            setCount(count - 1);
            setCnt(cnt-1);
        }
    }

    function resetAll() {
        document.querySelector(".tasbihText").textContent = "Subhanallah";
        setCount(0);
        setTotalCount(33);
        setCnt(0);
        setTaskCompleted(false);
    }


    return (
        <div className="contents">
            {!showJazakallah ? (
                <>
                    <h1 className="tasbihText">Subhanallah</h1>
                    <h1 className="tasbihCount">{count}/{totalCount}</h1>
                    <button className="incButton" onClick={increment} disabled={taskCompleted}>+</button>
                    <button className="decButton" onClick={decrement} disabled={taskCompleted}>-</button>
                    <div className="btnSection">
                        <button className="exitButton" onClick={()=>{setShowJazakallah(true);
                                                                setTimeout(() => {
                                                                    window.close();}, 1500);}}>Exit</button>
                        <button className="resetButton" onClick={resetAll}>Reset</button>
                    </div>
                </>
            ) : <Jazakallah />}
        </div>
    );
}

export default Content;
