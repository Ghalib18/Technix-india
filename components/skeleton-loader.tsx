export function SkeletonLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-screen bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-2xl mx-auto" />
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-64 mx-auto" />
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-96 mx-auto" />
          <div className="flex gap-4 justify-center">
            <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded w-32" />
            <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded w-32" />
          </div>
        </div>
      </div>
    </div>
  )
}
