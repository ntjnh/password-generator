export default function Form(props) {
    const strength = props.strength
    const strengthClass = strength.replace(' ', '-')

    const strengthBars = []

    for (let i = 0; i < 4; i++) {
        strengthBars.push((
            <span key={i} className={`strength-meter__bar ${strengthClass}`}></span>
        ))
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="length">
                <label className="length__label" htmlFor="length">Character Length</label>
                <input className="length__input" type="range" name="length" id="length" min={0} max={24} step={1} onChange={props.handleChange} value={props.length} />
                <span className="length__input-track-left" style={{"width": props.trackLeftWidth}}></span>
                <span className="length__value">{props.length}</span>
            </div>

            <p className={`error-message${props.showErrorMessage}`}>No character types selected. Please check 1 or more of the boxes below.</p>

            <div className="checkbox-field uppercase">
                <input className="checkbox-field__input" type="checkbox" id="uppercase" name="uppercase" />
                <label className="checkbox-field__label" htmlFor="uppercase">Include Uppercase Letters</label>
            </div>

            <div className="checkbox-field lowercase">
                <input className="checkbox-field__input" type="checkbox" id="lowercase" name="lowercase" />
                <label className="checkbox-field__label" htmlFor="lowercase">Include Lowercase Letters</label>
            </div>

            <div className="checkbox-field numbers">
                <input className="checkbox-field__input" type="checkbox" id="numbers" name="numbers" />
                <label className="checkbox-field__label" htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="checkbox-field symbols">
                <input className="checkbox-field__input" type="checkbox" id="symbols" name="symbols" />
                <label className="checkbox-field__label" htmlFor="symbols">Include Symbols</label>
            </div>

            <div className="strength">
                <h3 className="strength__title">Strength</h3>

                <div className="strength__status">
                    <span className="strength__label">{strength}</span>

                    <div className="strength-meter">
                        {strengthBars}
                    </div>
                </div>
            </div>

            <button className="generate" type="submit">
                Generate
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><polygon fillRule="evenodd" points="10.586 9 2 9 2 7 10.586 7 7.293 3.707 8.707 2.293 14.414 8 8.707 13.707 7.293 12.293 10.586 9"/></svg>
            </button>
        </form>
    )
}
