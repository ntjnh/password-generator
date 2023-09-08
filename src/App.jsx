import { useState } from 'react'
import Form from './assets/components/Form'
import './assets/scss/app.scss'
import characters from './characters'
import Password from './assets/components/Password'
import Attr from './assets/components/Attr'

function App() {
    const [password, setPassword] = useState('P4$5W0rD!')
    const [strength, setStrength] = useState('')
    const [length, setLength] = useState(0)

    let letters = characters.letters
    // let numbers= characters.numbers
    // let symbols= characters.symbols

    // Generate password
    const createPassword = passwordLength => {
        const getCharacter = arr => arr[Math.floor(Math.random() * arr.length)]
        let passwordCharacters = []

        for (let i = 0; i < passwordLength; i++) {
            passwordCharacters.push(getCharacter(letters))
        }

        return passwordCharacters
    }

    // Event handler functions
    function handleChange(e) {
        setLength(e.target.value)

        if (length < 6) {
            setStrength('very weak')
        } else if (length < 8) {
            setStrength('weak')
        } else if (length < 12) {
            setStrength('medium')
        } else if (length >=12) {
            setStrength('strong')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        setPassword(createPassword(length).join(""))
    }

    return (
        <div className="App">
            <main>
                <h1>Password Generator</h1>

                <Password password={password} />

                <Form 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    length={length}
                    strength={strength} 
                />
            </main>

            <Attr />
        </div>
    )
}

export default App
