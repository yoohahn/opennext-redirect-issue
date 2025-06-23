import Link from "next/link";

export default async function Page() {
  return (
    <html lang="sv">
      <body>
        <div>
          <h1>Page SV</h1>
          <Link href="/" prefetch>
            ROOT
          </Link>{" "}
          <br />
          <Link href="/sv" prefetch>
            SV
          </Link>{" "}
          <br />
          <Link href="/en" prefetch>
            EN
          </Link>
        </div>
      </body>
    </html>
  );
}
