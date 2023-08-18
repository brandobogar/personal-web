import Head from "next/head";

export default function MyHead(title, desc, keywords) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
