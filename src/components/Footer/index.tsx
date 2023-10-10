import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-8 text-center text-sm text-white">
          <p>&copy; 2022 NoxPay. All rights reserved.</p>

          <div className="flex justify-center space-x-6 mt-2">
            <Link href={"https://github.com/alexandrejuniorc"} target="_blank">
              <Github
                color="#ffffff"
                className="hover:bg-blue-500 hover:text-white rounded cursor-pointer"
              />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/alexandrejuniorc/"}
              target="_blank"
            >
              <Linkedin
                color="#ffffff"
                className="hover:bg-blue-500 hover:text-white rounded cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
