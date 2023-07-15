export const getCurrentUrl = () => {
  const href = typeof window === 'undefined' ? '' : window.location.href;
  return new URL(href);
};
