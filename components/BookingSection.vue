<template>
    <div class="reservation">
        <div class="bg-calamar-wrapper">
            <img class="bg-calamar-img" alt="" src="~assets/images/calamar.png">
            <div class="reservation-form">
                <h1 class="form-title">{{ $t('reservation.formTitle') }}</h1>
                    <div class="info-form">
                    <div class="row">
                        <input class="input" :placeholder="$t('infoForm.inputs.name')" type="text">
                        <input class="input" :placeholder="$t('infoForm.inputs.firstName')" type="text">
                        <input class="input" :placeholder="$t('infoForm.inputs.email')" type="email">
                        <input class="input" :placeholder="$t('infoForm.inputs.phone')" type="text">
                        <input class="input" :placeholder="$t('infoForm.inputs.number')" type="number">
                    </div>
                    <div class="select-date">
                        <div class="select-date-controls">
                            <div class="flex-row daySelect">
                                <h1 class="selected-date-range">{{ $t(firstDayOfWeek.toLocaleString('default', { month: 'long' }).substring(0,1).toUpperCase() + firstDayOfWeek.toLocaleString('default', { month: 'long' }).substring(1)) }} {{ firstDayOfWeek.getDate() }} - {{ $t(lastDayOfWeek.toLocaleString('default', { month: 'long' }).substring(0,1).toUpperCase() + lastDayOfWeek.toLocaleString('default', { month: 'long' }).substring(1)) }} {{ lastDayOfWeek.getDate() }}</h1>
                                <div class="flex-row controls-container">
                                    <p @click="goPreviousWeek" class="weekSelectionButton previousWeekSelectionButton">&lt;</p>
                                    <p @click="goNextWeek" class="weekSelectionButton nextWeekSelectionButton">></p>
                                </div>
                            </div>
                            <div class="timeOfDaySelection flex-row">
                                <p @click="selectTimeOfDay" class="morning timeOfDaySelected" :class="{ timeOfDaySelected: timeOfDay === 'morning' }">{{ $t('reservation.timeOfDaySelection.morning') }}</p>
                                <p @click="selectTimeOfDay" class="afternoon" :class="{ timeOfDaySelected: timeOfDay === 'afternoon' }">{{ $t('reservation.timeOfDaySelection.afternoon') }}</p>
                            </div>
                        </div>
                        <div class="date-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th v-for="date in uniqueDates" class="dateContainer" :key="date">
                                            <p class="weekDay">{{ $t(date.day.substr(0, 3)) }}</p>
                                            <p class="date">{{ date.day.substr(4) }}</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="time in uniqueTimes" :key="time" class="hourContainer">
                                        <td class="hour" :class="getRandomAvailability()" v-for="date in uniqueDates" :key="date">{{ time }}</td>
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
import { ref, onMounted, watchEffect } from 'vue';

let number = 7
if (process.client) {
    number = window.innerWidth > 1250 ? 7 : 3
}

const uniqueDates = ref([]);
const uniqueTimes = ref([]);

const currentDate = new Date();
const firstDayOfWeek = ref(getFirstDayOfWeek(currentDate));
const lastDayOfWeek = ref(getLastDayOfWeek(currentDate));

const firstHourOfTimeOfDay = ref(9.5);
const lastHourOfTimeOfDay = ref(11.5);

function getFirstDayOfWeek(date) {
  const dayOfWeek = date.getDay();
  const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -number : 1);
  return new Date(date.setDate(diff));
}

function getLastDayOfWeek(date) {
  const dayOfWeek = date.getDay();
  const diff = date.getDate() - dayOfWeek + number;
  return new Date(date.setDate(diff));
}

function goPreviousWeek() {
    const prevFirstDay = new Date(firstDayOfWeek.value);
    prevFirstDay.setDate(prevFirstDay.getDate() - number);
    firstDayOfWeek.value = prevFirstDay;

    const prevLastDay = new Date(lastDayOfWeek.value);
    prevLastDay.setDate(prevLastDay.getDate() - number);
    lastDayOfWeek.value = prevLastDay;
}

function goNextWeek() {
    const nextFirstDay = new Date(firstDayOfWeek.value);
    nextFirstDay.setDate(nextFirstDay.getDate() + number);
    firstDayOfWeek.value = nextFirstDay;

    const nextLastDay = new Date(lastDayOfWeek.value);
    nextLastDay.setDate(nextLastDay.getDate() + number);
    lastDayOfWeek.value = nextLastDay;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

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

const selectTimeOfDay = (e) => {
    const target = e.target;
    const timeOfDay = target.classList.contains('morning') ? 'morning' : 'afternoon';
    target.classList.toggle('timeOfDaySelected');
    const otherTimeOfDay = target.classList.contains('morning') ? 'afternoon' : 'morning';
    target.parentNode.querySelector(`.${otherTimeOfDay}`).classList.remove('timeOfDaySelected');

    if(timeOfDay === 'morning') {
        firstHourOfTimeOfDay.value = 9.5;
        lastHourOfTimeOfDay.value = 11.5;
    } else {
        firstHourOfTimeOfDay.value = 14;
        lastHourOfTimeOfDay.value = 16;
    }
};

const getRandomAvailability = () => {
    const random = Math.random();
    if(random < 0.75) {
        return 'isAvailable';
    } else {
        return 'isNotAvailable';
    }
};

onMounted(() => {
    uniqueDates.value = generateDates(formatDate(new Date(firstDayOfWeek.value)), formatDate(new Date(lastDayOfWeek.value)));
    uniqueTimes.value = generateTimes(firstHourOfTimeOfDay.value, lastHourOfTimeOfDay.value, 30);
});

watchEffect(() => {
    uniqueDates.value = generateDates(formatDate(new Date(firstDayOfWeek.value)), formatDate(new Date(lastDayOfWeek.value)));
    uniqueTimes.value = generateTimes(firstHourOfTimeOfDay.value, lastHourOfTimeOfDay.value, 30);
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
    width: 102%;
}

.selected-date-range{
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    text-align: start;
    font-size: 30px;
}

.select-date-controls{
    display: flex;
    margin-top: 20px;
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
    margin: -30px;
}

.date-table table {
    border-collapse: separate;
    width: 100%;
    border-spacing: 30px;
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

.hourContainer{
    margin-top: 5%;
}

.hour{
    background-color: white;
    border-radius: 10%;
    height: 55px;
    font-size: 14px;
    margin-top: 14%;
}

.hourContainer, .dateContainer{
}

.weekSelectionButton{
    font-size: x-large;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    height: 3vh;
    align-self: center;
    background-color: white;
}

.nextWeekSelectionButton{
    border-radius: 0px 10px 10px 0px;
    border-left: 1px solid #02295f;
}

.previousWeekSelectionButton{
    border-radius: 10px 0px 0px 10px;
    border-right: 1px solid #02295f;
}

.controls-container{
    height: 100%;
    margin-left: 65px;
    margin-right: 65px;
}

.timeOfDaySelection{
    height: 100%;
    align-self: center;
}

.timeOfDaySelection p{
    background-color: white;
    padding: 11px;
    padding-left: 25px;
    padding-right: 25px;
    text-align: center;
}

.morning{
    border-radius: 10px 0px 0px 10px;
}

.afternoon{
    border-radius: 0px 10px 10px 0px;
}

.timeOfDaySelected{
    background-color: #3aa098 !important;
    color: white;
}

.isAvailable{
    background-color: white !important;
}

.isNotAvailable{
    background-color: rgba(255, 255, 255, 0.3) !important;
}

@media screen and (max-width: 1250px) {
  .select-date {
    width: 100%;
  }
  .row {
    width: 70%;
    justify-content: center;
  }
  .info-form {
    align-items: center;
  }

  .reservation-form{
    margin: 0;
    width: 90%;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }

  .select-date-controls {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weekSelectionButton {
    height: 3vh;
  }

  .bg-calamar-wrapper {
    width: 100vw;
    margin-right: 0;
    margin-left: 0;
    height: 200vh;
  }
  .afternoon {
    width: 50%;
  }
  .morning {
    width: 50%;
  }

  .timeOfDaySelection {
    width: 100%;
  }
  .daySelect {
    justify-content: space-between;
    width: 100%;
    height: 10vh;
  }

  .bg-calamar-img {
    top: -50%;
    left: -20vw;
    width: 80%;
    height: 100%;
  }

  .selected-date-range {
    font-size: 1.5rem;
  }
}
</style>



