import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { triggerDisclaimer } from "../Store/Slices/UserSlice";

const DisclaimerDialogBox = ({
  showDisclaimer,
  dispatch,
}: {
  showDisclaimer: boolean;
  dispatch: Function;
}) => {
  return (
    <Transition appear show={showDisclaimer}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => dispatch(triggerDisclaimer(false))}
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
                  Disclaimer
                </DialogTitle>
                <p>
                  <strong>Important Notice:</strong> The information provided by
                  MedCure, including but not limited to disease prediction and
                  medication suggestions, is intended for informational purposes
                  only. It is not a substitute for professional medical advice,
                  diagnosis, or treatment.
                </p>
                <div className="mt-4">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-blue-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                    onClick={() => {
                      dispatch(triggerDisclaimer(false));
                    }}
                  >
                    Continue
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

export default DisclaimerDialogBox;
