var status = -1;

function start(mode, type, selection) {
    qm.sendNext("Ah, a clue! Let's go back to Scadur.");
    qm.completeQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.dispose();
}