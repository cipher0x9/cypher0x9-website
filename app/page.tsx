export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black flex items-center justify-center">
      <div className="relative">
        {/* 3D Crystal Ball Loader */}
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin" />
          
          {/* Middle rotating ring */}
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500 animate-spin" style={{animationDuration: '1.5s', animationDirection: 'reverse'}} />
          
          {/* Inner rotating ring */}
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 border-r-cyan-400 animate-spin" style={{animationDuration: '1s'}} />
          
          {/* Center crystal ball */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 animate-pulse shadow-2xl shadow-purple-500/50" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse" />
        </div>
        
        {/* Loading text */}
        <p className="text-center mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
          CYPHER0x9
        </p>
        <p className="text-center mt-2 text-sm text-gray-400">
          Initializing Universe...
        </p>
      </div>
    </main>
  );
}
