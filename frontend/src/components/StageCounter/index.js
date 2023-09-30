
import '../../assets/scss/components/stage-counter.scss'

const StageCounter = ({stage, totalStage, canSetState, setState}) => {

    const clickFunction = (currentStage) => {
        if (canSetState) {
            setState(currentStage)
        }
    }

    return (
        <div className='stage-counter-container'>
            {
                new Array(totalStage).fill(stage).map(
                    (e, i) => {
                        let className = 'dot'

                        if (i === stage) {
                        className += ' active'
                        }

                        return (
                            <span className={className} key={i} onClick={() => clickFunction(i)}>💜</span>
                        )
                    }
                )}
        </div>
    )
}

export default StageCounter