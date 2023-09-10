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
    const [distribution, setDistribution] = useState({})

    // Generate password
    const createPassword = (passwordLength, typesArr) => {
        // Get a random character from the array of its type
        const getCharacter = arr => arr[Math.floor(Math.random() * arr.length)]

        // Gather all the characters that will make up the password
        let passwordCharacters = []

        // Keep track of number of characters for each type
        const charSpread = {}

        typesArr.forEach(type => {
            charSpread[type] = 0
        })

        // Loop to get each character until password length is reached
        for (let a = 0; a < passwordLength; a++) {

            // Get a random type
            const randomType = typesArr[Math.floor(Math.random() * typesArr.length)]

            // Add to character count for this type
            charSpread[randomType]++

            const char = getCharacter(characters[randomType])
            passwordCharacters.push(char)

        }

        setDistribution(charSpread)
        return passwordCharacters
    }

    function getPassword(length, types) {
        const characters = length
        const characterTypes = types

        let generatedPassword = createPassword(characters, characterTypes)
        
        if (types.length > 1) {
            if (checkPassword()) {
                setPasswordGrade(checkPassword())
                return generatedPassword.join("")
            } else {
                console.log(`Password failed`)
            }
        } else {
            return generatedPassword
        }
    }

    // Check password array to make sure it includes all character types
    function checkPassword() {
        for (const typeProp in distribution) {
            if (distribution[typeProp] < 1) {
                return false
            }
        }

        return true
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
        const formData = new FormData(e.target)

        const selectedTypes = []

        const types = Object.keys(characters)

        types.forEach(type => formData.has(type) && selectedTypes.push(type))

        setPassword(getPassword(length, selectedTypes))
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
