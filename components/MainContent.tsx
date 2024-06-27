import React from 'react';
import RedirectButton from './RedirectButton';
import EducationCards from './EducationCards';
import WorkExperienceCards from './WorkExperienceCards';
import NoteableProjects from './NoteableProjects';

const MainContent = () => {
    return (
        <div id="main-container" className="relative z-10 flex min-h-screen flex-col items-center p-24 bg-opacity-75 bg-gray-800 text-white">
            <h1 className="text-2xl">Wojciech Sitko ¯\_(ツ)_/¯</h1>
            <h2 className="font-bold text-2xl">Education</h2>
            <EducationCards />
            <h3 className="p-20 font-bold text-2xl">Work Experience</h3>
            <WorkExperienceCards />
            <h4 className="p-20 font-bold text-2xl">Noteable projects</h4>
            <NoteableProjects />
        </div>
    );
};

export default MainContent;
