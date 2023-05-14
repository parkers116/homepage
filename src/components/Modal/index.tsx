import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { closeModalProjectDetails } from "../../features/app/appSlice";

type ModalProps = {
  children: JSX.Element;
  name?: string;
  className?: string;
  element?: string;
  isNoBG?: boolean;
};

const Modal = ({ children, name, className = "modal", element = "div" }: ModalProps) => {
  const [container] = React.useState(() => document.createElement(element));
  const dispatch = useDispatch();

  useEffect(() => {
    container.classList.add(className);
    container.id = "modal";
    container.addEventListener("mousedown", (evt) => {
      if ((evt?.target as HTMLDivElement).id === "modal") {
        dispatch(closeModalProjectDetails());
      }
    });
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

export default Modal;
