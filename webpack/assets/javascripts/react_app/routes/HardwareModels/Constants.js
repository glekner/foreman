export const HW_MODELS_PATH = '/models';
export const HW_MODELS_NEW_PATH = `${HW_MODELS_PATH}/new`;

export const HW_MODELS_SEARCH_PROPS = {
  controller: 'models',
  autocomplete: {
    searchQuery: '',
    url: 'models/auto_complete_search',
  },
  bookmarks: {
    url: '/api/bookmarks',
    canCreate: true,
    documentationUrl:
      'https://theforeman.org/manuals/1.22/index.html#4.1.5Searching',
  },
};
