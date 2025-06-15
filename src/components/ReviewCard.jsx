export function ReviewCard(props) {
  return (
    <div className="">
      <p className="">{props.content}</p>
      <p className="font-bold">Posted by : {props.author}</p>
    </div>
  )
}