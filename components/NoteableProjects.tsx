import React from 'react';
import RedirectButton from './RedirectButton';

const NoteableProjects = () => {
    const urls = [
        "https://drive.google.com/file/d/1oa6j7kBmZLqF6Usa2fSDxYp8nREqw6_6/view?usp=drive_link",
        "https://github.com/wojtekSit/uniquegraphics"
    ]
    return (
        <div className="collapse glass backdrop-filter-none collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Noteable projects</div>
            <div className="collapse-content">
                <div id="notable-projects" className="flex flex-col items-center md:grid md:grid-cols-2 gap-4">
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Azure services - EsportsEarnings map diagram</h2>
                            <p>Using microsoft azure services to host a map visualizing the earnings in esports by a given year and date</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[0]}>
                                    Detailed lab report
                                </RedirectButton>
                            </div>
                        </div>
                    </div>
                    <div className="card glass text-primary-content w-full">
                        <div className="card-body">
                            <h2 className="card-title">Currently creating a website for a friends company</h2>
                            <p>developing and deploying</p>
                            <div className="card-actions justify-end">
                                <RedirectButton url={urls[1]}>
                                    Code
                                </RedirectButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteableProjects;
