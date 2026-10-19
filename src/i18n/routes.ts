export type Lang = 'ar' | 'en';

export const routes = {
  home: '',
  about: 'about/',
  sectors: 'sectors/',
  companies: 'companies/',
  food: 'companies/food-production/',
  khaliat: 'companies/khaliat-khalid/',
  kbagi: 'companies/kbagi-algharbia/',
  sustainability: 'sustainability/',
  partnerships: 'partnerships/',
  careers: 'careers/',
  news: 'news/',
  contact: 'contact/',
  privacy: 'privacy/',
  terms: 'terms/',
} as const;

export type RouteKey = keyof typeof routes;

export function href(lang: Lang, key: RouteKey): string {
  return (lang === 'en' ? '/en/' : '/') + routes[key];
}
