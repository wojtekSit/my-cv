import React from 'react';
import RedirectButton from './RedirectButton';

const EducationCards = () => {
    const urls = [
        "https://elektryk.opole.pl/",
        "https://rekrutacja.pwr.edu.pl/wyszukiwarka-kierunkow-studiow/automatyka-i-robotyka/",
        "https://rekrutacja.pwr.edu.pl/wyszukiwarka-kierunkow-studiow/geoinformatyka/",
    ];

    return (
        <div tabIndex={0} className="collapse glass backdrop-filter-none collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Education</div>
            <div className="collapse-content">
                <div id="education-cards" className="flex flex-col md:grid md:grid-cols-3 gap-4">
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Tadeusz Kościuszko Electrical Schools Complex in Opole</h2>
                            <p>Specialization: Information Technology</p>
                            <p className='font-semibold'>09.2016-07.2020</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[0]}>
                                    Go to Website
                                </RedirectButton>
                            </div>
                        </div>
                    </div>
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Wrocław University of Science and Technology</h2>
                            <p>Major: Automation and Robotics</p>
                            <p className='font-semibold'>10.2020-07.2021</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[1]}>
                                    Go to Website
                                </RedirectButton>
                            </div>
                        </div>
                    </div>
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Wrocław University of Science and Technology</h2>
                            <p>Major: Geoinformatics</p>
                            <p className='font-semibold'>10.2021 - currently enrolled</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[2]}>
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

export default EducationCards;
