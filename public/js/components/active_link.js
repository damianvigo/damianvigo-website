const d = document;

export default function activeLinks(activeLink) {
  const currentLocation = location.href,
    menuItem = d.querySelectorAll(activeLink),
    menuLength = menuItem.length;
  // console.log(menuItem)

  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].classList.add('active');
    }
  }
}
