import React from 'react';
import RedirectButton from './RedirectButton';
import EducationCards from './EducationCards';
import WorkExperienceCards from './WorkExperienceCards';
import NoteableProjects from './NoteableProjects';
import SocialLinks from './SocialLinks';

const MainContent = () => {
    return (
        <div id="main-container" className="relative z-10 flex flex-col min-h-screen items-center p-4 md:p-24 bg-opacity-75  text-white">
            <h1 className="pt-20 p-4 text-xl md:text-2xl">Wojciech Sitko ¯\_(ツ)_/¯</h1>
            <SocialLinks />
            <h2 className="p-4 md:p-5 font-bold text-xl md:text-2xl"></h2>
            <EducationCards />
            <h3 className="p-4 md:p-5 font-bold text-xl md:text-2xl"></h3>
            <WorkExperienceCards />
            <h4 className="p-4 md:p-5 font-bold text-xl md:text-2xl"></h4>
            <NoteableProjects />
        </div>
    );
};

export default MainContent;
