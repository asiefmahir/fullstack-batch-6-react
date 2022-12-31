import {useContext} from "react";
import {StudentContext} from '../contexts/Student'
import AllStudentList from './AllStudentList'
import PresetStudentList from './PresetStudentList'
import AbsentStudentList from './AbsentStudentList'

const StudentSection = () => {

  const {students, setStudents} = useContext(StudentContext)

    const toggleHandler = (id) => {
         const newStudentList = students.map(item => {
            if (item.id === id) {
               item.isPresent = !item.isPresent
            }

            return item
        })

        setStudents(newStudentList);
    }
  return (
    <div className="student-section">
        <AllStudentList />
        <PresetStudentList 
          toggleHandler={toggleHandler}
        />
        <AbsentStudentList
          toggleHandler={toggleHandler}
        />
    </div>
  )
}

export default StudentSection