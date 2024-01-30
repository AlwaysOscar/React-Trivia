export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export function getTeamLogoImage(teamName) {
  teamName = teamName.trim().toLowerCase();
  return new URL(`/assets/game/team_logos/${teamName}_logo.png`, import.meta.url).href;
}

export function getPlayerImage(firstName, lastName) {
  if (arguments.length === 1) {
    // Assuming a single argument is the full name
    const fullName = arguments[0];
    const [first, last] = fullName.trim().split(' ');
    firstName = first.toLowerCase();
    lastName = last.toLowerCase();
  } else {
    // Both firstName and lastName are provided
    firstName = firstName.trim().toLowerCase();
    lastName = lastName.trim().toLowerCase();
  }

  return new URL(`/assets/game/players_images/${firstName}_${lastName}.png`, import.meta.url).href;
}