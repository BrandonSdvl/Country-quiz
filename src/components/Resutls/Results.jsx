import { ReactComponent as Logo } from '../../assets/undraw_winners_ao2o 2.svg'

const Results = () => {
    return (
        <div className={'results'}>
            <Logo />
            <h2>Results</h2>
            <p>You got <span>4</span> correct answers</p>
            <button>Try Again</button>
        </div>
    )
}

export default Results
