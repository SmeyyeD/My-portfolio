import React from 'react'
import languagesData from '../data';

function Profile() {
    const { profileHeading,
        basicInfoText,
        dateOfBirth,
        currentLocation,
        education,
        preferredRole,
        aboutMe, aboutMe2, aboutMe3 } = languagesData.tr.profile;

    return (
        <div className={`bg-[#ecedeb] h-[30rem] pt-8`}>
            <h3 className="text-center text-3xl mt-8">{profileHeading}</h3>
            <section className="flex justify-center items-center gap-8 mt-8 ">
                <div className='bg-white w-[508px] rounded-[12px] px-8 py-8 h-64 space-y-4 shadow-gray-500/200 shadow-gray-700 shadow-[15px_15px_15px_rgba(0,0,0,0.6)]'>
                    <h4 className='text-lg text-rose-500'>{basicInfoText}</h4>
                    <table className="w-full">
                        <tbody>
                            <tr className="space-y-2">
                                <td>
                                    <strong>{dateOfBirth[0]}</strong>
                                </td>
                                <td>{dateOfBirth[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td style={{ paddingRight: "40px" }}>
                                    <strong>{currentLocation[0]}</strong>
                                </td>
                                <td>{currentLocation[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td>
                                    <strong>{education[0]}</strong>
                                </td>
                                <td style={{ maxWidth: "300px" }}>{education[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td>
                                    <strong>{preferredRole[0]}</strong>
                                </td>
                                <td>{preferredRole[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-start space-y-4 text-xs" style={{ maxWidth: "400px" }}>
                    <h3 className='font-bold '>{aboutMe}</h3>
                    <p>{aboutMe2}</p>
                    <p>{aboutMe3}</p>
                </div>
            </section>
        </div>
    )
}

export default Profile;