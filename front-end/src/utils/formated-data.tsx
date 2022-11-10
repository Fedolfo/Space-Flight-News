export const formatedData = (dataUnformated: string) => {
  const data = new Date(dataUnformated)
  const day = data.getDay() + 1
  const month = data.getMonth() + 1
  const yaer = data.getFullYear()
  const NUMBERTEN = 10
  return `${day > NUMBERTEN ? day : `0${day}`}/${month > NUMBERTEN ? month : `${month}`}/${yaer}`
}
