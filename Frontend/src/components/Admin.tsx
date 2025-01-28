import type React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, AppDispatch } from "../store/store"
import { fetchSubmissions } from "../store/submissionsSlice"
import Header from "../sections/Header"
import SectionTitle from "../common/Title"

const AdminPanel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { submissions, status, error } = useSelector((state: RootState) => state.submissions)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSubmissions())
    }
  }, [status, dispatch])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <SectionTitle>Admin Panel</SectionTitle>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <SectionTitle>Admin Panel</SectionTitle>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-red-500">Error: {error}</div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SectionTitle>Admin Panel</SectionTitle>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Name</th>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Submission Date</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission._id}>
                    <td className="py-2 px-4 border-b">{submission.name}</td>
                    <td className="py-2 px-4 border-b">{submission.email}</td>
                    <td className="py-2 px-4 border-b">{new Date(submission.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminPanel

