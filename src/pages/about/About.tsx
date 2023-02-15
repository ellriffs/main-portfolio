import Header from "../../components/header/Header";
import main from "../../assets/about-main.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <img className="main-pic" alt="black and white riffs" src={main} />
      <p className="about-title">ABOUT</p>
      <p className="about-subtitle">WHERE IT ALL BEGAN</p>
      <p className="about-body">
        MY JOURNEY INTO TECH BEGAN IN 2020 WITH THE WONDERFUL PEOPLE AT COMMAND
        SHIFT (FORMERLY MANCHESTER CODES). I ENROLLED MYSELF INTO A 6 MONTH
        BOOTCAMP WHERE I WOULD BE INTRODUCED TO THE WONDERFUL WORLD OF FULLSTACK
        DEVELOPMENT. STARTING FROM THE VERY BASICS OF HTML AND VANILLA
        JAVASCRIPT MOVING TO REACT, NODE , EXPRESS AND SQL. TO HONE THOSE SKILLS
        I THEN MOVED TO NORTHCODERS WHERE I HAD A SIMILAR EXPERIENCE, EXCEPT I
        WAS REALLY ABLE TO APPLY MY FOUNDATIONAL KNOWLEDGE AND BUILD UPON THAT
        TO GAIN MORE CONFIDENCE IN MY SKILLSET. SINCE MOVING ON FROM THE BASICS
        AND GENERAL FIRST TOUCHES OF THESE WONDERFUL TECHNOLOGIES, I HAVE BECOME
        MORE INVESTED IN THE SCIENCE OF CODING. PERFECTING THE ART OF
        ALGORITHIMS SO ALLOW FOR FASTER CODE AND BETTER PERFORMANCE IN Y WORK.
        THE NEUENCES OF CODING IS WHAT REALLY PEAKS MY INTEREST THESE DAYS,...
      </p>
      <p className="professional-life">PROFESSIONAL LIFE...</p>
      <p className="professional-body">
        SINCE LEAVING MY BOOT CAMP EDUCATION , I HAVE STARTED A WONDERFUL CAREER
        AT NAIMURI. HERE IVE REALLY BEEN ABLE TO IMMERSE MYSELF IN WIDE VARIETY
        OF TECHNOLOGIES, CLOUD COMPUTING SYSTEMS, CONTRIBUTING TOWARDS RE-USABLE
        LIBRARIES. I HAVE DISCOVERED AND PRACTICED AGILE WAYS OF WORKING, BEEN
        INVOLVED IN SOME POSSIBLE WORLD CHANGING PROJECTS (FROM CONCEPTION TO
        DELIVERY). BEEN ABLE TO HELP WITH INTERNAL INNOVATION AND OVERALL GET
        CLOSER TO THE MISSION THAT THE COMPANY IS WORKING TOWARDS AND STANDS BY.
        MY CAREER (ALTHOUGH STILL IN ITS INFANCY) HAS PROGRESSED MASSIVELY IN
        SUCH A SHORT SPACE OF TIME AND I AM LOOKING FORWARD TO WHAT LIES AHEAD.
        I HAD A SHORT TIME TEACHING FRONT END DEVELOPMENT AT THE COMMAND SHIFT
        BOOTCAMP AS A WAY OF SAYING THANK YOU AND GIVING BACK TO THE COMPANY
        THAT REALLY PUSHED ME INTO THIS AND ENABLED ME TO CHANGE MY LIFE
      </p>
    </>
  );
};

export default About;