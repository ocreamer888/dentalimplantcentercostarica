export default function SiteLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold">Loading Dental Implant Center...</h2>
        <p className="text-lg opacity-80">Preparing your perfect smile journey</p>
      </div>
    </div>
  );
}