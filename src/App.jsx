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
    const [trackLeftWidth, setTrackLeftWidth] = useState('0%')
    const [isHighlighted, setIsHighlighted] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    // Generate password
    const createPassword = (passwordLength, typesArr) => {

        // Get a random character from the array of its type
        const getCharacter = arr => arr[Math.floor(Math.random() * arr.length)]

        // Gather all the characters that will make up the password
        const passwordCharacters = []

        // Array to hold the pool of available characters based on chosen types
        const availableCharacters = []

        // Loop through the selected types
        typesArr.forEach(t => {

            // Add all characters to the available characters array
            characters[t].forEach(char => availableCharacters.push(char))
            
            // get a character from each type to make sure we have at least one of each
            passwordCharacters.push(getCharacter(characters[t]))
        })

        // How many more characters are needed
        const remainingCharacters = passwordLength - typesArr.length

        // Loop to grab the remaining characters based on number above
        for (let x = 0; x < remainingCharacters; x++) {
            passwordCharacters.push(getCharacter(availableCharacters))
        }

        // Return merged array as a string
        return passwordCharacters.join("")
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

        setTrackLeftWidth(`${Math.ceil(e.target.value / 24 * 100)}%`)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const checkboxes = [e.target[1].checked, e.target[2].checked, e.target[3].checked, e.target[4].checked]
        
        if (checkboxes.some(checkbox => checkbox === true)) {
            const formData = new FormData(e.target)

            const selectedTypes = []

            const types = Object.keys(characters)

            types.forEach(type => formData.has(type) && selectedTypes.push(type))

            setPassword(createPassword(length, selectedTypes))

            setIsHighlighted(true)

            setShowErrorMessage(false)
        } else {
            setShowErrorMessage(prev => !prev)
        }
    }

    return (
        <div className="App">
            <main>
                <h1>Password Generator</h1>

                <Password highlight={isHighlighted} password={password} />

                <Form 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    length={length}
                    showErrorMessage={showErrorMessage ? " error-message--show" : ""}
                    strength={strength}
                    trackLeftWidth={trackLeftWidth}
                />
            </main>

            <Attr />
        </div>
    )
}

export default App
