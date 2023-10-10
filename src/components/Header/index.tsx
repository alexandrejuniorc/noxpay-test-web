import { Bitcoin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-primary">
      <div className="py-4 mx-auto lg:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-50 md:px-4 justify-center md:justify-start flex items-center gap-2">
          NoxPay <Bitcoin color="#f0bc00" />
        </h1>
      </div>
    </header>
  );
};
