import Image from "next/image";

export default function About() {
    return (
     <main className="flex min-h-screen flex-col items-center  p-24">
        <div className="flex justify-center mb-10">
            <h2 className="text-slate-200 text-5xl">We Are Panic Creative</h2>
        </div>
        <div className="w-2/3 text-slate-200 mb-10">
            <p >We are a team of creative professionals dedicated to providing top-notch services in commercial photography, video production, branding, and digital marketing. Specializing in the Hispanic market audience, we aim to deliver impactful and culturally resonant content.</p> 
        </div>
        <div className="w-2/3 text-slate-200">
            <p>At Panic Creative, we believe the most effective way to empower our clients to reach new markets is by telling a good story.</p>
        </div>
    </main>
    )
}