import copyIcon from '../images/copy.png'

export default function Password(props) {
    function handleClick() {
        navigator.clipboard.writeText(props.password).then(
            () => {
                console.log('password copied')
            },
            e => {
                console.log(e)
            }
        )
    }

    return (
        <div className="password">
            <h2 className="password__text">{props.password}</h2>

            <button className="password__copy" onClick={handleClick}>
                <img src={copyIcon} alt="Copy password" />
            </button>
        </div>
    )
}
