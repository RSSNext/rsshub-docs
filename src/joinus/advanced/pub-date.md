---
sidebar_position: 4
---

# Date Handling

When you visit a website, the website usually provides you with a date or timestamp. This tutorial will show you how to properly handle them in your code.

## The Standard

### No Date

-   **Do not** add a date when a website does not provide one. Leave the `pubDate` field undefined.
-   Parse only the date and **do not add a time** to the `pubDate` field when a website provides a date but not an accurate time.

The `pubDate` field must be a [Temporal.Instant](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant).

## Date utilities

Date utilities are in `@/utils/time`.

### Date and Time

`parseDate` parses a date string or a timestamp and returns a [Temporal.Instant](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant).

```js
import { parseDate } from '@/utils/time';

const pubDate = parseDate('2020/12/30');
// OR
const pubDate = parseDate('30.12.2020', 'DD.MM.YYYY');
```

`parseDate` returns `undefined` when the input is empty (`''`, `undefined`, `null`) or will not parse.

:::tip

You can refer to the [day.js documentation](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens) for all available date formats.

Text in `[...]` will be skipped in `parseDate`.

```js
parseDate('12345 2020-12-30', '[xxxxx] YYYY-MM-DD'); // 2020-12-30T00:00:00Z
parseDateStrict('2020-12-30T13:00', 'YYYY-MM-DD[T]HH:mm'); // 2020-12-30T13:00:00Z
```

:::

### Strict mode

Separators are not compared and text after the last token is ignored. Use `parseDateStrict` if you want the full input to match the format exactly.

```js
import { parseDate, parseDateStrict } from '@/utils/time';

parseDate('2020-12-30 posted', 'YYYY-MM-DD'); // 2020-12-30T00:00:00Z
parseDateStrict('2020-12-30 posted', 'YYYY-MM-DD'); // undefined
```

### Relative Date

If you need to parse a relative date, use `parseRelativeDate`. Input that is not a relative date goes to `parseDate` with the same format and time zone.

```js
import { parseRelativeDate } from '@/utils/time';

const pubDate = parseRelativeDate('2 days ago');
const pubDate = parseRelativeDate('day before yesterday 15:36');
```

### Time Zone

When parsing dates from websites, it's important to consider time zones. Some websites may not convert the time zone according to the visitor's location, resulting in a date that doesn't accurately reflect the user's local time. To avoid this issue, you can manually specify the time zone.

When the date has no offset, `parseDate` reads it as UTC. To manually specify the time zone in your code, pass it after the date or after the format:

```js
import { parseDate } from '@/utils/time';

const pubDate = parseDate('2020/12/30 13:00', +1); // 2020-12-30T12:00:00Z
// OR
const pubDate = parseDate('30.12.2020 13:00', 'DD.MM.YYYY HH:mm', +1);
// OR
const pubDate = parseDate('30.12.2020 13:00', 'DD.MM.YYYY HH:mm', 'Europe/Paris');
```

The time zone is an offset in hours (`+1`, `-3.5`) or an [IANA time zone name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (`'Europe/Paris'`).

An offset in the date string wins over the time zone you pass: `parseDate('2020-12-30T13:00:00+08:00', +1)` is `2020-12-30T05:00:00Z`.

`parseDateStrict` and `parseRelativeDate` take the time zone in the same way. For `parseRelativeDate`, it is also the time zone in which a day such as `yesterday` starts and ends:

```js
const pubDate = parseRelativeDate('yesterday 15:36', +8);
```

### Other Date Operations

A `Temporal.Instant` does not work with `<`, `>`, `-` or `Number()`. Use the following instead:

```js
import { compareDates, formatDate } from '@/utils/time';

// Latest first. Missing date is sorted as the oldest
items = items.toSorted((a, b) => compareDates(b.pubDate, a.pubDate));

// Output a date string. Time zone is optional and defaults to UTC
formatDate(pubDate, 'YYYY-MM-DD HH:mm', +8); // '2020-12-30 21:00'

// The current time, and date arithmetic
const now = Temporal.Now.instant();
const yesterday = now.subtract({ hours: 24 });
```

`formatDate` uses the tokens of `parseDate`, with only `SSS` for the fraction of a second. It also has `d` / `ddd` / `dddd` for the weekday and `z` for the time zone abbreviation.
