import '../App.css'

// The square component
export default function Square(props: any) {
    return <button className="square" onClick={props.onSquareClick}>{props.content}</button>
}
// End of square component

