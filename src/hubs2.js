import {createApp} from "vue";
import App from "./apps/AppText.vue";
import { WebLayer3D } from "ethereal";

const cardVue = createApp(App, {}).mount(document.createElement("div"));
const cardLayer = new WebLayer3D(cardVue.$el);

var data = {
    webLayer3D: cardLayer,
    width: 3,   // what we want the target size to be
    height: 2
}
export default data
