import SectionTitle from 'components/SectionTitle'
import MathContext from 'contexts/MathContext/MathContext'
import { useContext } from 'react'

const MathTest: React.FC = () => {
    const { mathState } = useContext(MathContext)

    return (
        <>
            <SectionTitle title={mathState.mathOperation.itemText} />
            <p>{mathState.mathRange.toString()}</p>
            <p>{mathState.testLength}</p>
            <p>{mathState.userName}</p>
        </>
    )
}

export default MathTest
