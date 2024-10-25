const managementStaff = [
  {
    name: "Crystal Yang",
    role: "Founder & Chief Executive Officer",
    image: "/src/assets/images/about-us/volunteers/crystal.png",
  },
  {
    name: "Aruesha Srivastava",
    role: "Chief Operating Officer",
    image: "/src/assets/images/about-us/volunteers/aruesha.png",
  },
  {
    name: "Anmol Bal",
    role: "Chief Financial Officer",
    image: "/src/assets/images/about-us/volunteers/anmol.png",
  },
];

const designStaff = [
  {
    name: "Eleonora Paoli",
    role: "Lead Designer",
    image: "/src/assets/images/about-us/volunteers/eleonora.png",
  },
  {
    name: "Jessie Zhang",
    role: "UI/UX Designer",
    image: "/src/assets/images/about-us/volunteers/jessie.png",
  },
  {
    name: "Jhordan John",
    role: "UX/UI Designer",
    image: "/src/assets/images/about-us/volunteers/jhordan.png",
  },
  {
    name: "Samantha Rodrigues",
    role: "UX/UI Designer",
    image: "/src/assets/images/about-us/volunteers/samantha.png",
  },
  {
    name: "Katerina Rabadzhyiska",
    role: "UX/UI Designer",
    image: "/src/assets/images/about-us/volunteers/katerina.png",
  },
  {
    name: "Priya Patel",
    role: "Illustrator",
    image: "/src/assets/images/about-us/volunteers/priya.png",
  },
];

const developmentStaff = [
  {
    name: "Faruk Saridanismet",
    role: "Lead Developer",
    image: "/src/assets/images/about-us/volunteers/default1.svg",
  },
  {
    name: "Tim Chapin",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/tim.png",
  },
  {
    name: "Sherman Hamo Rasho",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/sherman.png",
  },
  {
    name: "Josephraj Velpula",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/josephraj.png",
  },
  {
    name: "Shrikrishna Bhat",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/shrikrishna.png",
  },
  {
    name: "Pedro Venâncio",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/pedro.png",
  },
  {
    name: "Alex Santos",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/alex.png",
  },
  {
    name: "Biruk Bizuayehu",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/biruk.png",
  },
  {
    name: "Guna Thangavel",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/default2.svg",
  },
  {
    name: "Rithik Kumar",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/default3.svg",
  },
  {
    name: "Riya Divakaran",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/riya.png",
  },
  {
    name: "May Lynn",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/may.png",
  },
  {
    name: "Eashan Sadasivuni",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/eashan.png",
  },
  {
    name: "Shyaka Chaste",
    role: "Developer",
    image: "/src/assets/images/about-us/volunteers/shyaka.png",
  },
];

const outreachStaff = [
  {
    name: "Asmitha Balamurugan",
    role: "Outreach",
    image: "/src/assets/images/about-us/volunteers/asmitha.png",
  },
  {
    name: "Abby He",
    role: "Outreach",
    image: "/src/assets/images/about-us/volunteers/abby.png",
  },
  {
    name: "Soujash Wawdhane",
    role: "Outreach",
    image: "/src/assets/images/about-us/volunteers/soujash.png",
  },
  {
    name: "Ilemona Jacob",
    role: "Outreach",
    image: "/src/assets/images/about-us/volunteers/default2.svg",
  },
  {
    name: "Leila Ismail",
    role: "Outreach",
    image: "/src/assets/images/about-us/volunteers/default1.svg",
  },
];

const socialmediaStaff = [
  {
    name: "Jeslyn Chang",
    role: "Social Media",
    image: "/src/assets/images/about-us/volunteers/jeslyn.png",
  },
  {
    name: "Yusuf Balikis",
    role: "Social Media",
    image: "/src/assets/images/about-us/volunteers/yusuf.png",
  },
  {
    name: "Vicky Yu",
    role: "Video Editor",
    image: "/src/assets/images/about-us/volunteers/vicky.png",
  },
  {
    name: "Carlos Renan",
    role: "Video Editor",
    image: "/src/assets/images/about-us/volunteers/carlos.png",
  },
];

export default function getAllVolunteers() {
  return [
    {
      staffTitle: "Management",
      staff: managementStaff,
    },
    {
      staffTitle: "Design",
      staff: designStaff,
    },
    {
      staffTitle: "Development",
      staff: developmentStaff,
    },
    {
      staffTitle: "Outreach",
      staff: outreachStaff,
    },
    {
      staffTitle: "Social Media",
      staff: socialmediaStaff,
    },
  ];
}
