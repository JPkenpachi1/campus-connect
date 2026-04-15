import Link from "next/link";

const FOOTER_LINKS = {
  Platform: ["Events", "Communities", "Campus News", "Careers"],
  Company: ["About Us", "Team", "Blog"],
  Support: ["Help Center", "Contact Support", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold text-primary">
          
            <span>Campus Connect</span>
          </div>

          <p className="text-sm leading-relaxed text-gray-500">
            Join Campus Connect to discover events, connect with students, and stay updated with campus life.
          </p>

          <div className="mt-5">
            <Link
              href="#waitlist"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
            >
              Join Waitlist
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} Campus Connect. All rights reserved.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 className="mb-4 text-sm font-semibold text-gray-800">{section}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-gray-500 transition-colors hover:text-primary"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}