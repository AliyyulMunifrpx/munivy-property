import { Suspense } from "react";
import PropertyDetailPage from "../../../../components/property/detail.jsx";

export default function Property({ params }) {
  return (
    <main className="min-h-[100dvh] w-full bg-white">
      <Suspense fallback={<div>Memuat properti...</div>}>
        <PropertyContent params={params} />
      </Suspense>
    </main>
  );
}

async function PropertyContent({ params }) {
  const { slug } = await params;

  return <PropertyDetailPage slug={slug} />;
}
