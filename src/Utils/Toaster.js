import {toast } from 'react-toastify';

const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    }

export const toastSuccess = (message) => {
toast.success(message, toastConfig)
}

export const toastInfo = (message) => {
toast.info(message, toastConfig)
}

export const toastWarning = (message) => {
toast.warn(message, toastConfig)
}

export const toastError = (message) => {
toast.error(message, toastConfig)
}

export const toastDefault = (message) => {
toast(message, toastConfig)
}