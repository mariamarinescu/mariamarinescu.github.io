import { Button } from 'components/buttons';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { CVIcon, GitHubIcon, LinkedinIcon } from '../icons';

const buttonClassName = 'w-32 justify-start';

const getButtonListConfig = (isDarkThemeActive: boolean | undefined) => [
  {
    href: 'https://www.linkedin.com/in/maria-marinescu',
    icon: (
      <LinkedinIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    label: 'Linkedin',
    className: buttonClassName,
    id: 'linkedin-profile',
    'data-testid': 'linkedin-button',
  },
  {
    href: 'https://github.com/mariamarinescu',
    icon: (
      <GitHubIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    label: 'Github',
    className: buttonClassName,
    id: 'github-profile',
    'data-testid': 'github-button',
  },
  {
    href: 'https://drive.google.com/file/d/1jAJcdkcsiK1cOIWmreTzeKLIRRAWeKC-/view?usp=sharing',
    label: 'Resume',
    className: buttonClassName,
    id: 'download-resume',
    icon: (
      <CVIcon
        className="custom-icon-size"
        isDarkThemeActive={isDarkThemeActive}
      />
    ),
    'data-testid': 'resume-button',
  },
];

export const ContactButtonGroup = () => {
  const isDarkThemeActive = useRecoilValue(darkThemeAtom);
  const buttonListConfig = getButtonListConfig(isDarkThemeActive);

  return (
    <>
      <div className="h-inherit align-center mt-5 flex w-full flex-wrap items-center justify-end gap-2">
        {buttonListConfig.map(
          ({ href, icon, label, className, id, 'data-testid': testId }) => (
            <Button
              href={href}
              icon={icon}
              label={label}
              className={className}
              key={id}
              data-testid={testId}
            />
          )
        )}
      </div>
    </>
  );
};
