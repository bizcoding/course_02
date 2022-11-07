import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwindcss.css'

const App = () => (
    <div className='h-60 w-full flex items-center justify-center'>
        <div className='text-2xl font-semibold'>실무코딩</div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
