import React from 'react'
import languagesData from '../data';


function Footer() {
    const { orientation, github, personalBlog, linkedin, email } = languagesData.tr.footer;
    console.log(orientation);
    return (
        <div className='h-40'>
            <div className="flex justify-center items-center mt-40 gap-10">
                <div className="text-center text-3xl leading-normal">
                    {orientation.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>

                <div className="text-left text-xl">
                    <p><a href="https://github.com/SmeyyeD" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{github}</a></p>
                    <p>{personalBlog}</p>
                    <p><a href="https://www.linkedin.com/in/s%C3%BCmeyye-dan%C4%B1%C5%9Fmaz-b15993312/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{linkedin}</a></p>
                    <p className='text-red-700'>{email}</p>
                </div>
            </div>
        </div>
    )
}


export default Footer;