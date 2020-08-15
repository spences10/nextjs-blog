import { format, parseISO } from 'date-fns'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>{format(date, 'yyyy MMM do')}</time>
  )
}
