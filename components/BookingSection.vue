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
                    </div>
                    <div class="row">
                        <input class="input" placeholder="Téléphone" type="number">
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
                    <th v-for="date in uniqueDates">{{ date.day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="date in uniqueDates">
                    <td v-for="time in date.times">{{ time }}</td>
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

const generateTimes = (hourFrom, hourTo, increments) => {
    const times = [];
    for(let i = hourFrom; i < hourTo; i += increments / 60) {
        const hour = Math.floor(i);
        const minute = (i - hour) * 60;
        times.push(`${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}`);
    }
    return times;
};

const generateDates = (dayFrom, dayTo, hourFrom, hourTo, increments) => {
    const startDate = new Date(dayFrom);
    const endDate = new Date(dayTo);

    const uniqueDays = [];

    for(let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayString = `${date.toLocaleDateString('en-US', { weekday: 'short' })} ${date.getDate()}/${('0' + (date.getMonth() + 1)).slice(-2)}`;
        uniqueDays.push({
            day: dayString,
            times: generateTimes(hourFrom, hourTo, increments)
        });
    }

    return uniqueDays;
};

onMounted(() => {
    uniqueDates.value = generateDates("2023-06-29", "2023-07-06", 9, 10, 30);
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
  display: inline-block;
  width: 213px;
}

.bg-calamar-img {
    object-fit: cover;
    object-position: center 10%;
    position: absolute;
    width: 100%;
    height: 100%;
    
}

.bg-calamar-wrapper {
    position: relative;
    margin: 5em;
    height: 100%;
    border-radius: 20px;
    background-color: rgba(176, 208, 225, 0.3);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.reservation-form {
    z-index: 1;
    text-align: center;
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
    gap: 20px;
}

.input {
    border: 0;
    background-color: #fff;
    border-radius: 10px;
    width: 242px;
    padding: 11px 28px;
    box-sizing: border-box;
    font-size: 24px;
}

.date-table {
    margin-top: 20px;
}

.date-table table {
    border-collapse: collapse;
    width: 100%;
}

.date-table th, .date-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}

.date-table th {
    background-color: #f2f2f2;
}
</style>



