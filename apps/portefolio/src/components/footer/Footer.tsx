import { footer } from '@/components/footer/config.ts';

const Footer = () => {
  return (
    <footer className="border-t border-primary flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Nils MARTIN. All rights reserved.</p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6 text-xs font-light">
        {footer.map((link) => {
          const { title, href, id } = link;
          return title === 'Home' ? (
            <a className=" underline-offset-4 hover:underline" href={href} key={id}>
              {title}
            </a>
          ) : (
            <a
              className=" underline-offset-4 hover:underline"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
            >
              {title}
            </a>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
