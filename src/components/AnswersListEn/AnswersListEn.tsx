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
import { EnAnswer } from 'types/enTypes'
import { tableCellStyles } from 'utils/appUtils'

interface AnswersListEnProps {
    answerList: EnAnswer[]
    topMarginOff?: boolean
}

const AnswersListEn: React.FC<AnswersListEnProps> = ({ answerList, topMarginOff }) => {
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
                                width='10%'
                                padding='none'
                                sx={tableCellStyles(answer.isCorrect)}
                            >
                                {answer.id}.
                            </TableCell>
                            <TableCell
                                align='left'
                                padding='none'
                                width='90%'
                                sx={[tableCellStyles(answer.isCorrect), { pl: '8px' }]}
                            >
                                {`${answer.phrase.pl} = "${answer.answer}"${
                                    answer.isCorrect
                                        ? ''
                                        : `, powinno być ${answer.phrase.en.join(', ')}`
                                }`}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnswersListEn
