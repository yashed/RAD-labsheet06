import React from 'react';

function Counter(){
    const [count, setCount] =React.useState(0);

    const inrementCount =()=>{
        setCount(count+1);
    };
    return(
        <div>
            <h2> Counter : {count}</h2>
            <button onClick={inrementCount}>Increment</button>
        </div>
    );
}

export default Counter;