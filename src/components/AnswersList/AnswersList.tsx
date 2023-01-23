import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
} from '@mui/material'
import MathContext from 'contexts/MathContext/MathContext'
import { useContext } from 'react'

const tableFontSize = (isCorrect: boolean) => {
    return {
        fontSize: { xs: '13px', sm: '17px' },
        color: isCorrect ? '' : 'white',
    }
}

const AnswersList: React.FC = () => {
    const { mathState } = useContext(MathContext)

    return (
        <TableContainer
            component={Paper}
            sx={(theme: Theme) => {
                return { mt: theme.shape.marginTop, padding: '2px 5px 5px 5px' }
            }}
        >
            <Table size='small' aria-label='answer list'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left' colSpan={6} sx={{ fontSize: '20px' }}>
                            Twoje odpowiedzi
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {mathState.answerList.map((answer) => (
                        <TableRow
                            key={answer.id}
                            sx={(theme: Theme) => {
                                return {
                                    background: answer.isCorrect ? '' : theme.palette.error.light,
                                }
                            }}
                        >
                            <TableCell
                                align='right'
                                width='8%'
                                padding='none'
                                sx={tableFontSize(answer.isCorrect)}
                            >
                                {answer.id}.
                            </TableCell>
                            <TableCell
                                align='right'
                                padding='none'
                                width='21%'
                                sx={tableFontSize(answer.isCorrect)}
                            >
                                {`${answer.factors[1]} ${mathState.mathOperation.sign} ${answer.factors[0]}`}
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='center'
                                width='8%'
                                sx={tableFontSize(answer.isCorrect)}
                            >
                                =
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='left'
                                width='21%'
                                sx={tableFontSize(answer.isCorrect)}
                            >
                                {answer.answer}
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='left'
                                width='42%'
                                sx={tableFontSize(answer.isCorrect)}
                            >
                                {answer.isCorrect ? (
                                    ''
                                ) : (
                                    <p>
                                        powinno być{' '}
                                        <b style={{ marginLeft: '10px' }}>{answer.correctAnswer}</b>
                                    </p>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnswersList
