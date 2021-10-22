import App from "./App.vue";
import HubsAppProto from "../../HubsApp";

class HubsApp extends HubsAppProto {
    constructor (width, height) {
        super(App, width, height)
        this.isInteractive = true;
    }
}

var init = function () {
    let app = new HubsApp(700, 400)
    app.mount()
    return app
}

export default init