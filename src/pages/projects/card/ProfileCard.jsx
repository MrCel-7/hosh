export default function ProfileCard({ name, role, image, bio, loading }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 w-[280px] transition hover:scale-105">
      {/* Image */}
      {loading ? (
        <div className="w-24 h-24 rounded-full mx-auto bg-gray-300 dark:bg-gray-600 animate-pulse" />
      ) : (
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-200 dark:border-gray-600"
        />
      )}

      {/* Info */}
      <div className="text-center mt-4">
        {loading ? (
          <>
            {/* Name */}
            <div className="h-4 w-32 mx-auto bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2" />

            {/* Role */}
            <div className="h-3 w-24 mx-auto bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-3" />

            {/* Bio Skeleton */}
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
              <div className="h-3 w-5/6 mx-auto bg-gray-300 dark:bg-gray-600 rounded animate-pulse" />
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">
              {name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
            <p className="text-xs mt-2 text-gray-400 dark:text-gray-400">
              {bio}
            </p>
          </>
        )}
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className="mt-4 w-full py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? "Loading..." : "Follow"}
      </button>
    </div>
  );
}
