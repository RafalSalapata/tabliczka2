import { useContext } from 'react'
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
import { EnAnswer } from 'types/enTypes'
import { LanguageValue } from 'types/appTypes'
import { sxClasses } from './styles'

interface AnswersListEnProps {
    answerList: EnAnswer[]
    topMarginOn?: boolean
}

const AnswersListEn: React.FC<AnswersListEnProps> = ({ answerList, topMarginOn = true }) => {
    const { appState, localization } = useContext(AppContext)

    return (
        <TableContainer
            component={Paper}
            sx={[sxClasses.container, topMarginOn && sxClasses.topMargin]}
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
                        const questionPhrase =
                            appState.language === LanguageValue.pl
                                ? answer.phrase.pl
                                : answer.phrase.cz
                        return (
                            <TableRow
                                key={answer.id}
                                sx={[!answer.isCorrect && sxClasses.tableRow]}
                            >
                                <TableCell
                                    align='right'
                                    width='10%'
                                    padding='none'
                                    sx={[
                                        sxClasses.tableCell,
                                        !answer.isCorrect && sxClasses.colorWhite,
                                    ]}
                                >
                                    {answer.id}.
                                </TableCell>
                                <TableCell
                                    align='left'
                                    width='90%'
                                    padding='none'
                                    sx={[
                                        sxClasses.tableCell,
                                        sxClasses.leftPadding,
                                        !answer.isCorrect && sxClasses.colorWhite,
                                    ]}
                                >
                                    {`${questionPhrase} = "${answer.answer}"${
                                        answer.isCorrect
                                            ? ''
                                            : `, ${
                                                  localization.summary.shouldBe
                                              } ${answer.phrase.en.join(', ')}`
                                    }`}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AnswersListEn
