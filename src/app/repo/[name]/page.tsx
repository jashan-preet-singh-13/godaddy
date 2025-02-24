import { BASE_URL } from "@/app/_utils/Contants";
import { fetchReposByName } from "@/app/_utils/Services";
import Link from "next/link";

interface RepoDetailProps {
  params: { name: string };
}

interface CardProps {
  name: string;
  description: string;
  html_url: string;
  language: string;
  forks: number;
  open_issues_count: number;
  watchers_count: number;
}

const RepoDetail: React.FC<RepoDetailProps> = async ({ params }) => {
  const { name } = params;
  const [error, repo] = await fetchReposByName(name);


  const {
    name: title,
    description,
    html_url:url,
    language,
    forks,
    open_issues_count,
    watchers_count,
  }: CardProps = repo;

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Error Fetching Repository
          </h1>
          <p className="text-gray-600 text-center">Sorry, something went wrong. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!repo.name) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Repository Not Found
          </h1>
          <p className="text-gray-600 text-center">The repository with the name &quot;{name}&quot; does not exist or could not be fetched.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Repository Details
        </h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-600">{description || "No description available"}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700">Repository Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <strong className="font-semibold">Language:</strong> {language || "Not specified"}
              </li>
              <li>
                <strong className="font-semibold">Forks:</strong> {forks}
              </li>
              <li>
                <strong className="font-semibold">Open Issues:</strong> {open_issues_count}
              </li>
              <li>
                <strong className="font-semibold">Watchers:</strong> {watchers_count}
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link
              href={url}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              View Repository
            </Link>
            <span className="text-sm text-gray-500">
            <Link
              href={BASE_URL}
              className="text-blue-600 hover:underline"
            >
              Back to repositories
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
