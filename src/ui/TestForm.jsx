import { MultiStepForm } from "./MultiStepForm";

import FormStep from "./FormStep";
import NameForm from "./NameForm";
import AddressForm from "./AddressForm";
import RandomForm from "./RandomForm";

function TestForm() {
  return (
    <MultiStepForm onSubmit={() => alert("FORM SUBMITTED")}>
      <FormStep>
        <NameForm />
      </FormStep>
      <FormStep>
        <AddressForm />
      </FormStep>
      <FormStep>
        <RandomForm />
      </FormStep>
    </MultiStepForm>
  );
}

export default TestForm;
