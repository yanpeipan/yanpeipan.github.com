1亿条数据用string存储 9727M

| Key             | Value |
| --------------- | ----- |
| Test_1008_dba_1 | 12345 |
| Test_1008_dba_2 | 23456 |
| Test_1008_sre_1 | 34567 |
| Test_1008_sre_2 | 45678 |

1亿条string改为hash存储 1495M

|Key|Field|Value|
|---|---|---|
|Test_1008_dba|1|12345|
|Test_1008_dba|2|23456|
|Test_1008_sre|1|34567|
|Test_1008_sre|2|45678|