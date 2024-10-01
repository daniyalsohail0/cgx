import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  {
    id: 1,
    section: `Services`,
    list: [
      { url: `/services/it-network-admistration`, name: `IT & Network Administration` },
      { url: `/services/software-development`, name: `Software Development` },
      { url: `/services/cloud-solutions-and-infrastructure`, name: `Cloud Solutions & Infrastructure` },
      { url: `/services/penetration-testing`, name: `Penetration Testing` },
      { url: `/services/incident-response`, name: `Incident Response` },
      { url: `/services/intrusion-detection-and-prevention`, name: `Intrusion Detection & Prevention (IDPS)` },
      { url: `/services/it-risk-management`, name: `IT Risk Management` },
      { url: `/services/security-compliance-review`, name: `Security Compliance Review` },
    ],
  },
  {
    id: 2,
    section: `Company`,
    list: [
      { url: `/about-us`, name: `About Us` },
      { url: `/careers`, name: `Careers` },
      { url: `/how-we-work`, name: `How we work` },
    ],
  },
  {
    id: 3,
    section: `Industry`,
    list: [
      { url: `/industry/fintech`, name: `Fintech` },
      { url: `/industry/blockchain`, name: `Blockchain` },
      { url: `/industry/artificial-intelligence`, name: `Artificial Intelligence` },
      { url: `/industry/real-estate`, name: `Real Estate` },
      { url: `/industry/ecommerce`, name: `E Commerce` },
      { url: `/industry/information-technology`, name: `Information Technology` },
    ],
  },
]

const policies = [
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms of Service", url: "/terms-of-service" },
  { name: "Cookie Policy", url: "/cookie-policy" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="md:w-3/4 w-11/12 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="/logo.png"
              alt="CGX Logo"
              width={150}
              height={50}
              className="w-auto"
            />
            <p className="text-sm text-gray-400">
              CGX: Empowering businesses with innovative technology solutions.
            </p>
            <p className="text-sm text-gray-400">
              Transforming challenges into opportunities through cutting-edge IT services and cybersecurity expertise.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-3 sm:grid-cols-3">
            {navigation.map((category) => (
              <div key={category.id}>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  {category.section}
                </h3>
                <ul className="mt-4 space-y-4">
                  {category.list.map((item) => (
                    <li key={item.name}>
                      <Link href={item.url} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} CGX. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              {policies.map((policy, index) => (
                <Link 
                  key={policy.name} 
                  href={policy.url} 
                  className={`text-sm text-gray-400 hover:text-white ${
                    index !== 0 ? 'ml-4' : ''
                  }`}
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}