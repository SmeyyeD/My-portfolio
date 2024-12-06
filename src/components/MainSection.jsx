import React from 'react'
import languagesData from '../data';

function MainSection() {
    const { skillHeading, currentSkills } = languagesData.tr.skill;
    return (
        <div className='text-center h-72 font-bold text-xl'>
            <h2 className='mt-6'>{skillHeading}</h2>
            <section className='flex gap-10 justify-center pt-8 '>
                {
                    currentSkills.map
                        ((skill, index) => (
                            //image files' name must be correct: skillname-logo.png
                            <div key={index}>
                                <img src={`images/${skill.toLowerCase()}.png`} alt={""} />

                            </div>
                        ))}
            </section>
        </div>
    )
}

export default MainSection;