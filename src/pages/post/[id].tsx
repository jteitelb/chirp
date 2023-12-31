import Head from "next/head";

export default function Post() {
  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <div>
          <div className="border-slate-400 p-4">Post view</div>
        </div>
      </main>
    </>
  );
}
