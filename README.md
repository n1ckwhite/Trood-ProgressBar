#ТЗ компании Trood
## Проект запускать командами:

### `npm i`
### `npm start`

Запускать приложение в режиме разработки.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## `ProgressBar демонстрация`

![alt text](https://downloader.disk.yandex.ru/preview/cc9b0b34ac0811ed16371508cdab46d5e81007f8e59e5c13a378c56fb163432a/6335b42c/TUU-CvWnXRlgYMiyq5s3YUd0G-v99OaAtV5dhZDP8rYHiUjPJbG0Got1Ie3BV6mSkPRKCn7Q1a39Q043m-sMJQ%3D%3D?uid=0&filename=Screen%20Shot%202022-09-29%20at%202.04.21%20PM.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2560x1266)

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
