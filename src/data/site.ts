import type { EducationEntry, Entry, SiteConfig } from "@/types";

export const site: SiteConfig = {
  "name": "Shamsul Haque Shuvo",
  "title": "Full-Stack Web Developer",
  "tagline": "Building modern, responsive, and scalable web applications.",
  "location": "Bangladesh",
  "photo": "/images/profile.jpg",
  "available": true,
  "email": "sh.shuvo2363@gmail.com",
  "github": "https://github.com/shshuvo63",
  "linkedin": "https://www.linkedin.com/in/shamsul-haque-shuvo/",
  "resume": "/resume.pdf",
  "twitter": "https://x.com/shshuvo63",
  "facebook": "https://www.facebook.com/shamsul.haque67",
  "phone": "01581822530",
  "whatsapp": "01970174297"
};

// Add entries with title, meta (institution, years) and text. Empty experience hides the section.
export const education: EducationEntry[] = [
  {
    "title": "B.Sc. in Computer Science and Engineering (CSE)",
    "institution": "North Western University, Khulna",
    "year": "Ongoing",
    "result": "CGPA 3.5+ (running)"
  },
  {
    "title": "Higher Secondary Certificate (HSC)",
    "institution": "BL College, Khulna",
    "year": "2020",
    "result": "GPA 5.0"
  },
  {
    "title": "Secondary School Certificate (SSC)",
    "institution": "Govt. Laboratory High School, Khulna",
    "year": "2017",
    "result": "GPA 5.0"
  }
];

export const experience: Entry[] = [];
