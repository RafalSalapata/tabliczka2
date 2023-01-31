import { useEffect, useState } from 'react'
import SectionTitle from 'components/SectionTitle'
import { getRecords } from 'utils/resultsUtils'
import { RecordTypeWithId } from 'firebase-config'
import ResultCard from './components/ResultCard'
import { Typography } from '@mui/material'

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
