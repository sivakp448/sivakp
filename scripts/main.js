import { initNav } from "./modules/nav.js";
import { initScrollSpy } from "./modules/scroll-spy.js";
import { initTheme } from "./modules/theme.js";
import {
  renderSkillGroups,
  renderProjects,
  renderCertifications,
  renderExperience,
  renderEducation,
  renderAchievements,
} from "./modules/render.js";
import { technicalSkills, aiSkills, leadershipSkills } from "./data/skills.js";
import { projects } from "./data/projects.js";
import { certifications } from "./data/certifications.js";
import { experience } from "./data/experience.js";
import { education } from "./data/education.js";
import { achievements } from "./data/achievements.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initScrollSpy();

  renderSkillGroups("technical-skills-list", technicalSkills);
  renderSkillGroups("ai-skills-list", aiSkills);
  renderSkillGroups("leadership-skills-list", leadershipSkills);
  renderProjects("projects-list", projects);
  renderCertifications("certifications-list", certifications);
  renderExperience("experience-list", experience);
  renderEducation("education-list", education);
  renderAchievements("achievements-list", achievements);

  const footerYear = document.getElementById("footer-year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
});
