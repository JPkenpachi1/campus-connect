import Link from "next/link";

const FOOTER_LINKS = {
  "About Product": ["Events", "Careers", "Press", "Contact"],
  Company: ["Team", "Blog", "Hirer Tool"],
  Support: ["Help Center", "Account Information", "Talk to Support"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-primary mb-3">
            <span className="text-2xl">💜</span> PlutoPay
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            © Pluto Card is a Pluto Financial Services Inc. company 2022
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-white text-sm rounded-full px-4 py-2 hover:bg-primary-dark transition-colors">
              Go
            </button>
          </div>
        </div>
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-sm font-semibold text-gray-800 mb-4">{section}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
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
