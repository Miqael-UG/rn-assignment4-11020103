const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const FeaturedJobs = [
  {
    id: 1,
    name: "Frontend Developer",
    company: "Twitter",
    salary: "$105,000",
    companyLogo: require("../assets/logos/twitter.png"),
    location: "San Francisco, CA",
    backgroundColor: getRandomColor(),
  },
  {
    id: 2,
    name: "Backend Developer",
    company: "IBM",
    salary: "$110,000",
    companyLogo: require("../assets/logos/ibm.png"),
    location: "Armonk, NY",
    backgroundColor: getRandomColor(),
  },
  {
    id: 3,
    name: "Cloud Architect",
    company: "Oracle",
    salary: "$130,000",
    companyLogo: require("../assets/logos/oracle.png"),
    location: "Redwood City, CA",
    backgroundColor: getRandomColor(),
  },
  {
    id: 4,
    name: "Cybersecurity Analyst",
    company: "Cisco",
    salary: "$120,000",
    companyLogo: require("../assets/logos/cisco.png"),
    location: "San Jose, CA",
    backgroundColor: getRandomColor(),
  },
  {
    id: 5,
    name: "AI Research Scientist",
    company: "DeepMind",
    salary: "$140,000",
    companyLogo: require("../assets/logos/deepmind.png"),
    location: "London, UK",
    backgroundColor: getRandomColor(),
  },
  {
    id: 6,
    name: "Mobile Developer",
    company: "Spotify",
    salary: "$115,000",
    companyLogo: require("../assets/logos/spotify.png"),
    location: "Stockholm, Sweden",
    backgroundColor: getRandomColor(),
  },
  {
    id: 7,
    name: "Full Stack Developer",
    company: "Slack",
    salary: "$125,000",
    companyLogo: require("../assets/logos/slack.png"),
    location: "San Francisco, CA",
    backgroundColor: getRandomColor(),
  },
  {
    id: 8,
    name: "Database Administrator",
    company: "Salesforce",
    salary: "$110,000",
    companyLogo: require("../assets/logos/salesforce.png"),
    location: "San Francisco, CA",
    backgroundColor: getRandomColor(),
  },
];

export const PopularJobs = [
  {
    id: 1,
    name: "Project Manager",
    company: "Google",
    salary: "$100,000",
    companyLogo: require("../assets/logos/google.png"),
    location: "Mountain View, CA",
  },
  {
    id: 2,
    name: "Software Engineer",
    company: "Facebook",
    salary: "$120,000",
    companyLogo: require("../assets/logos/facebook.png"),
    location: "Menlo Park, CA",
  },
  {
    id: 3,
    name: "Data Scientist",
    company: "Amazon",
    salary: "$110,000",
    companyLogo: require("../assets/logos/amazon.png"),
    location: "Seattle, WA",
  },
  {
    id: 4,
    name: "UX Designer",
    company: "Apple",
    salary: "$105,000",
    companyLogo: require("../assets/logos/apple.png"),
    location: "Cupertino, CA",
  },
  {
    id: 5,
    name: "Marketing Manager",
    company: "Microsoft",
    salary: "$95,000",
    companyLogo: require("../assets/logos/microsoft.png"),
    location: "Redmond, WA",
  },
  {
    id: 6,
    name: "Product Manager",
    company: "Tesla",
    salary: "$115,000",
    companyLogo: require("../assets/logos/tesla.png"),
    location: "Palo Alto, CA",
  },
  {
    id: 7,
    name: "DevOps Engineer",
    company: "Netflix",
    salary: "$125,000",
    companyLogo: require("../assets/logos/netflix.png"),
    location: "Los Gatos, CA",
  },

  {
    id: 9,
    name: "HR Specialist",
    company: "LinkedIn",
    salary: "$85,000",
    companyLogo: require("../assets/logos/linkedin.png"),
    location: "Sunnyvale, CA",
  },
];
