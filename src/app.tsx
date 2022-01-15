import { useState } from "react";
import { LoginFormModal } from "./login-form";
import { SignUpFormModal } from "./signup-form";
import { Verification } from "./verification-form";

export const App: React.FC = () => {
  const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
  const [isOpenSignupModal, setIsOpenSignupModal] = useState<boolean>(false);
  const [isOpenVerificationModal, setIsOpenVerificationModal] =
    useState<boolean>(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setIsOpenLoginModal(true);
        }}
      >
        Open Login Modal
      </button>
      <LoginFormModal
        visible={isOpenLoginModal}
        onClose={() => setIsOpenLoginModal(false)}
        openVerificationModal={() => setIsOpenVerificationModal(true)}
        closeLoginModal={() => setIsOpenLoginModal(false)}
      />
      <button
        onClick={() => {
          setIsOpenSignupModal(true);
        }}
      >
        Open Signup Modal
      </button>

      <SignUpFormModal
        visible={isOpenSignupModal}
        onClose={() => setIsOpenSignupModal(false)}
        openVerificationModal={() => setIsOpenVerificationModal(true)}
        closeSignupModal={() => setIsOpenSignupModal(false)}
      />

      <Verification
        visible={isOpenVerificationModal}
        onClose={() => setIsOpenVerificationModal(false)}
      />
    </div>
  );
};
