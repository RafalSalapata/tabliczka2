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
import { MathAnswer } from 'types/mathTypes'
import { tableCellStyles } from 'utils/appUtils'

interface AnswersListMathProps {
    answerList: MathAnswer[]
    operationSign: string
    topMarginOff?: boolean
}

const AnswersListMath: React.FC<AnswersListMathProps> = ({
    answerList,
    operationSign,
    topMarginOff,
}) => {
    return (
        <TableContainer
            component={Paper}
            sx={(theme: Theme) => ({
                mt: topMarginOff ? 0 : theme.shape.marginTop,
                padding: '2px 5px 5px 5px',
                boxShadow: theme.shadows[4],
            })}
        >
            <Table size='small' aria-label='answer list'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left' colSpan={6} sx={{ fontSize: '20px' }}>
                            Odpowiedzi
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answerList.map((answer) => (
                        <TableRow
                            key={answer.id}
                            sx={(theme: Theme) => ({
                                background: answer.isCorrect ? '' : theme.palette.error.light,
                            })}
                        >
                            <TableCell
                                align='right'
                                width='8%'
                                padding='none'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                {answer.id}.
                            </TableCell>
                            <TableCell
                                align='right'
                                padding='none'
                                width='21%'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                {`${answer.factors[1]} ${operationSign} ${answer.factors[0]}`}
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='center'
                                width='8%'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                =
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='left'
                                width='17%'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                {answer.answer}
                            </TableCell>
                            <TableCell
                                padding='none'
                                align='left'
                                width='46%'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                {answer.isCorrect ? (
                                    ''
                                ) : (
                                    <p>
                                        powinno być
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

export default AnswersListMath