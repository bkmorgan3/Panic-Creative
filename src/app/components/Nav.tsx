import Link from "next/link"

export default function Nav() {
    return (
        <div className="flex flex-row justify-end text-left text-lg mt-5 pl-8 mr-8">
            <Link className="mr-2" href={"/"}>
                Home
            </Link>
            <Link className="mr-2" href="/about">About</Link>
            <Link href="contact">Contact</Link>
        </div>
    )
}