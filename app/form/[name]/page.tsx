import { FormDetailsFromUsers } from "@/app/components/Form/FormDetailsFromUsers";

interface PageProps {
  params: {
    name: string;
  };
}

export default function Page({ params: { name } }: PageProps): JSX.Element {
  return (
    <main className="bg-danger d-flex justify-content-center border border-2 border-success">
      <FormDetailsFromUsers name={name} />
    </main>
  );
}
