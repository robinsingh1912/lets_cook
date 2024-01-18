const STORAGE_KEY = 'theme-preference';

const DEFAULT_THEME = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

const getThemePreference = () =>
  localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;

let theme = getThemePreference();

const saveThemePreference = () => {
  localStorage.setItem(STORAGE_KEY, theme);
};

const applyTheme = () => {
  document.body.setAttribute('data-theme', theme);
};

export function themeInit() {
  applyTheme(theme);
  // set on load so screen readers can get the latest value on the button
  document.querySelector('#theme-switch').addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';
    saveThemePreference();
    applyTheme();
  });
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme = isDark ? 'dark' : 'light';
    saveThemePreference();
    applyTheme();
  });
