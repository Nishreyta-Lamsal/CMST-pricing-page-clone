import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Building2,
  Mail,
} from "lucide-react";

export default function Component() {
  return (
    <footer className="bg-[#f5fff5] text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ml-5">
          {/* Logo and Branding */}
          <div className="flex flex-col items-start">
            <img
              src="data:image/png;base64,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"
              alt="CMST Logo"
              width={100}
              height={40}
              className="mb-2"
            />
            <p className="text-sm">Brought to you by</p>
            <img
              src="https://cmst.xyz/MicrosoftTeams-image.png"
              alt="Susankya Logo"
              width={120}
              height={30}
              className="mt-2"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Check Visa Status",
                "Features",
                "Contact",
                "Login",
                "Register",
                "Pricing",
                "Terms of Service",
                "Privacy Policy",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="font-semibold mb-2">Susankya Global</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>Des Moines, Iowa, United States</span>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>
                  Kupondole, Lalitpur, Nepal (Opp. to Hotel Himalaya | Nepal)
                </span>
              </p>
              <p className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                <span>Ekta Vihar, New Delhi, India</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Admin & Sales: +977 9803264626</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Training & Support: +977 9823647762</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>Sales & Support: +880 1838-602973 (Bangladesh)</span>
              </p>
              <p className="flex items-center">
                <Building2 className="mr-2 h-4 w-4" />
                <span>Office: 01-5010558</span>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>info@susankya.com</span>
              </p>
            </div>
          </div>

          {/* Reach Out */}
          <div>
            <h3 className="font-bold text-lg mb-4">Reach Out</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-green-500 hover:text-green-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-green-500 hover:text-green-600">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
