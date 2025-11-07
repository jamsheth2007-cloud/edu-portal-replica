import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-8 h-8 text-primary-foreground"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary uppercase tracking-wide">Madras</h1>
              <p className="text-xs text-primary/70 font-medium uppercase tracking-wider">Engineering College</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold shadow-md">
              <span className="text-xs opacity-70">TNEA Code</span>
              <span className="text-base">1203</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 70020 80020</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
