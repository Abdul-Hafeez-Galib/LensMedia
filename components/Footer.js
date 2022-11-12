import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mt-8 md:mt-0 md:order-1 mx-auto">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 AHG
          </p>
        </div>
      </div>
    </footer>
  );
}
