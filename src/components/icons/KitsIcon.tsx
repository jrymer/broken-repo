import { IconColors, IconSizes, getIconStyles } from './utils';

interface KitsIconProps {
  size?: IconSizes;
  color?: IconColors;
}
const KitsIcon: FC<KitsIconProps> = ({ color = 'light', size = 'md' }) => {
  const classNames = getIconStyles(color, size);

  return (
    <div className={classNames}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="-60 0 560 512"
      >
        <path d="M320 320H128c-17.67 0-32 14.33-32 32v32h256v-32c0-17.67-14.33-32-32-32zM96 512h256v-96H96v96zM320 80h-8V56c0-30.88-25.12-56-56-56h-64c-30.88 0-56 25.12-56 56v24h-8C57.31 80 0 137.31 0 208v240c0 35.35 28.65 64 64 64V352c0-35.29 28.71-64 64-64h192c35.29 0 64 28.71 64 64v160c35.35 0 64-28.65 64-64V208c0-70.69-57.31-128-128-128zM184 56c0-4.41 3.59-8 8-8h64c4.41 0 8 3.59 8 8v24h-80V56zm136 144c0 4.42-3.58 8-8 8H136c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h176c4.42 0 8 3.58 8 8v16z" />
      </svg>
    </div>
  );
};

export default KitsIcon;