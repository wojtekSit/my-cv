import React from 'react';
import RedirectButton from './RedirectButton';

const WorkExperienceCards = () => {
    const urls = [
        "https://sklep.sfd.pl"
    ]

    return (
        <div tabIndex={0} className="collapse glass backdrop-filter-none collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Work experience</div>
            <div className="collapse-content">
                <div id="work-experience-cards" className="flex flex-col md:grid md:grid-cols-2 gap-4">
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Non disclosure agreement</h2>
                            <p>Front end developer</p>
                            <p className='font-semibold'>07.2022-02.2023</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">SFD</h2>
                            <p>Full stack developer</p>
                            <p className='font-semibold'>04.2023-03.2024</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[0]}>
                                    Go to Website
                                </RedirectButton>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkExperienceCards;
