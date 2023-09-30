
import StageCounter from '../../../../components/StageCounter'


const Component = ({stage, totalStage, buttonLabel, nextStage, backStage}) => {
    return (
        <div className='loading-box-container'>
            <StageCounter stage={stage} totalStage={totalStage} canSetState={false} />
            <div className="btn-group">
                {stage > 0 && <button type="button" className="btn btn-block mb-4" onClick={backStage}>Voltar</button>}
                <button type="button" className="btn btn-block mb-4" onClick={nextStage}>{buttonLabel}</button>
            </div>
        </div>
    )
}

export default Component