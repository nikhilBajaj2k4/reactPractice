import './App.css';
import { useState } from "react"

function App() {

  const [names, setNames] = useState([{
    name: 'Gilfoyl',
    session: true,
    gamestag: 44,
  }])

const session = names[0].session


  function handleClick(){
    setNames(prevArray => [{...prevArray, session: !session}])
    console.log("changed")
  }

  return (
    <div className="App">
        <button onClick={handleClick}>{!session ? "eye" : "eyeHide"}</button>
        {session && <img className="er" src='https://assets3.thrillist.com/v1/image/2845547/1584x1056/scale;webp=auto;jpeg_quality=60;progressive.jpg'></img>}
    </div>
  );
}

export default App;
