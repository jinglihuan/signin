create table user(
	id int not null auto_increment,
	username varchar(20) not null,
	realname varchar(255) not null,
	password varchar(255) not null,
	email varchar(50) not null,
	primary key (id,username)
);
create table sign(
	id int not null auto_increment primary key,
	userid int not null,
	is_sign_in tinyint not null comment '1:sign_in',
	sign_time datetime not null,
	sign_date datetime not null
);