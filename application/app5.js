window.l = console.log


var banana = {
    CONSOLE: 0,
    ALERT: 1

}



function printOutput(printMode) {
    if (printMode === banana.CONSOLE) {
        console.log('value');
    }
    else if (printMode === banana.ALERT) {
        console.log('value ALERT');
    }
}
// printOutput( banana.CONSOLE);
// printOutput( banana.ALERT);
// l(banana)
export default 'app5'
