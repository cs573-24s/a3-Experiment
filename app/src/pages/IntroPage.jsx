export default function IntroPage() {

  //can add whatever you want in here as regular javascript
  let obj = [1, 2, 4, 5]

  //return must be ONE element (just wrap in div)
  return (
    <div>IntroPage!

      {
        //javascript code in here! returning something
        //puts that element on the page
        obj.map((i) => {
          <div>Div {i}</div>
        })
      }
    </div>
  )
}
