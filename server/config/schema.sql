create table food_truck (id  serial ,name  text not null, date string, primary key(name, date));
insert into food_truck(name, date) values('kfc', now());