import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

// ko에 한국 지역 등록
register('ko', koLocale);

export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}
