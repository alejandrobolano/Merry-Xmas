export const getNameFromUrl = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('name') || urlParams.get('n') || 'Amig@';
};

export const getAuthorFromUrl = (): string => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('author') || urlParams.get('a') || 'Alejandro';
};