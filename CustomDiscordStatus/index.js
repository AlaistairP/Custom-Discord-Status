var rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
        details: "",
        assets : {
            large_image : "NAME OF IMAGE",
            large_text : "PLACEHOLDER TEXT FOR IMAGE"
        },
        buttons : [{label : "ADD A LABEL FOR YOUR LINK", url: "THE URL FOR YOUR LINK"}],
    }
})
})
client.login({ clientId : "YOUR CLIENT ID HERE" }).catch(console.error);