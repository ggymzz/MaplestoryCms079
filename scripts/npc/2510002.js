 status = -1; 
var itemList = Array(
//------药水------
Array(2045200, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045201, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045202, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045203, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045204, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045205, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045206, 500, 1, 0), //双弩枪攻击力卷轴
Array(2045208, 500, 1, 0), //双弩枪攻击力卷轴
Array(2340000, 50, 1, 0), //祝福卷轴
Array(2043400, 500, 1, 0), //刀攻击力卷轴 100%
Array(2043401, 500, 1, 0), //刀攻击力卷轴 60% 
Array(2043402, 500, 1, 0), //刀攻击力卷轴 10%
Array(2043403, 500, 1, 0), //刀攻击力卷轴
Array(2043404, 500, 1, 0), //刀攻击力卷轴
Array(2040000, 500, 1, 0), //头盔防御卷轴 成功率100%
Array(2040001, 500, 1, 0), //头盔防御卷轴60%
Array(2040002, 500, 1, 0), //头盔防御卷轴10%
Array(2040003, 500, 1, 0), //头盔体力卷轴100%
Array(2040004, 500, 1, 0), //头盔体力卷轴60%
Array(2040005, 500, 1, 0), //头盔体力卷轴10%
Array(2040008, 500, 1, 0), //头盔防御诅咒卷轴70%
Array(2040009, 500, 1, 0), //头盔防御诅咒卷轴30%
Array(2040010, 500, 1, 0), //头盔体力诅咒卷轴70%
Array(2040011, 500, 1, 0), //头盔体力诅咒卷轴30%
Array(2040012, 500, 1, 1), //头盔智力卷轴70%
Array(2040013, 500, 1, 1), //头盔智力卷轴30%
Array(2040014, 500, 1, 0), //头盔命中率诅咒卷轴70%
Array(2040015, 500, 1, 0), //头盔命中率诅咒卷轴30%
Array(2040016, 600, 1, 0), //头盔命中率卷轴10%
Array(2040017, 500, 1, 0), //头盔命中率卷轴60%
Array(2040018, 500, 1, 0), //头盔命中率卷轴100%
Array(2040019, 500, 1, 0), //头盔防御卷轴65%
Array(2040020, 500, 1, 0), //头盔防御卷轴15%
Array(2040021, 500, 1, 0), //头盔体力卷轴65%
Array(2040022, 500, 1, 0), //头盔体力卷轴15%
Array(2040024, 500, 1, 0), //头盔智力卷轴100%
Array(2040025, 500, 1, 0), //头盔智力卷轴60%
Array(2040026, 500, 1, 1), //头盔智力卷轴10%
Array(2040027, 500, 1, 0), //头盔敏捷卷轴100%
Array(2040028, 750, 1, 0), //头盔敏捷卷轴70%
Array(2040029, 500, 1, 0), //头盔敏捷卷轴60%
Array(2040030, 500, 1, 0), //头盔敏捷卷轴30%
Array(2040031, 500, 1, 1), //头盔敏捷卷轴10%
Array(2040043, 500, 1, 0), //头盔敏捷卷轴65%
Array(2040044, 500, 1, 1), //头盔敏捷卷轴15%
Array(2040100, 500, 1, 0), //脸部装饰生命卷轴10%
Array(2040101, 500, 1, 0), //脸部装饰生命卷轴60%
Array(2040103, 500, 1, 0), //脸部装饰生命诅咒卷轴30%
Array(2040104, 500, 1, 0), //脸部装饰生命诅咒卷轴70%
Array(2040105, 500, 1, 1), //脸部装饰回避率卷轴10%
Array(2040106, 500, 1, 0), //脸部装饰回避率卷轴60%
Array(2040108, 500, 1, 0), //脸部装饰回避率诅咒卷轴30%
Array(2040109, 800, 1, 0), //脸部装饰回避率诅咒卷轴70%
Array(2040200, 200, 1, 1), //眼部装饰命中率卷轴10%
Array(2040201, 200, 1, 1), //眼部装饰命中率卷轴60%
Array(2040203, 200, 1, 1), //眼部装饰命中率诅咒卷轴30%
Array(2040204, 200, 1, 1), //眼部装饰命中率诅咒卷轴70%
Array(2040205, 200, 1, 1), //眼部装饰智力卷轴10%
Array(2040206, 200, 1, 1), //眼部装饰智力卷轴60%
Array(2040208, 200, 1, 1), //眼部装饰智力诅咒卷轴30%
Array(2040209, 200, 1, 1), //眼部装饰智力诅咒卷轴70%
Array(2040300, 100, 1, 0), //耳环智力卷轴100%
Array(2040301, 100, 1, 0), //耳环智力卷轴60%
Array(2040302, 150, 1, 1), //耳环智力卷轴10%
Array(2040304, 100, 1, 0), //耳环智力诅咒卷轴70%
Array(2040305, 100, 1, 0), //耳环智力诅咒卷轴30%
Array(2040306, 200, 1, 0), //耳环敏捷卷轴70%
Array(2040307, 200, 1, 0), //耳环敏捷卷轴30%
Array(2040308, 500, 1, 0), //耳环防御力诅咒卷轴70%
Array(2040309, 500, 1, 0), //耳环防御力诅咒卷轴30%
Array(2040310, 500, 1, 0), //耳环防御力卷轴10%
Array(2040311, 500, 1, 0), //耳环防御力卷轴60%
Array(2040312, 500, 1, 0), //耳环防御力卷轴100%
Array(2040313, 100, 1, 1), //耳环智力卷轴65%
Array(2040314, 200, 1, 1), //耳环智力卷轴15%
Array(2040316, 100, 1, 0), //耳环敏捷卷轴100%
Array(2040317, 100, 1, 0), //耳环敏捷卷轴60%
Array(2040318, 200, 1, 1), //耳环敏捷卷轴10%
Array(2040319, 200, 1, 0), //耳环装饰运气卷轴100%
Array(2040320, 200, 1, 0), //耳环运气卷轴70%
Array(2040321, 200, 1, 0), //耳环装饰运气卷轴60%
Array(2040322, 200, 1, 0), //耳环装饰运气卷轴30%
Array(2040323, 100, 1, 1), //耳环运气卷轴10%
Array(2040324, 500, 1, 0), //耳环装饰体力卷轴100%
Array(2040325, 600, 1, 0), //耳环装饰体力卷轴70%
Array(2040326, 100, 1, 0), //耳环装饰体力卷轴60%
Array(2040327, 100, 1, 0), //耳环装饰体力卷轴30%
Array(2040328, 100, 1, 0), //耳环装饰体力卷轴10%
Array(2040335, 500, 1, 0), //耳环装饰敏捷卷轴65%
Array(2040336, 500, 1, 0), //耳环装饰敏捷卷轴15%
Array(2040337, 500, 1, 0), //耳环装饰运气卷轴65%
Array(2040338, 500, 1, 0), //耳环装饰运气卷轴15%
Array(2040339, 500, 1, 0), //耳环装饰体力卷轴65%
Array(2040340, 500, 1, 0), //耳环装饰体力卷轴15%
Array(2040400, 500, 1, 0), //上衣防御卷轴100%
Array(2040401, 500, 1, 0), //上衣防御卷轴60%
Array(2040402, 500, 1, 0), //上衣防御卷轴10%
Array(2040404, 500, 1, 0), //上衣防御诅咒卷轴70%
Array(2040405, 500, 1, 0), //上衣防御诅咒卷轴30%
Array(2040406, 500, 1, 0), //上衣力量卷轴70%
Array(2040407, 500, 1, 0), //上衣力量卷轴30%
Array(2040408, 500, 1, 0), //上衣体力卷轴70%
Array(2040409, 500, 1, 0), //上衣体力卷轴30%
Array(2040410, 300, 1, 0), //上衣运气诅咒卷轴70%
Array(2040411, 300, 1, 0), //上衣运气诅咒卷轴30%
Array(2040412, 300, 1, 0), //上衣运气卷轴10%
Array(2040413, 300, 1, 0), //上衣运气卷轴60%
Array(2040414, 500, 1, 0), //上衣运气卷轴100%
Array(2040415, 500, 1, 0), //上衣防御力卷轴65%
Array(2040416, 500, 1, 0), //上衣防御力卷轴15%
Array(2040417, 500, 1, 0), //上衣力量卷轴100%
Array(2040418, 500, 1, 0), //上衣力量卷轴60%
Array(2040419, 500, 1, 0), //上衣力量卷轴10%
Array(2040420, 500, 1, 0), //上衣体力卷轴100%
Array(2040421, 500, 1, 0), //上衣体力卷轴60%
Array(2040422, 500, 1, 0), //上衣体力卷轴10%
Array(2040423, 500, 1, 0), //上衣运气卷轴100%
Array(2040424, 500, 1, 0), //上衣运气卷轴70%
Array(2040425, 500, 1, 0), //上衣运气卷轴60%
Array(2040426, 500, 1, 0), //上衣运气卷轴30%
Array(2040427, 500, 1, 0), //上衣运气卷轴10%
Array(2040431, 500, 1, 0), //上衣力量卷轴65%
Array(2040432, 500, 1, 0), //上衣力量卷轴15%
Array(2040433, 500, 1, 0), //上衣体力卷轴65%
Array(2040434, 500, 1, 0), //上衣体力卷轴15%"
Array(2040435, 500, 1, 0), //上衣运气卷轴65%
Array(2040436, 500, 1, 0), //上衣运气卷轴15%
Array(2040500, 500, 1, 0), //全身铠甲敏捷卷轴100%
Array(2040501, 200, 1, 0), //全身铠甲敏捷卷轴60%
Array(2040502, 100, 1, 1), //全身铠甲敏捷卷轴10%
Array(2040503, 300, 1, 0), //全身铠甲防御卷轴100%
Array(2040504, 100, 1, 0), //全身铠甲防御卷轴60%
Array(2040505, 200, 1, 0), //全身铠甲防御卷轴10%
Array(2040508, 300, 1, 0), //全身铠甲敏捷诅咒卷轴70%
Array(2040509, 300, 1, 0), //全身铠甲敏捷诅咒卷轴30%
Array(2040510, 300, 1, 0), //全身铠甲防御诅咒卷轴70%
Array(2040511, 300, 1, 0), //全身铠甲防御诅咒卷轴70%
Array(2040512, 300, 1, 0), //全身铠甲智力卷轴100%
Array(2040513, 300, 1, 0), //全身铠甲智力卷轴60%
Array(2040514, 200, 1, 0), //全身铠甲智力卷轴10%
Array(2040515, 400, 1, 1), //全身铠甲运气卷轴100%
Array(2040516, 400, 1, 0), //全身铠甲运气卷轴60%
Array(2040517, 300, 1, 0), //全身铠甲运气卷轴10%
Array(2040518, 400, 1, 0), //全身盔甲智力卷轴70%
Array(2040519, 400, 1, 0), //全身盔甲智力卷轴30%
Array(2040520, 400, 1, 0), //全身盔甲幸运卷轴70%
Array(2040521, 400, 1, 0), //全身盔甲幸运卷轴30%
Array(2040522, 400, 1, 0), //全身盔甲敏捷卷轴65%
Array(2040523, 300, 1, 0), //全身盔甲敏捷卷轴15%
Array(2040524, 400, 1, 0), //全身盔甲防御卷轴65%
Array(2040525, 400, 1, 0), //全身盔甲防御卷轴15%
Array(2040526, 300, 1, 0), //全身盔甲智力卷轴65%
Array(2040527, 400, 1, 0), //全身盔甲智力卷轴15%
Array(2040528, 300, 1, 0), //全身盔甲幸运卷轴65%
Array(2040529, 400, 1, 0), //全身盔甲幸运卷轴15%
Array(2040530, 500, 1, 0), //全身盔甲力量卷轴100%
Array(2040531, 400, 1, 0), //全身盔甲力量卷轴70%
Array(2040532, 400, 1, 0), //全身盔甲力量卷轴60%
Array(2040533, 400, 1, 0), //全身盔甲力量卷轴30%
Array(2040534, 300, 1, 1), //全身盔甲力量卷轴10%
Array(2040540, 400, 1, 1), //全身盔甲力量卷轴65%
Array(2040541, 500, 1, 1), //全身盔甲力量卷轴15%
Array(2040600, 500, 1, 0), //裤/裙防御卷轴100%
Array(2040601, 500, 1, 0), //裤/裙防御卷轴60%
Array(2040602, 500, 1, 0), //裤/裙防御卷轴10%
Array(2040604, 500, 1, 0), //裤/裙防御诅咒卷轴70%
Array(2040605, 500, 1, 0), //裤/裙防御诅咒卷轴30%
Array(2040606, 500, 1, 0), //裤裙跳跃诅咒卷轴70%
Array(2040607, 500, 1, 0), //裤裙跳跃诅咒卷轴30%
Array(2040608, 500, 1, 0), //裤裙体力诅咒卷轴70%
Array(2040609, 500, 1, 0), //裤裙体力诅咒卷轴30%
Array(2040610, 500, 1, 0), //裤裙敏捷诅咒卷轴70%
Array(2040611, 500, 1, 0), //裤裙敏捷诅咒卷轴30%
Array(2040612, 500, 1, 0), //裤裙敏捷卷轴10%
Array(2040613, 500, 1, 0), //裤裙敏捷卷轴60%
Array(2040614, 500, 1, 0), //裤裙敏捷卷轴100%
Array(2040615, 500, 1, 0), //裤裙防御卷轴65%
Array(2040616, 500, 1, 0), //裤裙防御卷轴15%
Array(2040617, 500, 1, 0), //裤裙跳跃卷轴100%
Array(2040618, 500, 1, 0), //裤裙跳跃卷轴60%
Array(2040619, 500, 1, 0), //裤裙跳跃卷轴10%
Array(2040620, 500, 1, 0), //裤裙体力卷轴100%
Array(2040621, 500, 1, 0), //裤裙体力卷轴60%
Array(2040622, 500, 1, 0), //裤裙体力卷轴10%
Array(2040623, 300, 1, 0), //裤裙敏捷卷轴100%
Array(2040624, 300, 1, 0), //裤裙敏捷卷轴70%
Array(2040625, 300, 1, 0), //裤裙敏捷卷轴60%
Array(2040626, 300, 1, 0), //裤裙敏捷卷轴30%
Array(2040627, 200, 1, 0), //裤裙敏捷卷轴10%
Array(2040631, 100, 1, 0), //裤裙跳跃卷轴65%
Array(2040632, 300, 1, 0), //裤裙跳跃卷轴15%
Array(2040633, 400, 1, 0), //裤裙体力卷轴65%
Array(2040634, 400, 1, 0), //裤裙体力卷轴15%
Array(2040635, 200, 1, 0), //裤裙敏捷卷轴65%
Array(2040636, 400, 1, 0), //裤裙敏捷卷轴15%
Array(2040700, 200, 1, 0), //鞋子敏捷度卷轴100%
Array(2040701, 300, 1, 0), //鞋子敏捷度卷轴60%
Array(2040702, 400, 1, 0), //鞋子敏捷度卷轴10%
Array(2040703, 200, 1, 0), //鞋子跳跃卷轴100%
Array(2040704, 300, 1, 0), //鞋子跳跃卷轴60%
Array(2040705, 400, 1, 0), //鞋子跳跃卷轴10%
Array(2040706, 500, 1, 0), //鞋子速度卷轴100%
Array(2040707, 500, 1, 0), //鞋子速度卷轴60%
Array(2040708, 500, 1, 0), //鞋子速度卷轴10%
Array(2040712, 500, 1, 0), //鞋子敏捷诅咒卷轴70%
Array(2040713, 500, 1, 0), //鞋子敏捷诅咒卷轴30%
Array(2040714, 500, 1, 0), //鞋子跳跃诅咒卷轴70%
Array(2040715, 500, 1, 0), //鞋子跳跃诅咒卷轴30%
Array(2040716, 500, 1, 0), //鞋子速度诅咒卷轴70%
Array(2040717, 500, 1, 0), //鞋子速度诅咒卷轴30%
Array(2040718, 300, 1, 0), //鞋子敏捷卷轴65%
Array(2040719, 400, 1, 0), //鞋子敏捷卷轴15%
Array(2040720, 300, 1, 0), //鞋子跳跃卷轴65%
Array(2040721, 300, 1, 0), //鞋子跳跃卷轴15%
Array(2040722, 500, 1, 0), //鞋子速度卷轴65%
Array(2040723, 500, 1, 0), //鞋子速度卷轴15%
Array(2040727, 500, 1, 0), //鞋子防滑卷轴10%
Array(2040800, 300, 1, 1), //手套敏捷卷轴100%
Array(2040801, 400, 1, 1), //手套敏捷卷轴60%
Array(2040802, 300, 1, 1), //手套敏捷卷轴10%
Array(2040803, 100, 1, 1), //手套攻击卷轴100%
Array(2040804, 400, 1, 1), //手套攻击卷轴60%
Array(2040805, 200, 1, 1), //手套攻击卷轴10%
Array(2040808, 500, 1, 0), //手套敏捷诅咒卷轴70%
Array(2040809, 500, 1, 0), //手套敏捷诅咒卷轴30%
Array(2040810, 100, 1, 1), //手套攻击诅咒卷轴70%
Array(2040811, 100, 1, 1), //手套攻击诅咒卷轴30%
Array(2040812, 500, 1, 0), //手套体力卷轴70%
Array(2040813, 500, 1, 0), //手套体力卷轴30%
Array(2040814, 500, 1, 0), //手套魔力诅咒卷轴70%
Array(2040815, 500, 1, 0), //手套魔力诅咒卷轴30%
Array(2040816, 500, 1, 0), //手套魔力卷轴10%
Array(2040817, 500, 1, 0), //手套魔力卷轴60%
Array(2040818, 500, 1, 0), //手套魔力卷轴100%
Array(2040819, 500, 1, 0), //手套敏捷卷轴65%
Array(2040820, 500, 1, 0), //手套敏捷卷轴15%
Array(2040821, 300, 1, 1), //手套攻击卷轴65%
Array(2040822, 300, 1, 1), //手套攻击卷轴15%
Array(2040823, 200, 1, 0), //手套体力卷轴100%
Array(2040824, 500, 1, 0), //手套体力卷轴60%
Array(2040825, 500, 1, 0), //手套体力卷轴10%
Array(2040831, 500, 1, 0), //手套体力卷轴65%
Array(2040832, 500, 1, 0), //手套体力卷轴15%
Array(2040900, 500, 1, 0), //盾牌防御卷轴
Array(2040901, 500, 1, 0), //盾牌防御卷轴60%
Array(2040902, 500, 1, 0), //盾牌防御卷轴10%
Array(2040904, 500, 1, 0), //盾牌防御诅咒卷轴70%
Array(2040905, 500, 1, 0), //盾牌防御诅咒卷轴30%
Array(2040906, 500, 1, 0), //盾牌运气卷轴70%
Array(2040907, 500, 1, 0), //盾牌运气卷轴30%
Array(2040908, 500, 1, 0), //盾牌体力卷轴70%
Array(2040909, 500, 1, 0), //盾牌体力卷轴30%
Array(2040910, 500, 1, 0), //盾牌防御卷轴65%
Array(2040911, 500, 1, 0), //盾牌防御卷轴15%
Array(2040914, 300, 1, 0), //盾牌攻击卷轴60%
Array(2040915, 300, 1, 0), //盾牌攻击卷轴10%
Array(2040916, 400, 1, 0), //盾牌攻击诅咒卷轴70%
Array(2040917, 200, 1, 0), //盾牌攻击诅咒卷轴30%
Array(2040919, 200, 1, 0), //盾牌魔力卷轴60%
Array(2040920, 300, 1, 0), //盾牌魔力卷轴10%
Array(2040921, 300, 1, 0), //盾牌魔力诅咒卷轴70%
Array(2040922, 400, 1, 0), //盾牌魔力诅咒卷轴30%
Array(2040923, 200, 1, 0), //盾牌运气卷轴100%
Array(2040924, 300, 1, 0), //盾牌运气卷轴60%
Array(2040925, 400, 1, 0), //盾牌运气卷轴10%
Array(2040926, 800, 1, 0), //盾牌体力卷轴100%
Array(2040927, 800, 1, 0), //盾牌体力卷轴60%
Array(2040928, 800, 1, 0), //盾牌体力卷轴10%
Array(2040929, 400, 1, 0), //盾牌力量卷轴100%
Array(2040930, 300, 1, 0), //盾牌力量卷轴70%
Array(2040931, 200, 1, 0), //盾牌力量卷轴60%
Array(2040932, 100, 1, 0), //盾牌力量卷轴30%
Array(2040933, 300, 1, 0), //盾牌力量卷轴10%
Array(2040937, 400, 1, 0), //盾牌运气卷轴65%
Array(2040938, 200, 1, 0), //盾牌运气卷轴15%
Array(2040939, 300, 1, 0), //盾牌体力卷轴65%
Array(2040940, 100, 1, 0), //盾牌体力卷轴15%
Array(2040941, 300, 1, 0), //盾牌力量卷轴65%
Array(2040942, 300, 1, 0), //盾牌力量卷轴15%
Array(2041000, 300, 1, 0), //披风魔防卷轴100%
Array(2041001, 300, 1, 0), //披风魔防卷轴60%
Array(2041002, 300, 1, 0), //披风魔防卷轴10%
Array(2041003, 300, 1, 0), //披风防御卷轴100%
Array(2041004, 300, 1, 0), //披风防御卷轴60%
Array(2041005, 300, 1, 0), //披风防御卷轴10%
Array(2041006, 300, 1, 0), //披风体力卷轴100%
Array(2041007, 300, 1, 0), //披风体力卷轴60%
Array(2041008, 300, 1, 0), //披风体力卷轴10%
Array(2041009, 300, 1, 0), //披风魔力卷轴100%
Array(2041010, 300, 1, 0), //披风魔力卷轴60%
Array(2041011, 300, 1, 0), //披风魔力卷轴10%
Array(2041012, 300, 1, 0), //披风力量卷轴100%
Array(2041013, 300, 1, 0), //披风力量卷轴60%
Array(2041014, 300, 1, 0), //披风力量卷轴10%
Array(2041015, 340, 1, 0), //披风智力卷轴100%
Array(2041016, 300, 1, 0), //披风智力卷轴60%
Array(2041017, 300, 1, 0), //披风智力卷轴10%
Array(2041018, 300, 1, 0), //披风敏捷卷轴100%
Array(2041019, 300, 1, 0), //披风敏捷卷轴60%
Array(2041020, 300, 1, 0), //披风敏捷卷轴10%
Array(2041021, 300, 1, 0), //披风运气卷轴100%
Array(2041022, 300, 1, 0), //披风运气卷轴60%
Array(2041023, 300, 1, 0), //披风运气卷轴10%
Array(2041026, 300, 1, 0), //披风魔防诅咒卷轴70%
Array(2041027, 300, 1, 0), //披风魔防诅咒卷轴30%
Array(2041028, 300, 1, 0), //披风防御诅咒卷轴70%
Array(2041029, 300, 1, 0), //披风防御诅咒卷轴30%
Array(2041030, 300, 1, 0), //披风体力诅咒卷轴70%
Array(2041031, 300, 1, 0), //披风体力诅咒卷轴30%
Array(2041032, 300, 1, 0), //披风魔力诅咒卷轴70%
Array(2041033, 300, 1, 0), //披风魔力诅咒卷轴30%
Array(2041034, 300, 1, 0), //披风力量诅咒卷轴70%
Array(2041035, 300, 1, 0), //披风力量诅咒卷轴30%
Array(2041036, 300, 1, 0), //披风智力诅咒卷轴70%
Array(2041037, 300, 1, 0), //披风智力诅咒卷轴30%
Array(2041038, 300, 1, 0), //披风敏捷诅咒卷轴70%
Array(2041039, 300, 1, 0), //披风敏捷诅咒卷轴30%
Array(2041040, 300, 1, 0), //披风运气诅咒卷轴70%
Array(2041041, 300, 1, 0), //披风运气诅咒卷轴30%
Array(2041042, 300, 1, 0), //披风魔法防御卷轴65%
Array(2041043, 300, 1, 0), //披风魔法防御卷轴15%
Array(2041044, 300, 1, 0), //披风物理防御卷轴65%
Array(2041045, 300, 1, 0), //披风物理防御卷轴15%
Array(2041046, 300, 1, 0), //披风体力卷轴65%
Array(2041047, 300, 1, 0), //披风体力卷轴15%
Array(2041048, 300, 1, 0), //披风魔力卷轴65%
Array(2041049, 300, 1, 0), //披风魔力卷轴15%
Array(2041050, 300, 1, 0), //披风力卷轴65%
Array(2041051, 300, 1, 0), //披风力卷轴15%
Array(2041052, 300, 1, 0), //披风智力卷轴65%
Array(2041053, 300, 1, 0), //披风智力卷轴15%
Array(2041054, 300, 1, 0), //披风敏捷卷轴65%
Array(2041055, 300, 1, 0), //披风敏捷卷轴15%
Array(2041056, 300, 1, 0), //披风幸运卷轴65%
Array(2041057, 300, 1, 1), //披风幸运卷轴15%
Array(2041058, 300, 1, 1), //披风防寒卷轴10%
Array(2041102, 300, 1, 1), //戒指力量卷轴10%
Array(2041105, 300, 1, 1), //戒指智力卷轴10%
Array(2041108, 300, 1, 1), //戒指敏捷卷轴10%
Array(2041111, 300, 1, 1), //戒指运气卷轴10%
Array(2041201, 300, 1, 1), //项链运气卷轴10%
Array(2041202, 300, 1, 1), //项链运气卷轴60%
Array(2041203, 300, 1, 1), //项链运气卷轴100%
Array(2041204, 300, 1, 1), //项链运气诅咒卷轴30%
Array(2041205, 300, 1, 1), //项链运气诅咒卷轴70%
Array(2041206, 300, 1, 1), //项链力量卷轴10%
Array(2041207, 300, 1, 1), //项链力量卷轴60%
Array(2041208, 300, 1, 1), //项链力量卷轴100%
Array(2041209, 300, 1, 1), //项链力量诅咒卷轴30%
Array(2041210, 300, 1, 1), //项链力量诅咒卷轴70%
Array(2041300, 300, 1, 0), //腰带力量卷轴100%
Array(2041301, 300, 1, 0), //腰带力量卷轴60%
Array(2041302, 300, 1, 0), //腰带力量卷轴10%
Array(2041303, 300, 1, 0), //腰带智力卷轴100%
Array(2041304, 300, 1, 0), //腰带智力卷轴60%
Array(2041305, 300, 1, 0), //腰带智力卷轴10%
Array(2041306, 300, 1, 0), //腰带敏捷卷轴100%
Array(2041307, 300, 1, 0), //腰带敏捷卷轴60%
Array(2041308, 300, 1, 0), //腰带敏捷卷轴10%
Array(2041309, 300, 1, 0), //腰带运气卷轴100%
Array(2041310, 300, 1, 0), //腰带运气卷轴60%
Array(2041311, 300, 1, 0), //腰带运气卷轴10%
Array(2041312, 300, 1, 0), //腰带力量卷轴70%
Array(2041313, 300, 1, 0), //腰带力量卷轴30%
Array(2041314, 300, 1, 0), //腰带智力卷轴70%
Array(2041315, 300, 1, 0), //腰带智力卷轴30%
Array(2041316, 300, 1, 0), //腰带敏捷卷轴70%
Array(2041317, 300, 1, 0), //腰带敏捷卷轴30%
Array(2041318, 300, 1, 0), //腰带运气卷轴70%
Array(2041319, 300, 1, 0), //腰带运气卷轴30%
Array(2043000, 300, 1, 0), //单手剑攻击卷轴100%
Array(2043001, 300, 1, 0), //单手剑攻击卷轴60%
Array(2043002, 300, 1, 0), //单手剑攻击卷轴10%
Array(2043004, 300, 1, 0), //单手剑攻击诅咒卷轴70%
Array(2043005, 300, 1, 0), //单手剑攻击诅咒卷轴30%
Array(2043006, 300, 1, 0), //单手剑魔力诅咒卷轴70%
Array(2043007, 300, 1, 0), //单手剑魔力诅咒卷轴30%
Array(2043008, 300, 1, 0), //单手剑魔力卷轴10%
Array(2043009, 300, 1, 0), //单手剑魔力卷轴60%
Array(2043010, 300, 1, 0), //单手剑魔力卷轴100%
Array(2043011, 300, 1, 0), //单手剑攻击卷轴65%
Array(2043012, 300, 1, 0), //单手剑攻击卷轴15%
Array(2043015, 300, 1, 0), //单手剑命中率卷轴100%
Array(2043016, 300, 1, 0), //单手剑命中率卷轴70%
Array(2043017, 300, 1, 0), //单手剑命中率卷轴60%
Array(2043018, 300, 1, 0), //单手剑命中率卷轴30%
Array(2043019, 300, 1, 0), //单手剑命中率卷轴10%
Array(2043024, 300, 1, 0), //单手剑命中卷轴65%
Array(2043025, 300, 1, 0), //单手剑命中卷轴15%
Array(2043100, 300, 1, 0), //单手斧攻击卷轴100%
Array(2043101, 300, 1, 0), //单手斧攻击卷轴60%
Array(2043102, 300, 1, 0), //单手斧攻击卷轴10%
Array(2043104, 400, 1, 0), //单手斧攻击诅咒卷轴70%
Array(2043105, 400, 1, 0), //单手斧攻击诅咒卷轴30%
Array(2043106, 400, 1, 0), //单手斧攻击卷轴65%
Array(2043107, 400, 1, 0), //单手斧攻击卷轴15%
Array(2043110, 400, 1, 0), //单手斧命中率卷轴100%
Array(2043111, 400, 1, 0), //单手斧命中率卷轴70%
Array(2043112, 400, 1, 0), //单手斧命中率卷轴60%
Array(2043113, 400, 1, 0), //单手斧命中率卷轴30%
Array(2043114, 400, 1, 0), //单手斧命中率卷轴10%
Array(2043118, 400, 1, 0), //单手斧命中卷轴65%
Array(2043119, 400, 1, 0), //单手斧命中卷轴15%
Array(2043200, 400, 1, 0), //单手钝器攻击卷轴100%
Array(2043201, 400, 1, 0), //单手钝器攻击卷轴60%
Array(2043202, 400, 1, 0), //单手钝器攻击卷轴10%
Array(2043204, 400, 1, 0), //单手钝器攻击诅咒卷轴70%
Array(2043205, 400, 1, 0), //单手钝器攻击诅咒卷轴30%
Array(2043206, 400, 1, 0), //单手钝器攻击卷轴65%
Array(2043207, 400, 1, 0), //单手钝器攻击卷轴15%
Array(2043210, 400, 1, 0), //单手钝器命中率卷轴100%
Array(2043211, 400, 1, 0), //单手钝器命中率卷轴70%
Array(2043212, 400, 1, 0), //单手钝器命中率卷轴60%
Array(2043213, 400, 1, 0), //单手钝器命中率卷轴30%
Array(2043214, 400, 1, 0), //单手钝器命中率卷轴10%
Array(2043218, 400, 1, 0), //单手钝器命中卷轴65%
Array(2043219, 400, 1, 0), //单手钝器命中卷轴15%
Array(2043300, 450, 1, 0), //短剑攻击卷轴100%
Array(2043301, 400, 1, 0), //短剑攻击卷轴60%
Array(2043302, 400, 1, 0), //短剑攻击卷轴10%
Array(2043304, 400, 1, 0), //短剑攻击诅咒卷轴70%
Array(2043305, 400, 1, 0), //短剑攻击诅咒卷轴30%
Array(2043306, 400, 1, 0), //短剑攻击卷轴65%
Array(2043307, 400, 1, 0), //短剑攻击卷轴15%
Array(2043700, 400, 1, 0), //短杖魔力卷轴100%
Array(2043701, 400, 1, 0), //短杖魔力卷轴60%
Array(2043702, 400, 1, 0), //短杖魔力卷轴10%
Array(2043704, 400, 1, 0), //短杖魔力诅咒卷轴70%
Array(2043705, 400, 1, 0), //短杖魔力诅咒卷轴30%
Array(2043706, 400, 1, 0), //短杖魔力卷轴65%
Array(2043707, 400, 1, 0), //短杖魔力卷轴15%
Array(2043800, 400, 1, 0), //长杖魔力卷轴100%
Array(2043801, 400, 1, 0), //长杖魔力卷轴60%
Array(2043802, 300, 1, 0), //长杖魔力卷轴10%
Array(2043804, 300, 1, 0), //长杖魔力诅咒卷轴70%
Array(2043805, 300, 1, 0), //长杖魔力诅咒卷轴30%
Array(2043806, 300, 1, 0), //长杖魔力卷轴65%
Array(2043807, 300, 1, 0), //长杖魔力卷轴15%
Array(2044000, 500, 1, 1), //双手剑攻击卷轴100%
Array(2044001, 300, 1, 1), //双手剑攻击卷轴60%
Array(2044002, 300, 1, 1), //双手剑攻击卷轴10%
Array(2044004, 400, 1, 1), //双手剑攻击诅咒卷轴70%
Array(2044005, 300, 1, 1), //双手剑攻击诅咒卷轴30%
Array(2044006, 300, 1, 1), //双手剑攻击卷轴65%
Array(2044007, 300, 1, 1), //双手剑攻击卷轴15%
Array(2044010, 300, 1, 0), //双手剑命中率卷轴100%
Array(2044011, 300, 1, 0), //双手剑命中率卷轴70%
Array(2044012, 300, 1, 0), //双手剑命中率卷轴60%
Array(2044013, 300, 1, 0), //双手剑命中率卷轴30%
Array(2044014, 300, 1, 0), //双手剑命中率卷轴10%
Array(2044026, 300, 1, 0), //双手剑命中卷轴65%
Array(2044027, 300, 1, 0), //双手剑命中卷轴15%
Array(2044100, 300, 1, 0), //双手斧攻击卷轴100%
Array(2044101, 300, 1, 0), //双手斧攻击卷轴60%
Array(2044102, 300, 1, 0), //双手斧攻击卷轴10%
Array(2044104, 300, 1, 0), //双手斧攻击诅咒卷轴70%
Array(2044105, 300, 1, 0), //双手斧攻击诅咒卷轴%30
Array(2044106, 300, 1, 0), //双手斧攻击卷轴65%
Array(2044107, 300, 1, 0), //双手斧攻击卷轴15%
Array(2044110, 300, 1, 0), //双手斧命中率卷轴100%
Array(2044111, 300, 1, 0), //双手斧命中率卷轴70%
Array(2044112, 300, 1, 0), //双手斧命中率卷轴60%
Array(2044113, 300, 1, 0), //双手斧命中率卷轴30%
Array(2044114, 300, 1, 0), //双手斧命中率卷轴10%
Array(2044118, 300, 1, 0), //双手斧命中卷轴65%
Array(2044119, 300, 1, 0), //双手斧命中卷轴15%
Array(2044200, 300, 1, 0), //双手钝器攻击卷轴100%
Array(2044201, 300, 1, 0), //双手钝器攻击卷轴60%
Array(2044202, 300, 1, 0), //双手钝器攻击卷轴10%
Array(2044204, 300, 1, 0), //双手钝器攻击诅咒卷轴70%
Array(2044205, 300, 1, 0), //双手钝器攻击诅咒卷轴30%
Array(2044206, 300, 1, 0), //双手钝器攻击卷轴65%
Array(2044207, 300, 1, 0), //双手钝器攻击卷轴15%
Array(2044210, 300, 1, 0), //双手钝器命中率卷轴100%
Array(2044211, 300, 1, 0), //双手钝器命中率卷轴70%
Array(2044212, 300, 1, 0), //双手钝器命中率卷轴60%
Array(2044213, 300, 1, 0), //双手钝器命中率卷轴30%
Array(2044214, 300, 1, 0), //双手钝器命中率卷轴10%
Array(2044218, 300, 1, 0), //单手钝器命中卷轴65%
Array(2044219, 300, 1, 0), //单手钝器命中卷轴15%
Array(2044300, 300, 1, 1), //枪攻击卷轴100%
Array(2044301, 300, 1, 1), //枪攻击卷轴60%
Array(2044302, 300, 1, 1), //枪攻击卷轴10%
Array(2044304, 300, 1, 1), //枪攻击诅咒卷轴70%
Array(2044305, 300, 1, 1), //枪攻击诅咒卷轴30%
Array(2044306, 300, 1, 1), //枪攻击卷轴65%
Array(2044307, 300, 1, 1), //枪攻击卷轴15%
Array(2044310, 300, 1, 0), //枪命中率卷轴100%
Array(2044311, 300, 1, 0), //枪命中率卷轴70%
Array(2044312, 300, 1, 0), //枪命中率卷轴60%
Array(2044313, 300, 1, 0), //枪命中率卷轴30%
Array(2044314, 300, 1, 0), //枪命中率卷轴10%
Array(2044318, 300, 1, 0), //枪命中卷轴65%
Array(2044319, 300, 1, 0), //枪命中卷轴15%
Array(2044400, 300, 1, 1), //矛攻击卷轴100%
Array(2044401, 300, 1, 1), //矛攻击卷轴60%
Array(2044402, 300, 1, 1), //矛攻击卷轴10%
Array(2044404, 300, 1, 1), //矛攻击诅咒卷轴70%
Array(2044405, 300, 1, 1), //矛攻击诅咒卷轴30%
Array(2044406, 300, 1, 1), //矛攻击卷轴65%
Array(2044407, 300, 1, 1), //矛攻击卷轴15%
Array(2044410, 300, 1, 0), //矛命中率卷轴100%
Array(2044411, 300, 1, 0), //矛命中率卷轴70%
Array(2044412, 300, 1, 0), //矛命中率卷轴60%
Array(2044413, 300, 1, 0), //矛命中率卷轴30%
Array(2044414, 300, 1, 0), //矛命中率卷轴10%
Array(2044418, 300, 1, 0), //矛命中卷轴65%
Array(2044419, 300, 1, 0), //矛命中卷轴15%
Array(2044500, 300, 1, 0), //弓攻击卷轴100%
Array(2044501, 300, 1, 0), //弓攻击卷轴60%
Array(2044502, 300, 1, 0), //弓攻击卷轴10%
Array(2044504, 300, 1, 0), //弓攻击诅咒卷轴70%
Array(2044505, 300, 1, 0), //弓攻击诅咒卷轴30%
Array(2044506, 300, 1, 0), //弓攻击卷轴65%
Array(2044507, 300, 1, 0), //弓攻击卷轴15%
Array(2044600, 300, 1, 0), //弩攻击卷轴100%
Array(2044601, 300, 1, 0), //弩攻击卷轴60%
Array(2044602, 300, 1, 0), //弩攻击卷轴10%
Array(2044604, 600, 1, 0), //弩攻击诅咒卷轴70%
Array(2044605, 600, 1, 0), //弩攻击诅咒卷轴30%
Array(2044606, 500, 1, 0), //弩攻击卷轴65%
Array(2044607, 500, 1, 0), //弩攻击卷轴15%
Array(2044700, 400, 1, 0), //拳套攻击卷轴100%
Array(2044701, 200, 1, 0), //拳套攻击卷轴60%
Array(2044702, 300, 1, 0), //拳套攻击卷轴10%
Array(2044704, 300, 1, 0), //拳套攻击诅咒卷轴70%
Array(2044705, 300, 1, 0), //拳套攻击诅咒卷轴30%
Array(2044706, 300, 1, 0), //拳套攻击卷轴65%
Array(2044707, 300, 1, 0), //拳套攻击卷轴15%
Array(2044800, 300, 1, 0), //拳甲攻击卷轴100%
Array(2044801, 300, 1, 0), //拳甲攻击卷轴60%
Array(2044802, 300, 1, 0), //拳甲攻击卷轴10%
Array(2044803, 300, 1, 0), //拳甲攻击卷轴70%
Array(2044804, 300, 1, 0), //拳甲攻击卷轴30%
Array(2044805, 300, 1, 0), //拳甲命中率卷轴100%
Array(2044806, 300, 1, 0), //拳甲命中率卷轴70%
Array(2044807, 300, 1, 0), //拳甲命中率卷轴60%
Array(2044808, 300, 1, 0), //拳甲命中率卷轴30%
Array(2044809, 300, 1, 0), //拳甲命中率卷轴10%
Array(2044811, 300, 1, 0), //拳甲攻击卷轴65%
Array(2044812, 300, 1, 0), //指节攻击卷轴15%
Array(2044813, 300, 1, 0), //指节命中卷轴65%
Array(2044814, 300, 1, 0), //指节命中卷轴15%
Array(2044900, 300, 1, 0), //短枪攻击卷轴100%
Array(2044901, 300, 1, 0), //短枪攻击卷轴60%
Array(2044902, 300, 1, 0), //短枪攻击卷轴10%
Array(2044903, 300, 1, 0), //短枪攻击卷轴70%
Array(2044904, 300, 1, 0), //短枪攻击卷轴30%
Array(2044906, 300, 1, 0), //短枪攻击卷轴65%
Array(2044907, 300, 1, 0), //短枪攻击卷轴15%
Array(2049100, 300, 1, 1), //混沌卷轴60%
Array(2049200, 500, 1, 1), //配饰力量卷轴70%
Array(2049201, 500, 1, 1), //配饰力量卷轴30%
Array(2049202, 500, 1, 1), //配饰敏捷卷轴70%
Array(2049203, 500, 1, 1), //配饰敏捷卷轴30%
Array(2049204, 500, 1, 1), //配饰智力卷轴70%
Array(2049205, 500, 1, 1), //配饰智力卷轴30%
Array(2049206, 500, 1, 1), //配饰幸运卷轴70%
Array(2049207, 500, 1, 1), //配饰幸运卷轴30%
Array(2049208, 500, 1, 1), //配饰HP卷轴70%
Array(2049209, 500, 1, 1), //配饰HP卷轴30%
Array(2049210, 500, 1, 1), //配饰MP卷轴70%
Array(2049211, 500, 1, 1), //配饰MP卷轴30%
//-----椅子-----
Array(3010013, 150, 1, 1), //悠长假期
Array(3010014, 150, 1, 1), //月亮弯
Array(3010018, 150, 1, 1), //椰子树沙滩椅
Array(3010019, 150, 1, 1), //寿司椅
Array(3010021, 150, 1, 1), //暖暖桌
Array(3010025, 150, 1, 1), //枫叶纪念凳
Array(3010028, 150, 1, 1), //海盗的俘虏
Array(3010029, 150, 1, 1), //蓝环凳
Array(3010030, 150, 1, 1), //黑环凳
Array(3010031, 150, 1, 1), //红环凳
Array(3010032, 150, 1, 1), //黄环凳
Array(3010033, 150, 1, 1), //绿环凳
Array(3010037, 150, 1, 1), //猪猪凳
Array(3010044, 150, 1, 1), //同一红伞下
Array(3012001, 150, 1, 1), //篝火
Array(3012002, 150, 1, 1), //浴桶
Array(3010073, 150, 1, 1), //PB克缤
Array(3012003, 150, 1, 1), //爱心椅子
Array(3010012, 150, 1, 1), //剑士 宝座
Array(3010025, 150, 1, 1), //枫叶纪念凳
Array(3010037, 150, 1, 1), //猪猪凳
Array(3010038, 150, 1, 1), //爱心椅子
Array(3010040, 150, 1, 1), //蝙蝠椅
Array(3010041, 150, 1, 1), //骷髅王座
Array(3010043, 150, 1, 1), //魔女的飞扫把
Array(3010044, 150, 1, 1), //同一红伞下
Array(3010045, 150, 1, 1), //寒冰椅子
Array(3010046, 150, 1, 1), //红龙椅
Array(3010047, 200, 1, 1), //蓝龙椅
Array(3010048, 200, 1, 1), //圣诞树椅子
Array(3010049, 200, 1, 1), //雪房子
Array(3010050, 200, 1, 1), //公主凳
Array(3010057, 200, 1, 1), //血色玫瑰
Array(3010058, 200, 1, 1), //世界末日
Array(3010068, 200, 1, 1), //露水椅子
Array(3010070, 15, 1, 1), //巨无霸品克缤
Array(3010071, 125, 1, 1), //神兽椅
Array(3010077, 125, 1, 1), //猫头鹰椅子
Array(3010085, 125, 1, 1), //鬼娃娃椅子
Array(3010096, 125, 1, 1), //恐龙化石宝座
Array(3010095, 125, 1, 1), //石头人座椅
Array(3010094, 215, 1, 1), //漂漂猪椅子
Array(3010098, 125, 1, 1), //电视宅人
Array(3010106, 125, 1, 1), //雪狼战椅
Array(3010112, 125, 1, 1), //情书柜子
Array(3010117, 125, 1, 1), //魔法书椅子
Array(3010119, 125, 1, 1), //羊羊椅子
Array(3010120, 125, 1, 1), //彩蛋篮子
Array(3010123, 125, 1, 1), //夏日花朵
Array(3010124, 125, 1, 1), //都纳斯喷气椅子
Array(3010125, 125, 1, 1), //尼贝隆战舰椅
Array(3010127, 125, 1, 1), //扎昆宝座
Array(3012001, 125, 1, 0), //篝火
Array(3010136, 150, 1, 1), //6周年怪物王座
Array(3010155, 150 * 2, 1, 1), //暗影双刀的猫头鹰椅子
Array(3010144, 150 * 2, 1, 1), //七夕椅子
Array(3010149, 150 * 2, 1, 1), //猫咪风扇椅
Array(3010129, 150 * 2, 1, 1), //酋长宝座
Array(3010131, 150 * 2, 1, 1), //贪吃熊猫椅
Array(3010132, 150 * 2, 1, 1), //撒娇喵咪椅
Array(3010133, 150 * 2, 1, 1), //帐篷椅
Array(3010163, 150 * 2, 1, 1), //满月椅
// ------ 特殊奖品 --------------
Array(1112686, 600, 1, 1), //银色戒指
Array(1112687, 600, 1, 1), //金色
Array(1112688, 300, 1, 1), //传说
Array(1032127, 600, 1, 1), //银色耳环
Array(1032128, 600, 1, 1), //金色
Array(1032129, 300, 1, 1), //传说
Array(1122183, 600, 1, 1), //银色项链
Array(1122184, 600, 1, 1), //金色
Array(1122185, 300, 1, 1), //传说
Array(1132133, 600, 1, 1), //银色腰带
Array(1132134, 600, 1, 1), //金色
Array(1132135, 300, 1, 1), //传说
Array(1152075, 600, 1, 1), //银色肩部
Array(1152076, 600, 1, 1), //金色
Array(1152077, 300, 1, 1) //传说

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、新奇道具#k哦！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(5224000)) {
            cm.sendYesNo("拥有#b#v5224000##k就可以来抽取#r幸福树套#k和#b各种卷轴#k哦~！");
        } else {
            cm.sendOk("拥有#b#v5224000##k就可以来抽取#r幸福树套#k和#b各种卷轴#k哦~！");
            cm.dispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "品克缤敲敲乐", notice);
            if (item != -1) {
                cm.gainItem(5224000, -1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
				//cm.gainLockItem(itemId, 1, false, 0, "品克缤敲敲乐");
            } else {
                cm.sendOk("你确实有#b#v5224000##k吗？如果是，请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            cm.dispose();
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：爱心宝石 一个。)不扣除#b#v5224000##k");
            //cm.gainItem(5224000, -1);
            cm.gainItem(4001465, 1);
            cm.dispose();
        }
    }
}