var started = false;

self.onmessage = function (event) {
    if (event.data == "START") {
        startWork();
    } else {
        sendMessage(event.data);
    }
}

function startWork() {
    started = true;
    self.postMessage("Worker started.");
}

function sendMessage(message) {
    if (started) {
        self.postMessage('[Processed]: ' + message);
    }
}