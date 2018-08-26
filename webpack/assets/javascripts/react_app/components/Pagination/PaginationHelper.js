import URI from 'urijs';

export const getURI = () => new URI(window.location.href);

export const getURIpage = () => Number(getURI().query(true).page);
export const getURIperPage = () => Number(getURI().query(true).per_page);

export const translatePagination = (strings) => {
  const translations = {};
  Object.keys(strings).forEach((str) => {
    translations[str] = __(strings[str]);
  });
  return translations;
};

export const changeQuery = (newQuery) => {
  const uri = getURI();
  uri.setQuery(newQuery);
  window.Turbolinks.visit(uri.toString());
};

