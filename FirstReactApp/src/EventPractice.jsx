import { useState } from 'react'

function EventPractice() {
    const [inputValue, setInputValue] = useState('')
    const [displayText, setDisplayText] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    const handleClick = () => {
        setDisplayText(inputValue)
        setInputValue('')  
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    return (
        <div style={{ textAlign: 'center', padding: '30px' }}>
            <h2>📝 Event Practice</h2>
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter text, press Enter or click the button"
                style={{ padding: '8px', width: '300px' }}
            />
            <button 
                onClick={handleClick}
                style={{ 
                    padding: '8px 20px', 
                    marginLeft: '10px',
                    cursor: 'pointer'
                }}
            >
                Display Text
            </button>
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
                Display: {displayText || '(Not entered yet)'}
            </p>
        </div>
    )
}

export default EventPractice