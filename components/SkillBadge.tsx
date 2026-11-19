export default function SkillBadge({ skill }: { skill: string }) {
    return (
        <span className="border rounded-lg px-3 py-2">{skill}</span>
    )
}