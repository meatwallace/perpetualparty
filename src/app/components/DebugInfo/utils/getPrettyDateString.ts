import { format } from 'date-fns';

const PRETTY_DATE_FORMAT = 'KK:mm:ssaaa dd/MM/yy';

export function getPrettyDateString(date: Date): string {
  return format(date, PRETTY_DATE_FORMAT);
}
