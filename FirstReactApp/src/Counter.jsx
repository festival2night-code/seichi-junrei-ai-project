import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: 'center', padding: '30px' }}>
            <h2>Counter</h2>
            <p style={{ fontSize: '48px', fontWeight: 'bold' }}>{count}</p>
            <div>
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(0)}>Set Zero</button>
            </div>
        </div>
    )
}

export default Counter