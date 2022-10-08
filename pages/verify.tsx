import { useRouter } from "next/router";
import Image from "next/image";

const Verify = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div className="flex flex-col items-center justify-center h-1/2">
      <Image src="/emailVerify.svg" height={125} width={125} alt="logo" />
      <h1 className="font-bold text-2xl">Verify Email</h1>
      <p className="mt-3">{`You're almost there! We sent an email to`}</p>
      <p className="font-semibold">{email}</p>
      <p className="mt-3">Just click the link in that email to complete your signup.</p>
      <p>{`If you don't see it, you may need to check your spam folder.`}</p>
    </div>
  );
};

export default Verify;
