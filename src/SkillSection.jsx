/**
 * props = {
 *      skills: ['js', 'react'],
 *      name: "Mahir"
 * }
 */

const SkillSection = (props) => {
    console.log(props)
    return (
        <div className="skills">
            <h2>{props.name} SKills:</h2>
            <ul>
                {props.skills.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <h2>{props.demo?.a}</h2>
        </div>
    );
};


export default SkillSection
