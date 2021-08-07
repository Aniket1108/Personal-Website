import jobportal from "../../img/jobportal.PNG"
import personalwebsite from "../../img/personalwebsite.png"
import skillbandlanding from "../../img/skillbandlanding.png"

export const ProjectDetails = [
    {
        name:"SkillBand",
        description:"Landing page of skillband event - Event date 08 Aug 2021",
        github:false,
        img:<img src={skillbandlanding} alt="skillband"/>
    },
    {
        name:"Personal Website",
        description:"personal website to show info and portfolio",
        github:true,
        githublink:"https://github.com/Aniket1108/Job-Portal",
        img:<img src={personalwebsite} alt="job portal"/>
    },
    {
        name:"Job Portal",
        description:"Pixel 4",
        github:true,
        githublink:"https://github.com/Aniket1108/Job-Portal",
        img:<img src={jobportal} alt="job portal"/>
    }
]