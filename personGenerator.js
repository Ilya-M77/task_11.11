const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Екатерина",
            "id_2": "Юлия",
            "id_3": "Анастасия",
            "id_4": "Евгения",
            "id_5": "Ольга",
            "id_6": "Татьяна",
            "id_7": "Снежана",
            "id_8": "Елена",
            "id_9": "Ксения",
            "id_10": "Наталья"
        }
    }`,
    patronymicJson: `{
        "count": 7,
        "list": {     
            "id_1": "Иванов",
            "id_2": "Петров",
            "id_3": "Александров",
            "id_4": "Адреев",
            "id_5": "Михайлов",
            "id_6": "Дмитриев",
            "id_7": "Павлов"
            
        }
    }`,
    profMaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "Сталевар",
            "id_2": "Пожарный",
            "id_3": "Шахтер",
            "id_4": "Грузчик",
            "id_5": "Машинист",
            "id_6": "Военный"
        }
    }`,
    profFemaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Няня",
            "id_2": "Швея",
            "id_3": "Медсестра",
            "id_4": "Воспитатель",
            "id_5": "Танцовщица"
        }
    }`,
    monthJson: `{  
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function () {
        genderRnd = this.randomIntNumber(1, 0) == 0 ? this.GENDER_FEMALE : this.GENDER_MALE;
        return genderRnd;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function () {
        if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
        return this.randomValue(this.firstNameMaleJson);
    },

    randomSurname: function () {
        if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'а';
        }
        return this.randomValue(this.surnameJson);
    },

    randomPatronymic: function () {
        if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.patronymicJson) + 'на';
        }
        return this.randomValue(this.patronymicJson) + 'ич';
    },

    randomProf: function () {
        if (this.person.gender == this.GENDER_FEMALE) {
            return this.randomValue(this.profFemaleJson);
        }
        return this.randomValue(this.profMaleJson);
    },

    randomBirthday: function () {
        month = this.randomValue(this.monthJson);
        year = this.randomIntNumber(2000, 1970);
        if (this.month == 'апрель' || 'июль' || 'сентябрь' || 'ноябрь') {
            date = this.randomIntNumber(1, 30);
        } else if (this.month = 'февраль') {
            date = this.randomIntNumber(1, 29);
        } else {
            date = this.randomIntNumber(1, 31);
        };
        fullDate = `${date} ${month} ${year} г.`;
        console.log(`${fullDate}`);
        return fullDate;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surnameJson = this.randomSurname();
        this.person.patronymicJson = this.randomPatronymic();
        this.person.profJson = this.randomProf();
        this.person.birthday = this.randomBirthday();
        console.log(this.person.birthday);
        return this.person;
    }
};