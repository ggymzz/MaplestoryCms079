var status = -1;

function start(mode, type, selection) {
    if (qm.getPlayer().getJob() > 1000 && qm.getPlayer().getJob() % 10 > 1 && qm.getPlayer().getJob() < 2000) {
        qm.forceStartQuest();
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (qm.canHold(1142069, 1) && !qm.haveItem(1142069, 1) && qm.getPlayer().getJob() > 1000 && qm.getPlayer().getJob() % 10 > 1 && qm.getPlayer().getJob() < 2000) {
        qm.gainItem(1142069, 1);
        qm.forceStartQuest();
        qm.completeQuest();
    }
    qm.dispose();
}