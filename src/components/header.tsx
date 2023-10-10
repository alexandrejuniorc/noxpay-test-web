import { Bitcoin } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-primary">
      <div className="sm:py-4  mx-auto lg:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-50 md:px-4 md:text-left text-center flex items-center gap-2">
          NoxPay <Bitcoin color="#f0bc00" />
        </h1>
      </div>
    </header>
  );
};
