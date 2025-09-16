import Modal from "./Modal";
import { Button } from "./ui/button";

const HeaderButtons = () => {
  const onSubmit = async (name: string, email: string) => {
    console.log(name);
    console.log(email);

    const url = "/createCustomer";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ name: name, email: email }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Modal
        onSubmit={(name: string, email: string) => {
          onSubmit(name, email);
        }}
      />
      <Button
        variant="secondary"
        className="w-1/3 h-[90%] bg-[#100C07] text-white"
      >
        KickStarter
      </Button>
    </>
  );
};

export default HeaderButtons;
