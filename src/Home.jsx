import { useContext } from "react";
import { myContext } from "./MyContext";


const Home = () => {

    const DATA = useContext(myContext);//the useContext hook is used to access the value from the myContext context
    const { count, setCount } = DATA;//count and setCount variables are extracted from the DATA object using object destructuring.

    //-----------count increasing function------------

    const handleIncrease = () => {
        setCount(count+1)
    }

    //------------count decreasing function------------

    const handleDecrement = () =>{
        if(count>0){
            setCount(count-1)
        }
    }

    return (

        <div style={{ textAlign: 'center' }}>

            <button onClick={handleIncrease}>INCREMENT</button><br />

            <h1>{count}</h1>

            <button onClick={handleDecrement}>DECREMENT</button>

        </div>
    )
}

export default Home;