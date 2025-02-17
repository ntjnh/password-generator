export default function Password(props) {
    function handleClick() {
        navigator.clipboard.writeText(props.password).then(
            () => console.log('password copied'),
            e => console.error(e)
        )
    }

    const highlight = props.highlight ? 'text-neutral-175' : 'text-neutral-575'

    return (
        <div className="bg-neutral-825 mb-5 px-8 py-5 relative password">
            <h2 className={`font-medium m-0 text-[1.75rem] md:text-[2rem] ${highlight}`}>{props.password}</h2>

            <button className="absolute bg-transparent border-0 cursor-pointer right-8 rounded-none top-0 translate-y-[80%] password__copy" onClick={handleClick}>
                <svg className="inline-block w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path className="fill-green-250" d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/>
                </svg>
            </button>
        </div>
    )
}
