function el(id) {
  return document.getElementById(id);
}

export function renderSkillGroups(containerId, groups) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = groups
    .map(
      (group) => `
      <div class="skill-group">
        <h3 class="skill-group__title">${group.category}</h3>
        <ul class="skill-pills">
          ${group.items.map((item) => `<li class="skill-pill">${item}</li>`).join("")}
        </ul>
      </div>`
    )
    .join("");
}

export function renderProjects(containerId, items) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (project) => `
      <article class="card card--project">
        <h3 class="card__title">${project.title}</h3>
        <p class="card__body">${project.description}</p>
        <ul class="card__tags">
          ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
        </ul>
      </article>`
    )
    .join("");
}

export function renderCertifications(containerId, items) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (cert) => `
      <article class="card card--certification">
        <h3 class="card__title">${cert.name}</h3>
        <p class="card__meta">${cert.issuer} · ${cert.year}</p>
      </article>`
    )
    .join("");
}

export function renderExperience(containerId, items) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (job) => `
      <li class="timeline__item">
        <div class="timeline__marker" aria-hidden="true"></div>
        <div class="timeline__content">
          <p class="timeline__period">${job.period}</p>
          <h3 class="timeline__role">${job.role}</h3>
          <p class="timeline__company">${job.company}</p>
          <ul class="timeline__points">
            ${job.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </div>
      </li>`
    )
    .join("");
}

export function renderEducation(containerId, items) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (entry) => `
      <article class="card card--education">
        <h3 class="card__title">${entry.degree}</h3>
        <p class="card__meta">${entry.institution} · ${entry.year}</p>
      </article>`
    )
    .join("");
}

export function renderAchievements(containerId, items) {
  const container = el(containerId);
  if (!container) return;
  container.innerHTML = items
    .map(
      (item) => `
      <article class="card card--achievement">
        <h3 class="card__title">${item.title}</h3>
        <p class="card__body">${item.description}</p>
      </article>`
    )
    .join("");
}
