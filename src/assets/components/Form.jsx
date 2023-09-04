import { useState } from 'react'
import characters from '../../characters'

export default function Form() {

    const [strength, setStrength] = useState('Very Strong')
    const [length, setLength] = useState(24)
    const [password, setPassword] = useState('')

    let letters = characters.letters
    let numbers= characters.numbers
    let symbols= characters.symbols

    const getCharacter = arr => arr[Math.floor(Math.random() * arr.length)]

    const createPassword = passwordLength => {
        let passwordCharacters = []

        for (let i = 0; i < passwordLength; i++) {
            passwordCharacters.push(getCharacter(letters))
        }

        return passwordCharacters
    }

    function handleChange(e) {
        setLength(e.target.value)

        if (length < 6) {
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

    // console.log(password)   

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="length">
                <label className="length__label" htmlFor="length">Character Length</label>
                <input className="length__input" type="range" name="length" id="length" min={0} max={24} step={1} onChange={handleChange} />
                <span className="length__value">{length}</span>
            </div>

            <div className="checkbox-field uppercase">
                <input className="uppercase__input" type="checkbox" id="uppercase" name="characters" />
                <label className="uppercase__label" htmlFor="uppercase">Include Uppercase Letters</label>
            </div>

            <div className="checkbox-field lowercase">
                <input className="lowercase__input" type="checkbox" id="lowercase" name="characters" />
                <label className="lowercase__label" htmlFor="lowercase">Include Lowercase Letters</label>
            </div>

            <div className="checkbox-field numbers">
                <input className="numbers__input" type="checkbox" id="numbers" name="characters" />
                <label className="numbers__label" htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="checkbox-field symbols">
                <input className="symbols__input" type="checkbox" id="symbols" name="characters" />
                <label className="symbols__label" htmlFor="symbols">Include Symbols</label>
            </div>

            <div className="strength">
                <h3 className="strength__title">Strength</h3>

                <div className="strength__status">
                    <span className="strength__label">{strength}</span>
                    <div className="strength-meter">
                        <span className={`strength-meter__bar ${strength}`}></span>
                        <span className={`strength-meter__bar ${strength}`}></span>
                        <span className={`strength-meter__bar ${strength}`}></span>
                        <span className={`strength-meter__bar ${strength}`}></span>
                    </div>
                </div>
            </div>

            <button className="generate" type="submit">Generate</button>
        </form>
    )
}
