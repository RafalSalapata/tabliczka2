import SectionTitle from 'components/SectionTitle'
import { Link } from 'react-router-dom'

const MathSettings: React.FC = () => {
    return (
        <>
            <SectionTitle title='Ustawienia' />
            <Link to='/matematyka/dodawanie'>Dodawanie</Link>
        </>
    )
}

export default MathSettings
