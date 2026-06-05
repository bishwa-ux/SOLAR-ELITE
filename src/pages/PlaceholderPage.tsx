export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 pt-24 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-brand-blue font-display mb-4">{title}</h1>
      <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
        This is a placeholder page. In a full production application, this page would contain rich content, components, and SEO-optimized text tailored to {title}.
      </p>
      <a href="/" className="text-brand-yellow font-bold underline underline-offset-4 hover:text-brand-yellow-hover">
        Return to Home
      </a>
    </div>
  );
}
