// https://github.com/a-turtle9302
function fuckall(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "";
        console.log(`fucked all ${containerId}`);
    } else {
        console.warn(`i cant fuckall ${containerId} stupid`);
    }
}
