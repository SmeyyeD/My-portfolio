import React from 'react'
import languagesData from '../data.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const HeroSection = () => {
    const { greeting, intro, communication } = languagesData.tr.hero;
    return (

        <div className="min-h-screen flex justify-center items-center px-16 bg-[#ecedeb]" >
            <div className="grid grid-cols-2 items-center">
                <div className="text-left space-y-4 justify-center items-center">
                    <div>
                        <h1 className="text-2xl">{greeting}</h1>
                        <p className="font-bold text-xl tracking-wide leading-loose">{intro}</p>
                        <div className="flex justify-start space-x-4 mt-12">
                            <a href="https://www.linkedin.com/in/s%C3%BCmeyye-dan%C4%B1%C5%9Fmaz-b15993312/" target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedinIn} size="lg" className=" cursor-pointer size-6" />
                            </a>
                            <a href="https://github.com/SmeyyeD" target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="lg" className="text-gray-800 cursor-pointer size-6" />

                            </a>

                        </div>
                        <h5 className="text-sm mt-6">
                            {""}
                            {communication.split("Beni ekibine katılmaya davet et")[0]}
                            <br />
                            <span>Beni ekibine katılmaya davet et ➡️ </span>
                            <a
                                href="https://mail.google.com/mail/u/0/?pli#inbox?compose=lqrsljcHwCgSqZKGvMxQhzJgdzjQmqtqkBxnKWhHwLWPGRcSPDgZgndZnmNcWWPHskBWsFvFpGLNHDHSK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                smeyyedansmzz@gmail.com
                            </a>
                        </h5>

                    </div>
                </div>
                <div
                    className="absolute right-60 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] overflow-hidden rounded-xl shadow-[#EA2678_-20px_-20px]"
                >
                    <img
                        className="object-cover w-full h-full scale-110"
                        src="./images/foto.jpg"
                    />
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
