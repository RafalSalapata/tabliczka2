import SectionTitle from 'components/SectionTitle'
import MathContext from 'contexts/MathContext/MathContext'
import { useContext } from 'react'

const MathTest: React.FC = () => {
    const { mathState } = useContext(MathContext)

    return (
        <>
            <SectionTitle title={mathState.mathOperation} />
            <p>{mathState.mathRange.toString()}</p>
            <p>{mathState.numberOfQuestions}</p>
            <p>{mathState.userName}</p>
        </>
    )
}

export default MathTest
