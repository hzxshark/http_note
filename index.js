const money = (num) => {
  const arr = String(num).split('.')
  const num2 = Number((arr[0] *100 )|| 0) + Number((arr[1] || '0').padEnd(2,'0'))
  console.log(num2, (arr[1] || '0').padEnd(2,'0'))
}

money(4.56)
