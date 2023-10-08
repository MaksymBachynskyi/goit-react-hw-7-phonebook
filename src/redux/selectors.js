import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts;
export const selectorFilter = state => state.filter;

export const selectorFiltred = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.list.filter(item => {
      const normalize = item.name.toLowerCase();
      const normalizeTarget = filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });
  }
);
