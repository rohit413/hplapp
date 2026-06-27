import { notFound } from "next/navigation";

export default async function PDFViewer({ params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  const decoded = decodeURIComponent(filename);

  // Reject any path that tries to escape the policies directory
  if (decoded.includes("..") || decoded.includes("/") || decoded.includes("\\")) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <embed
        src={`/assets/images/policies/${decoded}`}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
}