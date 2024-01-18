/**
 *
 * @param {string} url
 * @returns
 */
export function fetchData(url) {
  if (!url) throw new Error('No Url');
  return fetch(url).then((res) => res.json());
}

/**
 *
 * @param {InnerHTML} template
 * @param {HTMLElement} el
 */
export function render(template, el) {
  console.log({ template, el });
  if (!el) throw new Error('no root node provided');
  el.innerHTML = template;
}
