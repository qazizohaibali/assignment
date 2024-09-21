import moment from "moment";
// import { toast } from "react-toastify";

export const buildFormData = (formData, data, parentKey) => {

    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
}
export const serialNumber = (data, index = 0)=> {
    let starting = data.total * (data.current_page - 1);
    index++;
    return starting + index;
  }
  
  export const format_date = (date,format = "LL") => moment(date).format(format);

// export const formatTime=(time,format="hh:mm") =>moment(time).format(format)
// export const notification = (message,type = 'success')=> {
//     toast[type](message, {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: 0,
//       });
//   }
//   export const notificationError = (message,type = 'error')=> {
//     toast[type](message, {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: 0,
//       });
//   }