/* 传授穿透连接技能 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            qm.sendNext("点击画面左侧的相关图标，可以随时指定被传授的角色。");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.sendYesNo("可以将连锁技能#b#e穿透#n#k传授给账号内的其他角色。现在要指定被传授的角色吗？");
    } else if (status == 1) {
        if (qm.hasSkill(20040218)) { //20040218 - 穿透 - 用穿透一切阻碍的光之力量，无视敌人的部分防御力。
            qm.sendLinkSkillWindow(20040218);
            qm.completeQuest();
        }
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.completeQuest();
    qm.dispose();
}