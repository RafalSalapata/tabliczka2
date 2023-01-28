import { getDocs, orderBy, query, where } from 'firebase/firestore'
import { recordsCollection, RecordTypeWithId } from 'firebase-config'

const getDateBackByDays = (daysBack: number): Date => {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysBack)
}

const minTwoDigits = (arg: number): string => {
    if (arg >= 10 || arg < 0) return arg.toString()
    else return `0${arg}`
}

export const getRecords = async (daysBack: number): Promise<RecordTypeWithId[]> => {
    const q = query(
        recordsCollection,
        where('createdAt', '>', getDateBackByDays(daysBack)),
        orderBy('createdAt', 'desc')
    )

    const data = await getDocs(q)
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const durationToString = (duration: number): string => {
    const durationInSec = Math.ceil(duration / 1000)
    const m = Math.floor(durationInSec / 60)
    const s = durationInSec - 60 * m
    return `czas: ${m}:${minTwoDigits(s)}`
}

export const rangeToString = ([range_min, range_max]: [number, number]) => {
    return `(${range_min} - ${range_max})`
}

export const createdAtToString = (record: RecordTypeWithId) => {
    const createdAt = record.createdAt.toDate()
    const y = createdAt.getFullYear()
    const m = minTwoDigits(createdAt.getMonth() + 1)
    const d = minTwoDigits(createdAt.getDate())
    const h = minTwoDigits(createdAt.getHours())
    const min = minTwoDigits(createdAt.getMinutes())

    return `${d}.${m}.${y} ${h}:${min}`
}

export const ratingValue = (ratio: number) => {
    let rating: number

    switch (true) {
        case ratio > 0.9:
            rating = 5
            break
        case ratio > 0.8:
            rating = 4
            break
        case ratio > 0.7:
            rating = 3
            break
        case ratio > 0.5:
            rating = 2
            break
        default:
            rating = 1
            break
    }

    return rating
}
