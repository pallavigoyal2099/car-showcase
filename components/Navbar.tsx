import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";
import { getServerSession } from "next-auth";
import Logout from "@/app/logout";

export default async function Navbar() {
  const session = await getServerSession();

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car hub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        {!!session && <Logout />}
        {!session && (
          <Link href="/signup">
            <CustomButton
              title={"Sign Up"}
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
          </Link>
        )}
      </nav>
    </header>
  );
}
