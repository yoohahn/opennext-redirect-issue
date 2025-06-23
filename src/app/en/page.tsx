import Link from "next/link";

export default async function Page() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Page EN</h1>
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
