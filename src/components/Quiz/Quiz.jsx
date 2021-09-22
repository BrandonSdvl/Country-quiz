import Answers from "../Answers/Answers"
import Question from "../Question/Question"
import { ReactComponent as Logo } from '../../assets/undraw_adventure_4hum 1.svg'

const Quiz = () => {
    return (
        <div className={'quiz'}>
            <Logo />
            <Question />
            <Answers />
            <button>Next</button>
        </div>
    )
}

export default Quiz
