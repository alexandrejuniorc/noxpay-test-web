import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 py-8 text-center text-sm text-white">
          <p>&copy; 2022 NoxPay. All rights reserved.</p>

          <div className="flex justify-center space-x-6 mt-2">
            <Github
              href="https://github.com/alexandrejuniorc"
              color="#ffffff"
              className="hover:bg-blue-500 hover:text-white rounded cursor-pointer"
            />
            <Linkedin
              href="https://www.linkedin.com/in/alexandrejuniorc/"
              color="#ffffff"
              className="hover:bg-blue-500 hover:text-white rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
