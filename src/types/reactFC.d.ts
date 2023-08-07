import { FC as ReactFC, PropsWithChildren } from 'react';

declare global {
  type FCC<T = {}> = ReactFC<PropsWithChildren<T>>;
  type FC<T = {}> = ReactFC<T>;
}
