import { zodResolver } from "@hookform/resolvers/zod";
import {
  TreatmentAndDentistFormSchema,
  TreatmentAndDentistFormValues,
} from "~/components/reservations/treatment-and-dentist";
import { ActionFunctionArgs, json } from "@remix-run/node";
import { getValidatedFormData } from "remix-hook-form";

const resolver = zodResolver(TreatmentAndDentistFormSchema);

export async function action({ request }: ActionFunctionArgs) {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<TreatmentAndDentistFormValues>(
    request,
    resolver,
  );

  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return json({ errors, defaultValues });
  }

  console.log(data);

  // Do something with the data
  return json(data);
}

export default function NewReservation() {
  return <>Hello worlds</>;
}
