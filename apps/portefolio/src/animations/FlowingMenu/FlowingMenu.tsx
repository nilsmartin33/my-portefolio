import React from 'react';

interface MenuItemProps {
  link: string;
  text: string;
  time: string;
  date: string;
  missionDescription: string;
  jobTitle: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <nav className="w-full">
      {items.map((item, idx) => (
        <MenuItem key={idx} {...item} />
      ))}
    </nav>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, time, date, missionDescription, jobTitle }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="border-b border-primary">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="block px-4 md:px-8 py-4 md:py-6 text-primary uppercase font-light
                   text-sm md:text-base lg:text-lg transition-colors duration-500
                   hover:bg-accent-foreground hover:text-primary-foreground"
      >
        {text}
      </a>

      <div
        className={`bg-accent-foreground transition-all duration-500 ease-out overflow-hidden
                   ${isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 md:px-8 py-4">
          {/* Mobile: layout vertical */}
          <div className="md:hidden space-y-2">
            <div className="flex flex-col items-center justify-between text-xs text-primary-foreground/70">
              <p>{time}</p>
              <p>{date}</p>
            </div>
            <div className="font-medium text-sm text-primary-foreground">{jobTitle}</div>
            <div className="text-xs text-primary-foreground leading-relaxed">{missionDescription}</div>
          </div>

          {/* Desktop: layout horizontal */}
          <div className="hidden md:flex items-start gap-4 lg:gap-6">
            <div className="flex flex-col items-center justify-between text-sm text-primary-foreground/70 whitespace-nowrap">
              <p>{time}</p>
              <p>{date}</p>
            </div>
            <div className="w-px bg-primary-foreground/30 h-9" />
            <div className="font-medium text-sm text-primary-foreground whitespace-nowrap">{jobTitle} :</div>
            <div className="text-sm text-primary-foreground leading-relaxed">{missionDescription}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
