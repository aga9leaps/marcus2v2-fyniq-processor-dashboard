// Required for static export - must be in a server component
export function generateStaticParams() {
  return [
    { id: 'LOAN-001' },
    { id: 'LOAN-002' },
    { id: 'LOAN-003' },
    { id: 'LOAN-004' },
    { id: 'LOAN-005' },
  ];
}

export default function LoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
