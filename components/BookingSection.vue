<template>
    <div class="reservation">
        <div class="bg-calamar-wrapper">
            <img class="bg-calamar-img" alt="" src="~assets/images/calamar.png">
            <div class="reservation-form">
                <h1 class="form-title">Réservation</h1>
                <div class="info-form">
                    <div class="row">
                        <input class="input" placeholder="Nom" type="text">
                        <input class="input" placeholder="Prénom" type="text">
                        <input class="input" placeholder="Adresse mail" type="email">
                        <input class="input" placeholder="Téléphone" type="text">
                        <input class="input" placeholder="Nombre" type="number">
                    </div>
                    <div class="select-date">
                        <div class="select-date-controls">
                            <h1 class="selected-date-range">Juin 29 - Juillet 6</h1>
                        </div>
                        <div class="date-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th v-for="date in uniqueDates" class="dateContainer">
                                            <p class="weekDay">{{ date.day.substr(0, 4) }}</p>
                                            <p class="date">{{ date.day.substr(4) }}</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="time in uniqueTimes" :key="time">
                                        <td class="hour" v-for="date in uniqueDates">{{ time }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const uniqueDates = ref([]);
const uniqueTimes = ref([]);

const generateTimes = (hourFrom, hourTo, increments) => {
    const times = [];
    for(let i = hourFrom; i < hourTo; i += increments / 60) {
        const hour = Math.floor(i);
        const minute = (i - hour) * 60;
        times.push(`${('0' + hour).slice(-2)}H${('0' + minute).slice(-2)}`);
    }
    return times;
};

const generateDates = (dayFrom, dayTo) => {
    const startDate = new Date(dayFrom);
    const endDate = new Date(dayTo);

    const uniqueDays = [];

    for(let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayString = `${date.toLocaleDateString('fr-FR', { weekday: 'short' }).substring(0,1).toUpperCase()}${date.toLocaleDateString('fr-FR', { weekday: 'short' }).substring(1,3)} ${date.getDate()}/${('0' + (date.getMonth() + 1)).slice(-2)}`;
        uniqueDays.push({
            day: dayString
        });
    }

    return uniqueDays;
};

onMounted(() => {
    uniqueDates.value = generateDates("2023-06-29", "2023-07-06");
    uniqueTimes.value = generateTimes(9.5, 11.5, 30);
});

</script>

<style>
* {
    font-family: "Red Hat Display";
}

.reservation {
    height: 100%;
    width: 100%;
}

.form-title {
    line-height: 33px;
    font-weight: 600;
    text-align: start;
    font-size: 30px;
    width: 213px;
}

.select-date{
    width: 100%;
}

.selected-date-range{
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    text-align: start;
    font-size: 30px;
}

.bg-calamar-img {
    position: inherit;
    object-fit: contain;
    object-position: left;
    left: -37.5%;
}

.bg-calamar-wrapper {
    position: relative;
    margin: 5em;
    height: 100%;
    width: 90%;
    border-radius: 20px;
    background-color: rgba(176, 208, 225, 0.3);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: right;
    box-sizing: border-box;
}

.reservation-form {
    height: 84.9%;
    width: 54.5%;
    position: absolute;
    z-index: 1;
    text-align: center;
    right: 5.9%;
    color: #02295f;
    font-family: "Red Hat Display";
}

.info-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
}

.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
}

.input {
    border: 0;
    background-color: #fff;
    border-radius: 10px;
    width: 242px;
    padding: 11px 28px;
    box-sizing: border-box;
    font-size: 24px;
    margin-right: 44px;
    margin-bottom: 46px;
}

.input::placeholder {
    color: #02295f;
    font-family: 'Red Hat Display';
}

.date-table {
    margin-top: 20px;
}

.date-table table {
    border-collapse: collapse;
    width: 100%;
}

.dateContainer{
    font-weight: 100;
}

.weekDay{
    margin: 0px;
    font-size: 24px;
}

.date{
    margin: 0px;
    font-size: 14px;
}

.hour{
    background-color: white;
    border-radius: 10%;
    width: 99px;
    height: 55px;
    font-size: 14px;
    margin-top: 14%;
}
</style>



