import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

interface PropsType {
  triggerVal: boolean;
  trigger: Function;
}

const DialogBox = ({ trigger, triggerVal }: PropsType) => {
  return (
    <Transition appear show={triggerVal}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => trigger(false)}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 border-2">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-black pb-2"
                >
                  Connect
                </DialogTitle>
                <input
                  type="text"
                  className="p-2 border-2 border-gray-600 w-full rounded-xl"
                  placeholder="Api Key"
                />
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-blue-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={() => {
                      trigger(false);
                    }}
                  >
                    Confirm
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogBox;
