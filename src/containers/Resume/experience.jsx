import A1 from "../../assets/ArtSocietyCert/Jun Kai resignation cert_page-0001.jpg";
import fball1 from "../../assets/ResultSlip/extraActivity/fball1.jpg";
import kumon1 from "../../assets/ResultSlip/extraActivity/kumon1.jpg";
import kumon2 from "../../assets/ResultSlip/extraActivity/kumon2.jpg";
import muzik from "../../assets/ResultSlip/extraActivity/muzik.jpeg";
import ppong1 from "../../assets/ResultSlip/extraActivity/ppong1.jpeg";
import schoolAward from "../../assets/ResultSlip/extraActivity/school.jpeg";
import vball1 from "../../assets/ResultSlip/extraActivity/vball1.jpg";
import vball2 from "../../assets/ResultSlip/extraActivity/vball2.jpeg";
import vball3 from "../../assets/ResultSlip/extraActivity/vball3.jpg";
import vball4 from "../../assets/ResultSlip/extraActivity/vball4.jpg";
import artSoc from "../../assets/ResultSlip/extraActivity/artAPU.jpg";
import apu1 from "../../assets/ResultSlip/apu1.jpg";
import apu2 from "../../assets/ResultSlip/apu2.jpg";
import igcse from "../../assets/ResultSlip/igcse.jpg";
import igcse2 from "../../assets/ResultSlip/igcse2.jpg";
import workie from "../../assets/ResultSlip/extraActivity/Workie (1).jpeg";
import workie2 from "../../assets/ResultSlip/extraActivity/Workie (2).jpeg";
import workie3 from "../../assets/ResultSlip/extraActivity/Workie (3).jpeg";

import APUBuilding from "../../assets/Building/APU.png";
import XCLBuilding from "../../assets/Building/XCL.png";

export const resumeExperience = {
  experience: [
    {
      title: "Art Society",
      role: "Event Manager",
      duration: "Mar 2024 - Sept 2025",
      responsibilities: [
        "Coordinated and hosted monthly art workshops",
        "Collaborated with local artists and students to organize live demonstrations and themed events",
        "Promoted events through posters, social media, and campus announcements",
      ],
      link: "https://www.instagram.com/artsociety.apu/",
      photo: [{ photo: artSoc, desc: "Resignation Letter" }],
    },
    {
      title: "Volleyball Club",
      role: "Session Assistance",
      duration: "May 2024 - Present",
      responsibilities: [
        "Guided new members during weekly volleyball sessions, focusing on basic skills and team coordination",
        "Provided one-on-one mentoring to beginners to help improve technique and confidence",
        "Helped organize friendly matches and inter-club competitions to build teamwork and engagement",
      ],
      link: "https://www.instagram.com/apu.volleyballl/",
      photo: [],
    },
    {
      title: "Others Certification",
      role: "Co-coricullar Certification ",
      duration: "-",
      responsibilities: [
        "These are the certificate/ achievement i have receive throughout my year at my highschool and outside of school"
      ],
      link : null,
      photo: [
        { photo: fball1, desc: "U15 Football Competition" },
        { photo: muzik, desc: "Piano Grade 3 Graduation" },
        { photo: ppong1, desc: "MSSPP Ping Pong Double Bronze" },
        {
          photo: schoolAward,
          desc: "Received Best Academic Comeback at Year 11",
        },
        { photo: vball2, desc: "U18 MSSPP 4th Place" },
        { photo: vball1, desc: "Friendly match at Sarawak, Miri" },
        { photo: vball3, desc: "" },
        { photo: vball4, desc: "" },
      ],
    },
  ],
  workExperience: [
    {
      title: "KUMON Bandar Tasek Mutiara",
      role: "Part Time Tuition Teacher",
      duration: "Jan 2025 - May 2025",
      responsibilities: [
        "Monitoring students (age range 5–14)",
        "Organizing student worksheets",
        "Working as a team",
      ],
      photo: [kumon1, kumon2],
    },
    {
      title: "Workie Workie, Kuchai Lama",
      role: "Part Time Receptionist",
      duration: "Event Based",
      responsibilities: [
        "Welcome and assist visitors/clients",
        "Open/closing shift",
        "Maintain the front desk in an organized manner",
        "Perform data entry (MS Excel)",
      ],
      photo: [workie, workie2, workie3],
    },
  ],
  education: [
    {
      title: "XCL International school, penang",
      subtitle: "Highschool",
      duration: "2016 - 2023",
      grade: "1A* 6A 2B 1C",
      cert: [igcse, igcse2],
      img: XCLBuilding,
      link: "https://www.bxcl.edu.my/",
    },
    {
      title: "Asia Pacific University",
      subtitle: "Diploma in Software Engineer",
      duration: "2023 - 2025",
      grade: "3.78 CGPA",
      cert: [apu1, apu2],
      img: APUBuilding,
      link: "https://www.apu.edu.my/",
    },
  ],
};
