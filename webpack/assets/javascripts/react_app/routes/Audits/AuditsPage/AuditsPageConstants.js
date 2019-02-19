export const AUDITS_PAGE_FETCH = 'AUDITS_PAGE_FETCH';
export const AUDITS_PAGE_CHANGE_PARAMS = 'AUDITS_PAGE_CHANGE_PARAMS';
export const AUDITS_PAGE_SHOW_MESSAGE = 'AUDITS_PAGE_SHOW_MESSAGE';
export const AUDITS_PAGE_HIDE_MESSAGE = 'AUDITS_PAGE_HIDE_MESSAGE';
export const AUDITS_PAGE_SHOW_LOADING = 'AUDITS_PAGE_SHOW_LOADING';
export const AUDITS_PAGE_HIDE_LOADING = 'AUDITS_PAGE_HIDE_LOADING';
export const AUDITS_PAGE_NEXT_PENDING = 'AUDITS_PAGE_NEXT_PENDING';
export const AUDITS_PAGE_NEXT_RESOLVED = 'AUDITS_PAGE_NEXT_RESOLVED';
export const AUDITS_PAGE_PREV_PENDING = 'AUDITS_PAGE_PREV_PENDING';
export const AUDITS_PAGE_PREV_RESOLVED = 'AUDITS_PAGE_PREV_RESOLVED';
export const AUDITS_PAGE_CLEAR_CACHE = 'AUDITS_PAGE_CLEAR_CACHE';

export const AUDITS_CURRENT = 'audits';
export const AUDITS_NEXT = 'nextAudits';
export const AUDITS_PREV = 'prevAudits';
export const AUDITS_PATH = 'audits';
export const AUDITS_PER_PAGE_OPTIONS = [5, 10, 25, 50];
export const AUDITS_DOC_URL =
  'https://theforeman.org/manuals/1.22/index.html#4.1.4Auditing';

export const AUDITS_SEARCH_PROPS = {
  controller: 'audits',
  autocomplete: {
    searchQuery: '',
    url: 'audits/auto_complete_search',
  },
  bookmarks: {
    url: '/api/bookmarks',
    canCreate: true,
    documentationUrl:
      'https://theforeman.org/manuals/1.22/index.html#4.1.5Searching',
  },
};
