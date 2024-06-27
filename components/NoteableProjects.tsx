import React from 'react';
import Image from 'next/image'
import RedirectButton from './RedirectButton';

const NoteableProjects = () => {
    const urls = [
        "https://drive.google.com/file/d/1oa6j7kBmZLqF6Usa2fSDxYp8nREqw6_6/view?usp=sharing",
        "https://github.com/wojtekSit/esportsearningsproject",
        "https://github.com/wojtekSit/uniquegraphics",
        "https://github.com/wojtekSit/PythonGame",
        "https://github.com/wojtekSit/my-cv"
    ];
    return (
        <div>
            <div className="collapse bg-primary">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-primary">EsportsEarnings</div>
                <div className="collapse-content bg-primary">
                    <p>The project involved the usage of open-layers js library to create a map diagram-visualization of top 100 most successful players salaries in a given year and video game</p>
                    <p>In later stages, the project got hosted on Azure webApp service, which required a setup of Azure for postgreSQL database and a virtual machine which served as a link between the database and webapp for serving WMS through Geoserver</p>
                    <RedirectButton url={urls[0]}>
                        detailed lab report.pdf
                    </RedirectButton>
                    <p>GitHub repository</p>
                    <RedirectButton url={urls[1]}>
                        Code
                    </RedirectButton>
                    <Image
                        src='/EsportsEarnings.webp'
                        alt="webmap"
                        quality={100}
                        sizes="100vw"
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>
            <div className="collapse bg-primary my-10">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-primary">UNIQUE GRAPHICS</div>
                <div className="collapse-content bg-primary">
                    <p>Website for a friends company</p>
                    <p>Project in progress</p>
                    <p>GitHub repository</p>
                    <RedirectButton url={urls[2]}>
                        Code
                    </RedirectButton>
                </div>
            </div>
            <div className="collapse bg-primary my-10">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-primary">Python rouge-like game</div>
                <div className="collapse-content bg-primary">
                    <p>Cute rogue-like video game made in pygame</p>
                    <p>GitHub repository</p>
                    <RedirectButton url={urls[3]}>
                        Code
                    </RedirectButton>
                </div>
            </div>
            <div className="collapse bg-primary my-10">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium bg-primary">This website XD</div>
                <div className="collapse-content bg-primary">
                    <p>Curriculum vitae C:</p>
                    <p>GitHub repository</p>
                    <RedirectButton url={urls[4]}>
                        Code
                    </RedirectButton>
                </div>
            </div>

        </div>
    );
};
export default NoteableProjects;