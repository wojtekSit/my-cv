import React from 'react';
import RedirectButton from './RedirectButton';

const EducationCards = () => {
    const urls = [
        "https://sklep.sfd.pl"
    ];
    return (
        <div id="education-cards" className="flex grid-rows-3 grid-flow-col gap-16">
            <div className="card bg-primary text-primary-content w-96">
                <div className="card-body">
                    <h2 className="card-title">Private project for internal trip planning within a company</h2>
                    <p>signed NDA</p>
                    <p>Front end developer </p>
                    <p>Technology: Reactjs</p>
                    <p>07.2022-02.2023</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src="https://sfdsa.pl/wp-content/uploads/2023/09/sfd-img-1024x766.jpg"
                        alt="SFD" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">SFD</h2>
                    <p>Position: development of sklep.sfd.pl</p>
                    <p>Technology: .NET</p>
                    <p>04.2023-03.2024</p>
                    <div className="card-actions justify-end">
                        <RedirectButton url={urls[0]}>
                            Go to Website
                        </RedirectButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EducationCards;