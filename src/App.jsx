import './assets/scss/app.scss'

function App() {

    return (
        <>
            <header>
                <h1>Password Generator</h1>
            </header>

            <main>
                <div>
                    <h2>P4$5W0rD!</h2>
                </div>

                <div>
                    <form>
                        <label htmlFor="length">Character Length</label>
                        <input type="range" name="length" id="length" min={1} max={24} step={1} />
                        <span className="characterLength">0</span>

                        <input type="checkbox" id="uppercase" name="uppercase" />
                        <label htmlFor="uppercase">Include Uppercase Letters</label>

                        <input type="checkbox" id="lowercase" name="lowercase" />
                        <label htmlFor="lowercase">Include Lowercase Letters</label>

                        <input type="checkbox" id="numbers" name="numbers" />
                        <label htmlFor="numbers">Include Numbers</label>

                        <input type="checkbox" id="symbols" name="symbols" />
                        <label htmlFor="symbols">Include Symbols</label>

                        <div>
                            <span>Strength</span>

                            <div>
                                <span>Medium</span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                        <button type="submit">Generate</button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default App
