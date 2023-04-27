import Image from "next/image";
import lightning from "@/public/images/lighting.png";
import Link from "next/link";

export function Layout({ children }: any) {
  return (
    <>
      <header className="flex justify-around">
        <Image
          src={lightning}
          alt={"lightning"}
          className="object-fit h-8 w-8"
        />
        <nav>
          <ul className="flex flex-row">
            <Link href={"#"}><li>item1</li></Link>
            <Link href={"#"}><li>item2</li></Link>
            <Link href={"#"}><li>item3</li></Link>
          </ul>
        </nav>
      </header>
      {children}
      <footer></footer>
    </>
  );
}
