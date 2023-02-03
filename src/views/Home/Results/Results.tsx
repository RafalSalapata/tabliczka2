import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import SectionTitle from 'components/SectionTitle'
import ResultCard from './components/ResultCard'
import { getRecords } from 'utils/resultsUtils'
import { RecordTypeWithId } from 'types/appTypes'

const Results: React.FC = () => {
    const [records, setRecords] = useState<RecordTypeWithId[]>([])

    useEffect(() => {
        getRecords(21)
            .then((res) => setRecords(res))
            .catch((err) => {
                throw new Error(err.message)
            })
    }, [])
    return (
        <>
            <SectionTitle title='Ostatnie wyniki' />
            {records.length ? (
                records.map((record) => <ResultCard key={record.id} record={record} />)
            ) : (
                <Typography color='text.primary'>Brak wyników</Typography>
            )}
        </>
    )
}

export default Results
