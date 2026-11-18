---
sidebar_position: 4
---

# 日期处理

当你访问网站时，网站通常会提供一个日期或时间戳。本指南将展示如何在代码中正确处理它们。

## 规范

### 没有日期

-   当网站没有提供日期时，**请勿**添加日期，`pubDate` 应当被留空。
-   当网站提供一个日期但没有准确的时间时，只需要解析日期并**不要添加时间**到 `pubDate` 中。

`pubDate` 必须是 [Temporal.Instant](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant)。

## 日期工具

日期工具位于 `@/utils/time`。

### 日期时间

`parseDate` 解析日期字符串或时间戳，并返回一个 [Temporal.Instant](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant)。

```js
import { parseDate } from '@/utils/time';

const pubDate = parseDate('2020/12/30');
// 或
const pubDate = parseDate('30.12.2020', 'DD.MM.YYYY');
```

当输入为空（`''`、`undefined`、`null`）或无法解析时，`parseDate` 返回 `undefined`。

:::tip

你可以参考 [day.js 文档](https://day.js.org/docs/zh-CN/parse/string-format#支持的解析占位符列表) 查看所有可用日期格式。

`parseDate` 会跳过 `[...]` 中的文本。

```js
parseDate('12345 2020-12-30', '[xxxxx] YYYY-MM-DD'); // 2020-12-30T00:00:00Z
parseDateStrict('2020-12-30T13:00', 'YYYY-MM-DD[T]HH:mm'); // 2020-12-30T13:00:00Z
```

:::

### 严格模式

分隔符不会被比较，最后一个占位符之后的文本会被忽略。如果你需要整个输入与格式完全匹配，请使用 `parseDateStrict`。

```js
import { parseDate, parseDateStrict } from '@/utils/time';

parseDate('2020-12-30 posted', 'YYYY-MM-DD'); // 2020-12-30T00:00:00Z
parseDateStrict('2020-12-30 posted', 'YYYY-MM-DD'); // undefined
```

### 相对日期

如果你需要解析相对日期，请使用 `parseRelativeDate`。不是相对日期的输入会以相同的格式和时区交给 `parseDate` 处理。

```js
import { parseRelativeDate } from '@/utils/time';

const pubDate = parseRelativeDate('2天前');
const pubDate = parseRelativeDate('前天 15:36');
```

### 时区

从网站解析日期时，考虑时区非常重要。有些网站可能不会根据访问者的位置转换时区，导致日期不准确地反映用户的本地时间。为避免此问题，你可以手动指定时区。

当日期不含偏移量时，`parseDate` 会将其视为 UTC。要在代码中手动指定时区，请将时区放在日期或格式之后：

```js
import { parseDate } from '@/utils/time';

const pubDate = parseDate('2020/12/30 13:00', +1); // 2020-12-30T12:00:00Z
// 或
const pubDate = parseDate('30.12.2020 13:00', 'DD.MM.YYYY HH:mm', +1);
// 或
const pubDate = parseDate('30.12.2020 13:00', 'DD.MM.YYYY HH:mm', 'Europe/Paris');
```

时区可以是以小时为单位的偏移量（`+1`、`-3.5`），也可以是 [IANA 时区名称](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)（`'Europe/Paris'`）。

日期字符串自带的偏移量优先于你传入的时区：`parseDate('2020-12-30T13:00:00+08:00', +1)` 的结果是 `2020-12-30T05:00:00Z`。

`parseDateStrict` 和 `parseRelativeDate` 以同样的方式接受时区。对于 `parseRelativeDate`，它同时也是 `昨天` 这类日期开始和结束所依据的时区：

```js
const pubDate = parseRelativeDate('昨天 15:36', +8);
```

### 其他日期操作

`Temporal.Instant` 不能使用 `<`、`>`、`-` 或 `Number()`。请改用以下方法：

```js
import { compareDates, formatDate } from '@/utils/time';

// 最新的在前，缺失的日期视为最旧
items = items.toSorted((a, b) => compareDates(b.pubDate, a.pubDate));

// 输出日期字符串，时区可选，默认为 UTC
formatDate(pubDate, 'YYYY-MM-DD HH:mm', +8); // '2020-12-30 21:00'

// 当前时间与日期运算
const now = Temporal.Now.instant();
const yesterday = now.subtract({ hours: 24 });
```

`formatDate` 使用 `parseDate` 的占位符，但小数秒只支持 `SSS`。此外还有表示星期的 `d` / `ddd` / `dddd` 和表示时区缩写的 `z`。
