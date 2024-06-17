export function Button({onClick, text}) {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return (
        Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    )
}

export function Header ({header}) {
    return (
        <h2>
            {header}
        </h2>
    )
}

export function Anecdote ({text, votesCount}) {
    
    if (votesCount === 1) {
        return(
            <div>
                <p>{text}</p>
                <p>has {votesCount} vote</p>
            </div>
        )
    }
    return(
        <div>
            <p>{text}</p>
            <p>has {votesCount} votes</p>
        </div>
        
    )
}

export function WinnerAnecdote ({text, votesCount}) {

    const maxVotes = votesCount.reduce((acc, current) => Math.max(acc, current))
    const indexMax = votesCount.indexOf(maxVotes)
    const winner = text[indexMax]

    if (maxVotes === 0) {
        return(
            <p>no votes submitted</p>
        )
    }
    return(
        <div>
            <p>{winner}</p>
            <p>has {maxVotes} votes</p>
        </div>    
    )
}