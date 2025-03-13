import { MultiStepForm } from "./multi-step-form/MultiStepForm";

import FormStep from "./multi-step-form/FormStep";
import NameForm from "./NameForm";
import AddressForm from "./AddressForm";
import RandomForm from "./RandomForm";

function TestForm() {
  function submit() {
    alert("FORM SUBMITTED");
  }
  return (
    <MultiStepForm onSubmit={submit}>
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
