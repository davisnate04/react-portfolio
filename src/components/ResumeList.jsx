export default function ResumeList(props) {
    return (
        <ul className="resumeList">
            {props.proficiences.map(item => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    )
}