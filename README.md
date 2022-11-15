# ТЗ компании Trood
## Проект запускать командами:

### `npm i`
### `npm start`

Запускать приложение в режиме разработки.\
Откроется  [http://localhost:3000](http://localhost:3000) в вашем браузере.

## ProgressBar демонстрация

![alt text](http://disk.yandex.ru/i/FvgILPHmSxzMqQ)

## Задание
Input props:
1. items - data array:
[
{name: 'Sold', color: '#BD1FBE', value: 677},
{name: 'Got free', color: '#FC64FF', value: 23},
...
]
2. height - number, bar line height
3. width - number, bar line width
Total is calculated by this data (as a sum of each value), and the bar line and its legend are built basing on fraction of value to total
0-value bars are not displayed, non-zero values always have not less than 1 bar (bars amount is an integer)
