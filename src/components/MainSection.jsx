import React from 'react'
import languagesData from '../data';

function MainSection() {
    const { skillHeading, currentSkills } = languagesData.tr.skill;
    return (
        <div className='text-center h-72'>
            <h2>{skillHeading}</h2>
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

        // <div className='bg-white border-4 h-[300px] flex items-center justify-center relative text-xl'>
        //     <h1 className='absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-10 text-xl'>{skill}</h1>
        //     <div className='flex space-x-12 mt-12'>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/JS.jpg" alt="JavaScript" />
        //             <p className='mt-2 text-zinc-400'>JAVASCRİPT</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/REACT.jpg" alt="React" />
        //             <p className='mt-2 text-zinc-400'>REACT</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/REDUX.png" alt="Redux" />
        //             <p className='mt-2 text-zinc-400'>REDUX</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/NODE.jpg" alt="Node.js" />
        //             <p className='mt-2 text-zinc-400'>NODE.JS</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/VSCODE.jpg" alt="VS Code" />
        //             <p className='mt-2 text-zinc-400'>VS CODE</p>
        //         </div>
        //         <div className='flex flex-col items-center'>
        //             <img className='w-[100px] h-[100px]' src="./images/FİGMA.jpg" alt="Figma" />
        //             <p className='mt-2 text-zinc-400'>FİGMA</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default MainSection;