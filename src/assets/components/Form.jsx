export default function Form(props) {
    const strength = props.strength

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="length">
                <label className="length__label" htmlFor="length">Character Length</label>
                <input className="length__input" type="range" name="length" id="length" min={0} max={24} step={1} onChange={props.handleChange} value={props.length} />
                <span className="length__value">{props.length}</span>
            </div>

            <div className="checkbox-field uppercase">
                <input className="checkbox-field__input" type="checkbox" id="uppercase" name="characters" />
                <label className="checkbox-field__label" htmlFor="uppercase">Include Uppercase Letters</label>
            </div>

            <div className="checkbox-field lowercase">
                <input className="checkbox-field__input" type="checkbox" id="lowercase" name="characters" />
                <label className="checkbox-field__label" htmlFor="lowercase">Include Lowercase Letters</label>
            </div>

            <div className="checkbox-field numbers">
                <input className="checkbox-field__input" type="checkbox" id="numbers" name="characters" />
                <label className="checkbox-field__label" htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="checkbox-field symbols">
                <input className="checkbox-field__input" type="checkbox" id="symbols" name="characters" />
                <label className="checkbox-field__label" htmlFor="symbols">Include Symbols</label>
            </div>

            <div className="strength">
                <h3 className="strength__title">Strength</h3>

                <div className="strength__status">
                    <span className="strength__label">{strength}</span>

                    <div className="strength-meter">
                        <span className={`strength-meter__bar ${strength.replace(' ', '-')}`}></span>
                        <span className={`strength-meter__bar ${strength.replace(' ', '-')}`}></span>
                        <span className={`strength-meter__bar ${strength.replace(' ', '-')}`}></span>
                        <span className={`strength-meter__bar ${strength.replace(' ', '-')}`}></span>
                    </div>
                </div>
            </div>

            <button className="generate" type="submit">Generate</button>
        </form>
    )
}
