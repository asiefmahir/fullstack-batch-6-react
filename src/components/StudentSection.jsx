import AllStudentList from './AllStudentList'
import PresetStudentList from './PresetStudentList'
import AbsentStudentList from './AbsentStudentList'

const StudentSection = () => {


  return (
    <div className="student-section">
        <AllStudentList />
        <PresetStudentList />
        <AbsentStudentList />
    </div>
  )
}

export default StudentSection