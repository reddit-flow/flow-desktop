import * as moment from 'moment'

export function timeSince(timeStamp: number) {
    return moment.unix(timeStamp).fromNow()
}