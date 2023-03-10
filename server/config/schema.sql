create table food_truck (id  serial ,name  text not null, date date, primary key(name, date));
insert into food_truck(name, date) values('kfc', now());