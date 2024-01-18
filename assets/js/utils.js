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
 * @param {function} fn
 * @returns function
 */
export function cache(fn) {
  let map = new Map();
  return (...args) => {
    console.log(map);
    const index = JSON.stringify(args);
    if (!map.has(index)) map.set(index, fn(...args));
    return map.get(index);
  };
}

/**
 *
 * @param {InnerHTML} template
 * @param {HTMLElement} el
 */
export function render(template, el) {
  if (!el) throw new Error('no root node provided');
  el.innerHTML = template;
}
