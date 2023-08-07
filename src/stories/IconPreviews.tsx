import React from 'react';

const IconTypes = [
  { display: 'Light', value: 'fal' },
  { display: 'Regular', value: 'far' },
  { display: 'Solid', value: 'fas' },
];

const IconDisplays = [
  { display: 'Backpack', value: 'fa-backpack' },
  { display: 'Campground', value: 'fa-campground' },
  { display: 'House', value: 'fa-house' },
  { display: 'User', value: 'fa-user-circle' },
];

interface IconPreviewsProps {
  color?: string;
  size?: 'fa-xs' | 'fa-md' | 'fa-lg';
}

export const IconPreviews: FC<IconPreviewsProps> = ({
  color,
  size = 'fa-md',
}) => {
  return (
    <div className="flex">
      {IconDisplays.map((icon) => (
        <div className="mr-2 grid" key={icon.value}>
          {Array.from(Array(3)).map((_, index) => {
            let iconClassName = `${IconTypes[index].value} ${icon.value} ${size} ${color}`;

            return (
              <div
                key={`${icon.value}-${IconTypes[index].value}`}
                className="mr-10 grid grid-cols-[150px_1fr] items-center"
              >
                <span className="pr-2">
                  {icon.display} {IconTypes[index].display}
                </span>
                <i className={iconClassName} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
