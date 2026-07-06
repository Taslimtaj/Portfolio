import { Heart, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="flex items-center gap-1 text-sm text-white/40">
          © {new Date().getFullYear()} {personalInfo.name}. Built with
          <Heart size={14} className="text-red-400" />
          Next.js
        </p>
        <div className="flex gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/40 transition hover:text-white"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
