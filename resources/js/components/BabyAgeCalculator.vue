<script setup>
import { computed, ref } from 'vue';

const birthDate = ref('');
const calculatedMonths = ref(null);
const errorMessage = ref('');

const todayLabel = computed(() => new Intl.DateTimeFormat('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
}).format(new Date()));

function calculateAge() {
    errorMessage.value = '';
    calculatedMonths.value = null;

    if (!birthDate.value) {
        errorMessage.value = 'Silakan pilih tanggal lahir bayi terlebih dahulu.';
        return;
    }

    const [year, month, day] = birthDate.value.split('-').map(Number);
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (birth > todayOnly) {
        errorMessage.value = 'Tanggal lahir tidak boleh melebihi hari ini.';
        return;
    }

    let months = (todayOnly.getFullYear() - birth.getFullYear()) * 12
        + todayOnly.getMonth() - birth.getMonth();

    if (todayOnly.getDate() < birth.getDate()) {
        months -= 1;
    }

    calculatedMonths.value = Math.max(0, months);
}

function resetCalculator() {
    birthDate.value = '';
    calculatedMonths.value = null;
    errorMessage.value = '';
}
</script>

<template>
    <main class="page-shell">
        <section class="calculator-card" aria-labelledby="page-title">
            <div class="brand-mark" aria-hidden="true">♡</div>
            <p class="eyebrow">PANTAU TUMBUH KEMBANG</p>
            <h1 id="page-title">Kalkulator usia bayi</h1>
            <p class="intro">Cari tahu usia si kecil dalam hitungan bulan dengan mudah.</p>

            <div class="form-area">
                <label for="birth-date">Tanggal lahir bayi</label>
                <div class="date-input-wrap">
                    <span class="calendar-icon" aria-hidden="true">▣</span>
                    <input id="birth-date" v-model="birthDate" type="date" :max="new Date().toISOString().slice(0, 10)">
                </div>
                <p class="helper">Hari ini: {{ todayLabel }}</p>
                <p v-if="errorMessage" class="error-message" role="alert">{{ errorMessage }}</p>
                <button class="primary-button" type="button" @click="calculateAge">Hitung usia bayi</button>
            </div>

            <div v-if="calculatedMonths !== null" class="result-panel" aria-live="polite">
                <div class="result-icon" aria-hidden="true">✦</div>
                <div>
                    <p class="result-label">Usia bayi saat ini</p>
                    <p class="result-value">{{ calculatedMonths }} <span>bulan</span></p>
                </div>
                <button class="reset-button" type="button" @click="resetCalculator">Hitung lagi</button>
            </div>

            <p class="note"><span aria-hidden="true">ⓘ</span> Perhitungan berdasarkan tanggal hari ini dan dibulatkan ke bulan penuh.</p>
        </section>
        <footer>Dibuat untuk membantu orang tua memantau usia si kecil.</footer>
    </main>
</template>
