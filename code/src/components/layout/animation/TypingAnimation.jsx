"use client";
import Typical from "react-typical";

const TypingAnimation = ({ roles }) => {
  const steps = roles.flatMap((role) => [role, 5000]);

  return <Typical steps={steps} speed={50} loop={Infinity} wrapper="span" />;
};

export default TypingAnimation;
