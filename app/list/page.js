
export default function List() {
  let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
  let a = [20, 30, 40]
  let AAAA = [2,3,4]
  let b = AAAA.map((a, i) => {
    return 10
  })

  console.log(b)

  console.log(a[0])
  console.log(a[1])
  console.log(a[2])

  a[0] = 100

  console.log(a)

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {
        상품.map((a, i) => {
          return (
            <div className="food" key={i}>
              <img src={`/food${i}.png`}  className="food-img" />
              <h4>{a} $40</h4>
            </div>
          )
          
        })
      }
    </div>
  )
}
