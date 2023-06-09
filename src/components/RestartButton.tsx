import '../App.css'

//Restart Button component
export default function RestartButton(props: any) {
    function handleOnClick() {
      props.setBoard(Array(9).fill(''))
    }
    return <button className="restartButton" onClick={handleOnClick}>Restart</button>
  }