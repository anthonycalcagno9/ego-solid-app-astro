import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";

type ModalProps = {
  onSubmit: (name: string, email: string) => void;
};

const Modal = (props: ModalProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-1/3 h-[90%]">
          Join Waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Waitlist</DialogTitle>
          <DialogDescription>
            Stay up to date with all EGO Solid development!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input
              id="name-1"
              name="name"
              value={name}
              placeholder="Quinn Johnson"
              onChange={handleNameChange}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Email</Label>
            <Input
              id="username-1"
              name="username"
              value={email}
              placeholder="Quinn.Johnson@gmail.com"
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() => {
              props.onSubmit(name, email);
            }}
          >
            Join
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
