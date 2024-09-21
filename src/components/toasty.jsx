import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toasty = (toastType, msg) => {
  return (
    <>
      {toastType === "success"
        ? toast.success(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyClassName: "info-toast-body",
            style: {
              background: "black",
              color: "white",
            },
          })
        : toast.error(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            bodyClassName: "info-toast-body",
            style: {
              background: "black",
              color: "white",
            },
          })}
    </>
  );
};
export default Toasty;
