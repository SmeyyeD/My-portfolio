import React from 'react'
import languagesData from '../data';

function MainSection() {
    const { skillHeading, currentSkills } = languagesData.tr.skill;
    return (
        <div className="text-center min-h-[20rem] font-bold text-xl">
            <h2 className=" mt-8 sm:mt-[100px]">{skillHeading}</h2>
            <section className="flex flex-wrap gap-12 justify-center pt-8">
                {currentSkills.map((skill, index) => (
                    <div key={index}>
                        <img
                            src={`images/${skill.toLowerCase()}.png`}
                            alt={""}
                            className="w-[150px] h-[150px] object-contain mb-10"
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default MainSection;