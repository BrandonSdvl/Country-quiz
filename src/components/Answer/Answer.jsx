import { ReactComponent as Correct } from '../../assets/correct.svg'
import { ReactComponent as Incorrect } from '../../assets/incorrect.svg'

const Answer = () => {
    return (
        <div className="quiz__answer">
            <button>A</button>
            <Correct />
            <Incorrect />
        </div>
    )
}

export default Answer
