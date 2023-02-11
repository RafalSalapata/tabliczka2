import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import AppContext from 'contexts/AppContext'
import { useContext } from 'react'
import { MathAnswer } from 'types/mathTypes'
import { sxClasses } from './styles'

interface AnswersListMathProps {
    answerList: MathAnswer[]
    operationSign: string
    topMarginOn?: boolean
}

const AnswersListMath: React.FC<AnswersListMathProps> = ({
    answerList,
    operationSign,
    topMarginOn = true,
}) => {
    const { localization } = useContext(AppContext)

    return (
        <TableContainer
            component={Paper}
            sx={[sxClasses.container, topMarginOn && sxClasses.zeroTopMargin]}
        >
            <Table size='small' aria-label='answer list'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left' colSpan={6} sx={{ fontSize: '20px' }}>
                            {localization.summary.answers}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {answerList.map((answer) => {
                        const cellSx = [
                            sxClasses.tableCell,
                            !answer.isCorrect && sxClasses.colorWhite,
                        ]
                        return (
                            <TableRow
                                key={answer.id}
                                sx={[!answer.isCorrect && sxClasses.tableRow]}
                            >
                                <TableCell align='right' width='8%' padding='none' sx={cellSx}>
                                    {answer.id}.
                                </TableCell>
                                <TableCell align='right' width='21%' padding='none' sx={cellSx}>
                                    {`${answer.factors[1]} ${operationSign} ${answer.factors[0]}`}
                                </TableCell>
                                <TableCell padding='none' align='center' width='8%' sx={cellSx}>
                                    =
                                </TableCell>
                                <TableCell padding='none' align='left' width='17%' sx={cellSx}>
                                    {answer.answer}
                                </TableCell>
                                <TableCell padding='none' align='left' width='46%' sx={cellSx}>
                                    {answer.isCorrect ? (
                                        ''
                                    ) : (
                                        <p>
                                            {localization.summary.shouldBe}
                                            <b style={{ marginLeft: '10px' }}>
                                                {answer.correctAnswer}
                                            </b>
                                        </p>
                                    )}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnswersListMath
