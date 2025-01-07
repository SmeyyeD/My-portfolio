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
        <div className={`bg-[#ecedeb] min-h-[550px] flex flex-col items-center`}>
            <h3 className="text-center text-3xl mt-[70px]">{profileHeading}</h3>
            <section className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-8 px-4 sm:px-6 md:px-8 w-full max-w-[1200px]">
                {/* Info Card */}
                <div className="bg-white w-full max-w-[508px] rounded-[12px] px-8 py-8 h-64 space-y-4 shadow-gray-500/200 shadow-gray-700 shadow-[15px_15px_15px_rgba(0,0,0,0.6)]">
                    <h4 className="text-lg text-rose-500">{basicInfoText}</h4>
                    <table className="w-full text-xs sm:text-sm md:text-base">
                        <tbody>
                            <tr className="space-y-2">
                                <td><strong>{dateOfBirth[0]}</strong></td>
                                <td>{dateOfBirth[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td className="pr-8 sm:pr-16"><strong>{currentLocation[0]}</strong></td>
                                <td>{currentLocation[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td><strong>{education[0]}</strong></td>
                                <td className="max-w-[300px] truncate">{education[1]}</td>
                            </tr>
                            <tr className="space-y-2">
                                <td><strong>{preferredRole[0]}</strong></td>
                                <td>{preferredRole[1]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-start space-y-4 text-xs sm:text-sm w-full sm:w-[400px] lg:w-[500px] mt-4 sm:mt-0 mb-2">
                    <h3 className="font-bold">{aboutMe}</h3>
                    <p className="break-words">{aboutMe2}</p>
                    <p className="break-words">{aboutMe3}</p>
                </div>
            </section>
        </div>
    )
}

export default Profile;