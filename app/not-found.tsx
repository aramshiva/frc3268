import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="px-20">
            <p className="text-[10rem] font-mono">404</p>
            <p className="text-4xl font-mono">Not found</p>
            <p className="text-2xl font-mono">The requested resource may have been moved or removed.</p>
            <Link href="/" className="text-2xl underline font-mono pt-2">Return Home</Link>
        </div>
    )
}