import { FormDetailsFromUsers } from "@/app/components/Form/FormDetailsFromUsers";

interface PageProps {
  params: {
    name: string;
  };
}

export default function Page({ params: { name } }: PageProps): JSX.Element {
  return (
    <main>
      <FormDetailsFromUsers name={name} />
    </main>
  );
}
