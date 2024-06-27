import React from 'react';
import RedirectButton from './RedirectButton';

const EducationCards = () => {
    const urls = [
        "https://elektryk.opole.pl/",
        "https://rekrutacja.pwr.edu.pl/wyszukiwarka-kierunkow-studiow/automatyka-i-robotyka/",
        "https://rekrutacja.pwr.edu.pl/wyszukiwarka-kierunkow-studiow/geoinformatyka/",
    ];
    return (
        <ul className="timeline">
            <li>
                <div className="timeline-start">2016</div>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end timeline-box bg-primary">
                    <p>Tadeusz Kościuszko Technical School in Opole</p>
                    <RedirectButton url={urls[0]}>
                        Go to website
                    </RedirectButton>
                </div>

                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start">2020</div>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end timeline-box bg-primary">
                    Wrocław University of Science and Technology
                    <p>Major</p>
                    <RedirectButton url={urls[1]}>
                        Automation and Robotics
                    </RedirectButton>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start">2021</div>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end timeline-box bg-primary">
                    Wrocław University of Science and Technology
                    <p>Changed major to</p>
                    <RedirectButton url={urls[2]}>
                        Geoinformatics
                    </RedirectButton>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-start">2024</div>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <div className="timeline-end timeline-box bg-accent">Currently enrolled</div>
            </li>
        </ul>
    );
};
export default EducationCards;