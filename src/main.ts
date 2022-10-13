import devtools from "@vue/devtools";
import App from "./App.vue";
import Button from "primevue/button";
import PrimeVue from "primevue/config";

import "./assets/main.postcss";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

if (process.env.NODE_ENV === "development") {
  devtools.connect("http://localhost", 8098);
}

const app = createApp(App);

app.use(PrimeVue);
app.component("Button", Button);
app.mount("#app");
