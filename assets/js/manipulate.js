export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here
  document.title = "Bryant's Portfolio";
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  document.querySelector('h1').textContent = 'I am Bry';
}

export function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here
  const aboutMe = document.querySelector('.section');
  aboutMe.childNodes[3].textContent = 'This is about Bry';
  debugger;
}
