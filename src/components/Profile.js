import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(() => {
    //API Calls
    /// first render then useeffect called
    const timer = setInterval(() => {
      console.log("hiii");
    }, 1000);
    return ()=>{
      //this function is called when unmounting
      console.log("useeffect return")
      clearInterval(timer);
    }
  });
  return (
    <>
      <h1>Hello this is {props.name}</h1>
      <h2>React developer</h2>
      <h3>Count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount1(1);
        }}
      >
        count
      </button>
    </>
  );
};

export default Profile;
