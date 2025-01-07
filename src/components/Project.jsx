import React from 'react';
import languagesData from '../data';

function Project() {
    const projects = languagesData.tr.project;

    return (
        <div className="bg-[#f9fafb] min-h-screen p-6">
            <div className="text-center font-bold tracking-wide text-3xl mt-[50px] mb-10">
                {projects[0].projectHeader}
            </div>
            <div className="flex flex-wrap gap-[6rem] justify-center">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 ${index === 0 ? 'bg-[#DDEEFE]' : 'bg-[#D9F6F1]'} 
            p-8 rounded shadow-lg w-full sm:w-[calc(50%-1rem)] lg:w-[508px] h-auto`}
                    >
                        <div className="mb-4 space-y-4">
                            <h1 className="text-xl font-semibold">{project.name || project.name1}</h1>
                            <p className="text-gray-700">{project.description || project.description1}</p>
                        </div>
                        <div className="mt-4 space-y-4">
                            <div className="flex flex-wrap gap-2 mt-2">
                                {(project.skill || project.skill1 || []).map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="bg-white rounded-lg px-4 py-2 shadow"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between gap-10">
                            <a
                                href={project.githubLink || project.githubLink1 ? project.githubLink || project.githubLink1 : "#"}
                                className="font-bold block mb-2 mt-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.wievToGithub || project.wievToGithub1}
                            </a>
                            <a
                                href={project.appLink || project.appLink1 ? project.appLink || project.appLink1 : "#"}
                                className="font-bold mt-4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {project.application || project.application1} →
                            </a>
                        </div>
                        <img
                            className="mt-4 mx-auto rounded-lg object-cover 
                               max-w-full lg:max-w-[300px] lg:max-h-[200px]"
                            src={project.photo}
                            alt={project.photo[0]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;