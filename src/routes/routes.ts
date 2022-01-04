import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "lazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);

export const routes: Route[] = [
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    Component: LazyLayout,
    name: 'lazy-layout',
  },
  {
    to: '/no-lazy-page',
    path: 'no-lazy-page',
    Component: NoLazy,
    name: 'No Lazy Page',
  },
];
