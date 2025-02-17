export default function Form(props) {
    const strength = props.strength
    const strengthClass = strength.replace(' ', '-')

    const classes = {
        button: 'bg-green-250 hover:bg-transparent border-2 border-green-250 border-solid cursor-pointer duration-200 ease-in-out font-medium font-mono inline-block leading-none p-6 md:p-5 text-lg text-neutral-925 hover:text-green-250 transition-all uppercase w-full',
        checkbox: 'align-middle appearance-none checked:bg-green-250 checked:bg-center checked:bg-no-repeat checked:bg-[length:32px_32px] border-2 border-neutral-175 checked:border-green-250 hover:border-green-250 border-solid cursor-pointer font-mono h-[22px] inline-block m-0 w-[22px]',
        checkbox_label: 'align-middle cursor-pointer inline-block ml-5 text-[1.0625rem]',
        error: 'bg-[#f1b7b7] leading-[1.125rem] mt-0 mx-0 mb-6 px-3 py-2 text-[#8e1b1b] text-sm',
        length: 'appearance-none bg-neutral-875 cursor-pointer font-mono h-[9px] md:h-1.5 inline-block m-0 w-full',
        length_value: 'absolute font-medium leading-none right-0 text-green-250 text-[1.75rem] md:text-[2rem] top-0.5 md:top-0',
        strength: 'bg-neutral-875 flex items-center justify-between leading-none mt-11 mb-5 md:my-8 p-[1.125rem] md:py-7 md:px-8'
    }

    const strengthBars = []

    for (let i = 0; i < 4; i++) {
        strengthBars.push((
            <span key={i} className={`bg-transparent border-2 border-neutral-175 border-solid h-9 md:h-7 inline-block ml-2 w-3 md:w-[9px] strength-meter__bar ${strengthClass}`}></span>
        ))
    }

    return (
        <form className="bg-neutral-825 p-5 md:p-8 text-neutral-175" onSubmit={props.handleSubmit}>
            <div className="mb-12 md:mb-8 relative">
                <label className="block leading-8 mb-4 md:mb-6 text-xl md:text-lg" htmlFor="length">Character Length</label>
                <input className={`${classes.length} length__input`} type="range" name="length" id="length" min={0} max={24} step={1} onChange={props.handleChange} value={props.length} />
                <span className="absolute bg-green-250 bottom-[5px] h-[9px] md:h-1.5 inline-block left-0" style={{"width": props.trackLeftWidth}}></span>
                <span className={classes.length_value}>{props.length}</span>
            </div>

            <p className={`${classes.error} ${props.showErrorMessage}`}>No character types selected. Please check 1 or more of the boxes below.</p>

            <div className="mb-[1.375rem]">
                <input className={classes.checkbox} type="checkbox" id="uppercase" name="uppercase" />
                <label className={classes.checkbox_label} htmlFor="uppercase">Include Uppercase Letters</label>
            </div>

            <div className="mb-[1.375rem]">
                <input className={classes.checkbox} type="checkbox" id="lowercase" name="lowercase" />
                <label className={classes.checkbox_label} htmlFor="lowercase">Include Lowercase Letters</label>
            </div>

            <div className="mb-[1.375rem]">
                <input className={classes.checkbox} type="checkbox" id="numbers" name="numbers" />
                <label className={classes.checkbox_label} htmlFor="numbers">Include Numbers</label>
            </div>

            <div className="mb-[1.375rem]">
                <input className={classes.checkbox} type="checkbox" id="symbols" name="symbols" />
                <label className={classes.checkbox_label} htmlFor="symbols">Include Symbols</label>
            </div>

            <div className={`${classes.strength} strength`}>
                <h3 className="font-medium m-0 text-neutral-450 text-xl md:text-lg uppercase">Strength</h3>

                <div className="flex items-center justify-between">
                    <span className="font-medium md:font-normal inline-block mr-3 md:mr-4 text-xl md:text-base uppercase w-fit">{strength}</span>

                    <div className="leading-3 md:leading-none strength-meter">
                        {strengthBars}
                    </div>
                </div>
            </div>

            <button className={`${classes.button} generate`} type="submit">
                Generate
                <svg className="inline-block h-auto -mb-1 ml-4 md:ml-7 w-5" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <polygon className="duration-200 ease-in-out fill-neutral-925 transition-all" fillRule="evenodd" points="10.586 9 2 9 2 7 10.586 7 7.293 3.707 8.707 2.293 14.414 8 8.707 13.707 7.293 12.293 10.586 9"/>
                </svg>
            </button>
        </form>
    )
}
