import { useState } from 'react'

export default function Form() {

    const [strength, setStrength] = useState('Medium')
    const [length, setLength] = useState(24)

    function handleChange(e) {
        setLength(e.target.value)
    }

    return (
        <form>
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

                <div>
                    <span className="strength__label">{strength}</span>
                    <div className="strength-meter">
                        <span className="strength-meter__bar"></span>
                        <span className="strength-meter__bar"></span>
                        <span className="strength-meter__bar"></span>
                        <span className="strength-meter__bar"></span>
                    </div>
                </div>
            </div>

            <button className="generate" type="submit">Generate</button>
        </form>
    )
}
