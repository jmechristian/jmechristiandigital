import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem';

const ProjectHome = () => {
  return (
    <div className="flex-col">
      <NavBar />
      <ProjectItem projectNumber="01" projectColor="#090E24" />
      <ProjectItem projectNumber="02" projectColor="#50adb8" />
      <ProjectItem projectNumber="03" projectColor="#F3EE1B" />
      <ProjectItem projectNumber="04" projectColor="#59C9DC" />
      <Footer />
    </div>
  );
};

export default ProjectHome;
