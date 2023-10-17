import { toast } from "vue3-toastify";

function error(message) {
    toast.error(message)
}

function success(message) {
    toast.success(message)
}
function info(message) {
    toast.info(message)
}
function warning() {
    toast.error(message)
}

export default { error, success, info, warning }