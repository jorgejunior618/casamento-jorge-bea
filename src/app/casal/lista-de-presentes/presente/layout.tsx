import { Suspense } from "react";

export default function LayoutPresentePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
