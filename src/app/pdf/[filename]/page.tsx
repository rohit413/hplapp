export default async function PDFViewer({ params }: { params: Promise<{ filename: string }> }) {
  const { filename } = await params;
  return (
    <div className="min-h-screen">
      <embed
        src={`/assets/images/policies/${decodeURIComponent(filename)}`}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ minHeight: '100vh' }}
      />
    </div>
  );
}