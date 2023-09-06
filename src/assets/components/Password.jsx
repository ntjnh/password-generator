import copyIcon from '../images/copy.png'

export default function Password(props) {
    return (
        <div className="password">
            <h2 className="password__text">{props.password}</h2>

            <button className="password__copy">
                <img src={copyIcon} alt="Copy password" />
            </button>
        </div>
    )
}
