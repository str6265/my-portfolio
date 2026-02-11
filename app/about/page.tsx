export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Join Our Community</h1>
                <p className="text-gray-600 mb-6">
                    Join us on Discord to connect with our community members!
                </p>
                <a
                    href="https://discord.gg/MCkRutNhqN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition"
                >
                    Join Discord Server
                </a>
            </div>
        </div>
    );
}