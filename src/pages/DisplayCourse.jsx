import { useSelector } from "react-redux"
import Card from "./Card";
import UsersCourse from "../student/UsersCourse";


function DisplayCourse() {

    const { currentUser } = useSelector((state) => state.user);

    const show = () => {
        if( currentUser && currentUser.role === "FOUNDER"){
            return <Card /> 
        }
        else return <UsersCourse />
    }

  return (
    <div>
        {show()}
    </div>
  )
}

export default DisplayCourse