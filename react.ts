import React, { useState } from "react";

interface Props {
    initialCount: number;
}

function Counter({ initialCount }: Props) {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;
