
import StageCounter from '../../../../components/StageCounter'


const Component = ({stage, totalStage, buttonLabel, nextStage, backStage}) => {
    return (
        <>
            <StageCounter stage={stage} totalStage={totalStage} canSetState={false} />

            {stage > 0 && <button type="button" className="btn btn-primary btn-block mb-4" onClick={backStage}>Voltar</button>}
            <button type="button" className="btn btn-primary btn-block mb-4" onClick={nextStage}>{buttonLabel}</button>
        </>
    )
}

export default Component