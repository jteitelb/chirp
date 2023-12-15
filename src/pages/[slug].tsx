import Head from "next/head";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div>
          <div className="border-slate-400 p-4">Profile view</div>
        </div>
      </main>
    </>
  );
}