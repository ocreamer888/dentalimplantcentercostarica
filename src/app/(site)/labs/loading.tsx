export default function LabsLoading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100/50 via-purple-500/50 to-purple-900/50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-purple-800">Loading Our Laboratory...</h2>
        </div>
      </div>
    );
  }
  