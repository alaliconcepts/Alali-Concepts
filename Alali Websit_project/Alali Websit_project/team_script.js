const SUPA_URL = 'https://frnomwyygnaldhdfdkmd.supabase.co';
const SUPA_KEY = 'sb_publishable_iGj0UaExKTiAuwaL8vcBqw_vnXFEWSJ';

async function loadTeam() {
  const res = await fetch(`${SUPA_URL}/rest/v1/team?order=display_order.asc`, {
    headers: { 'apikey': SUPA_KEY, 'Authorization': `Bearer ${SUPA_KEY}` }
  });
  const members = await res.json();

  const grid = document.querySelector('.team-grid');
  if (!grid) return;
  grid.innerHTML = '';

  members.forEach(m => {
    grid.innerHTML += `
      <div class="pro-card team-card">
        <img src="${m.image_url}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p>${m.role}</p>
      </div>`;
  });
}

loadTeam();
