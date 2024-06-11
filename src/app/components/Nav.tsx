import Link from "next/link"

export default function Nav() {
    return (
        <div className="flex flex-row justify-end text-left text-lg mt-5 pl-8 mr-8">
            <Link className="mr-2 text-slate-100 text-2xl" href={"/"}>
                Home
            </Link>
            <Link className="mr-2 text-2xl" href="/about">About</Link>
            <Link className="text-2xl" href="contact">Contact</Link>
        </div>
    )
}