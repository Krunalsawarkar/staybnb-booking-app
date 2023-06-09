"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={()=>router.push('/')}
      alt="logo"
      className="cursor-pointer"
      height="100"
      width="100"
      src="/images/staybnb.png" 
    />
  );
};