import React, { useState } from 'react'

function Child({ setVal }) {

    const [num, setNum] = useState('')

    return (
        <div>
            <input type="text" value={num} onChange={(e) => {
                setNum(e.target.value)
                setVal(e.target.value)
            }} name="" id="" />
        </div>
    )
}

export default Child
