var status = -1;
//this quest is DRAGON TRAINING
function start(mode, type, selection) {
	qm.sendNext("Go talk to Chief Stan of Henesys.");
	qm.completeQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.gainExp(100);
	qm.completeQuest();
	qm.dispose();
}