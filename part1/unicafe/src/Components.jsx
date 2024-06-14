export function Header ({header}) {
    console.log({header})
    return (
        <h2>
            {header}
        </h2>
    )
}

export function Button({onClick, text}) {
    console.log(onClick)
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export function Statistics({clicks}) {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = Math.round((((clicks.good * 1 + clicks.bad * -1) / total) + Number.EPSILON) * 100) / 100
    const positive = Math.round(((clicks.good * 100 / total) + Number.EPSILON) * 100) / 100
    
    if (total === 0) {
        return(
            <div>
                No feedback given
            </div>
        )
    }

    return(
        <div>
            <table>
                <tbody>
                    <StatisticLine text= 'good' value={clicks.good} />
                    <StatisticLine text= 'neutral' value={clicks.neutral} />
                    <StatisticLine text= 'bad' value={clicks.bad} />
                    <StatisticLine text= 'all' value={total} />
                    <StatisticLine text= 'average' value={average} />
                    <StatisticLine text= 'positive' value={positive} />
                </tbody>
            </table>
        </div>
    )
}

function StatisticLine({text, value}) {

    if (text ==='positive') {
        return(
            <tr>
                <td>{text} {value} %</td>
            </tr>
        )
    }
    return(
        <tr>
            <td>{text} {value}</td>
        </tr>
        
    )
}
