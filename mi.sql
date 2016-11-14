SET NAMES UTF8;
DROP DATABASE IF EXISTS mi;
CREATE DATABASE mi CHARSET=UTF8;
USE mi;

CREATE TABLE mi_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(12)
);
INSERT INTO mi_user VALUES(
    '1','leijun','123456'
);
INSERT INTO mi_user VALUES(
    '2','tiantian','666666'
);

CREATE TABLE mi_select(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pic VARCHAR(64),
    pname VARCHAR(32),
    price FLOAT(8,2),
    pevaluate VARCHAR(32),
    type VARCHAR(32)
);
INSERT INTO mi_select VALUES
('1','Image/main/match_03.jpg','小米移动电源10000mAh高配版','149元','2万人评价','match'),
('2','Image/main/match_04.jpg','小米圈铁耳机','99元','1.3万人评价','match'),
('3','Image/main/match_05.jpg','小米移动电源10000mAh','79元','19.1万人评价','match'),
('4','Image/main/match_06.jpg','小米插线板','49元','24.7万人评价','match'),
('5','Image/main/match_07.jpg','小米活塞耳机 基础版','29元','5.4万人评价','match'),
('6','Image/main/match_08.jpg','小米小钢炮蓝牙音箱2','129元','1.2万人评价','match'),
('7','Image/main/match_09.jpg','小米蓝牙耳机','79元','8.8万人评价','match'),
('8','Image/main/parts_03.jpg','小米随身WIFI','19.5元','1.2万人评价','parts'),
('9','Image/main/parts_04.jpg','指环式防滑手机支架','12.5元','7976人评价','parts'),
('10','Image/main/parts_05.jpg','小米自拍杆','49元','1.95万人评价','parts'),
('11','Image/main/parts_06.jpg','青米USB快速充电数据线','14.5元','1.7万人评价','parts'),
('12','Image/main/parts_07.jpg','苹果Lightning to USB数据线','39元','1.6万人评价','parts'),
('13','Image/main/parts_08.jpg','米家随身风扇','19.9元','3976人评价','parts'),
('14','Image/main/parts_09.jpg','功夫米兔手机支架','19元','1.9万人评价','parts'),
('15','Image/main/rim_03.jpg','小米V领短袖T恤 男款','29元','1.5万人评价','rim'),
('16','Image/main/rim_04.jpg','小米短袖T恤 水管工米兔','29元','3529人评价','rim'),
('17','Image/main/rim_05.jpg','小米短袖T恤 新国货','29元','459人评价','rim'),
('18','Image/main/rim_06.jpg','小米V领短袖T恤 女款','29元','3029人评价','rim'),
('19','Image/main/rim_07.jpg','小米经典商务双肩包','99元','1726人评价','rim'),
('20','Image/main/rim_08.jpg','米家随身电蚊香','29元','4321人评价','rim'),
('21','Image/main/rim_09.jpg','米家LED随身灯 增强版','19.9元','1899人评价','rim');


