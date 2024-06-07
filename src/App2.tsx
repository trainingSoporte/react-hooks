import { useState,ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App2() {
    const [liked, setLiked] = useState(true);

    function handleChange(e:ChangeEvent<HTMLInputElement>) {
        setLiked(e.target.checked);
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>

            <div className="card">

                <label>
                    <input
                        type="checkbox"
                        checked={liked}
                        onChange={handleChange}
                    />
                    Me Gusta como va la Capacitacion
                </label>
                <p>{liked ? 'Te' : 'No te'} gusta esta capacitacion.</p>

            </div>


            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App2
