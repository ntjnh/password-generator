import { useState } from 'react'
import Form from './assets/components/Form'
import './assets/scss/app.scss'
import copyIcon from './assets/images/copy.png'

function App() {
    const [password, setPassword] = useState('P4$5W0rD!')

    return (
        <div className="App">
            <main>
                <h1>Password Generator</h1>

                <div className="password">
                    <h2 className="password__text">{password}</h2>

                    <button className="password__copy">
                        <img src={copyIcon} alt="Copy password" />
                    </button>
                </div>

                <Form />
            </main>
        </div>
    )
}

export default App
