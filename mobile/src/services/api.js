import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com físico: IP da máquina
 * Android com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android com Emulador: 10.0.2.2 (Android Studio) * 
 * Android com físico: IP da máquina
 */