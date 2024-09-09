import React from 'react'

const Button = (props) => {
    const { text, bgColor, onClick } = props
    return (
        <div>
            <button
                onClick={onClick}
                className='outline-none px-4 py-1 rounded-full shadow-xl'
                style={{ backgroundColor: bgColor, color: 'black' }}>{text}</button>
        </div>
    )
}

export default Button
