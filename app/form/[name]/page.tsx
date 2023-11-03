import { FormDetailsFromUsers } from "@/app/components/Form/FormDetailsFromUsers";

interface PageProps {
  params: {
    name: string;
  };
}

export default function Page({ params: { name } }: PageProps): JSX.Element {
  return (
    <main className="d-flex justify-content-center">
      <FormDetailsFromUsers name={name} />
    </main>
  );
}
