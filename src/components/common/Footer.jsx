import {
  Phone,
  MapPin,
  Clock3,
  Facebook,
  Twitter,
  Instagram,
  Camera,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT SECTION */}
        <div>
          <div>
            <img src=" https://www.mayraspasalon.com/wp-content/uploads/2024/02/hd-rose-1-300x250.png" alt="" className="w-30 h-28" />
          </div>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
            hella, PBR 3 wolf moon beard Helvetica.
          </p>
        </div>

        {/* MIDDLE SECTION */}
        <div>
          <h3 className="text-lg font-semibold tracking-[2px] mb-5">
            CONTACT INFO
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <Phone size={18} /> <span>1-567-124-44227</span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} />{" "}
              <span>184 Main Street East Perl Habour 8007</span>
            </li>

            <li className="flex items-center gap-3">
              <Clock3 size={18} />{" "}
              <span>Mon - Sat 8:00 - 18:00 • Sunday CLOSED</span>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">
            <a className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center">
              <Facebook size={20} />
            </a>

            <a className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center">
              <Twitter size={20} />
            </a>

            <a className="w-10 h-10 rounded-full bg-[#E60072] flex items-center justify-center">
              <Instagram size={20} />
            </a>

            <a className="w-10 h-10 rounded-full bg-[#3f51b5] flex items-center justify-center">
              <Camera size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h3 className="text-lg font-semibold tracking-[2px] mb-5">
            NEWSLETTER
          </h3>

          <p className="text-gray-300">
            Don’t miss a thing! <br />
            Sign up to receive daily news
          </p>

          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full mt-5 p-3 rounded-md text-black outline-none"
          />

          <button className="w-full mt-4 p-3 bg-[#e59c8a] text-white font-semibold tracking-wide rounded-md">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 mt-12 pt-6 border-t border-gray-700">
        © Copyright Grand Spa Theme Demo – Theme by themeperfect
      </div>
    </footer>
  );
}
