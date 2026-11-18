const skills = ["Java", "Python", "Spring Boot", "FastAPI", "React", "MySQL"];
export default function Skills() {
    return (

        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => {
                    return (

                        <span className="border rounded-lg px-3 py-2" key={skill} >{skill}</span>
                    )
                }


        )}
            </div>
        </section>
    )
}