"use client";

import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Image src={"/svgs/logo.svg"} height={32} width={131} alt="Logo" />
    </div>
  );
};

export default Logo;
