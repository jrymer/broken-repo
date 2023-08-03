export type IconColors = 'dark' | 'light';
export type IconSizes = 'md' | 'lg';

export const ICON_SIZES: Record<IconSizes, string> = {
  md: 'w-8 h-8',
  lg: 'w-10',
};
export const ICON_COLORS: Record<IconColors, string> = {
  dark: 'text-white hover:text-slate-50',
  light: 'text-slate-900 hover:text-slate-950',
};

const DEFAULT = 'm-1 flex items-center justify-center';

export const getIconStyles = (color: IconColors, size: IconSizes) => {
  return [ICON_COLORS[color], ICON_SIZES[size], DEFAULT].join(' ');
};
