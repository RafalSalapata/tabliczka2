import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    IconButtonProps,
    Paper,
    Theme,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Rating, { IconContainerProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { RecordTypeWithId } from 'firebase-config'
import { createdAtToString, durationToString, rangeToString, ratingValue } from 'utils/resultsUtils'
import { useState } from 'react'
import AnswersList from 'components/AnswersList'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}))

const StyledRating = styled(Rating)(({ theme }) => ({
    alignItems: 'center',
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
    '& .MuiRating-iconFilled .MuiSvgIcon-root': {
        fontSize: '28px',
    },
}))

const customIcons: {
    [index: string]: { icon: React.ReactElement; label: string }
} = {
    1: { icon: <SentimentVeryDissatisfiedIcon color='error' />, label: 'Bardzo dobrze' },
    2: { icon: <SentimentDissatisfiedIcon color='error' />, label: 'Dobrze' },
    3: { icon: <SentimentSatisfiedIcon color='warning' />, label: 'Tak sobie' },
    4: { icon: <SentimentSatisfiedAltIcon color='success' />, label: 'Słabo' },
    5: { icon: <SentimentVerySatisfiedIcon color='success' />, label: 'Bardzo słabo' },
}

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
}

interface ResultCardProps {
    record: RecordTypeWithId
}

const ResultCard: React.FC<ResultCardProps> = ({ record }) => {
    const [expanded, setExpanded] = useState<boolean>(false)

    const handleExpandClick = () => {
        setExpanded((prev) => !prev)
    }

    return (
        <Card sx={(theme: Theme) => ({ marginTop: theme.shape.marginTop, width: '100%' })}>
            <CardHeader
                sx={{ '& MuiCardHeader-avatar': { marginRight: { xs: 1, sm: 2 } } }}
                avatar={
                    <Avatar
                        sx={(theme: Theme) => ({ bgcolor: theme.palette.primary.main })}
                        aria-label='avatar'
                    >
                        {record.userName[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <Paper
                        sx={(theme: Theme) => ({
                            width: { xs: '80px', sm: '90px' },
                            height: { xs: '38px', sm: '45px' },
                            mr: '8px',
                            mt: '4px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: theme.shadows[4],
                        })}
                    >
                        <Typography
                            variant='h5'
                            sx={{ fontSize: { xs: '21px', sm: '24px' }, fontWeight: 700 }}
                        >
                            {record.correctAnswerNo} / {record.testLength}
                        </Typography>
                    </Paper>
                }
                title={
                    <Typography
                        fontWeight={700}
                        variant='h6'
                        lineHeight={1.2}
                        sx={{ fontSize: { xs: '18px', sm: '23px' } }}
                    >
                        {record.userName}
                    </Typography>
                }
                subheader={
                    <Typography lineHeight={1.2} sx={{ fontSize: { xs: '11px', sm: '14px' } }}>
                        {createdAtToString(record)}
                    </Typography>
                }
            />
            <CardContent sx={{ paddingX: 2, paddingY: 0 }}>
                <Box sx={{ color: 'text.primary', fontSize: { xs: '17px', sm: '19px' } }}>
                    <b>{record.testType.itemText}</b> {rangeToString(record.testRange)},{' '}
                    <Typography
                        sx={{ display: 'inline-block', fontSize: { xs: '16px', sm: '18px' } }}
                    >
                        {durationToString(record.testDuration)}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions disableSpacing sx={{ paddingX: 2 }}>
                <StyledRating
                    value={ratingValue(record.correctAnswerNo / record.testLength)}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value: number) => customIcons[value].label}
                    highlightSelectedOnly
                    readOnly
                />
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='show more'
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent sx={{ paddingTop: 0 }}>
                    <AnswersList
                        answerList={record.answerList}
                        operationSign={record.testType.sign}
                        topMarginOff
                    />
                </CardContent>
            </Collapse>
        </Card>
    )
}
export default ResultCard
