<script lang="ts">
    import { onMount } from 'svelte';
    import dates from '../../maintenance/dates.json';
    import ChevronRight from "../assets/icons/ChevronRight.svelte";
    import ChevronLeft from "../assets/icons/ChevronLeft.svelte";

    let selectedMonth: number;
    let selectedYear: number;
    let daysInMonth: number;
    let firstDayOfMonth: number;
    let daysFromPrevMonth: number[] = [];
    let daysFromNextMonth: number[] = [];
    let selectedDates: { date: Date, content: string[] }[] = [];
    let hoveredContent: string[] = [];
    let showPopup = false;
    let popupX = 0;
    let popupY = 0;
    let selectedDate: Date | null = null;

    onMount(() => {
        const date = new Date();
        selectedMonth = date.getMonth();
        selectedYear = date.getFullYear();
        selectedDates = dates.map(dateObj => ({
            date: new Date(dateObj.date),
            content: dateObj.content
        }));
        updateCalendar();
    });

    function updateCalendar() {
        const firstDay = new Date(selectedYear, selectedMonth, 1);
        firstDayOfMonth = (firstDay.getDay() + 6) % 7;
        daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

        const prevMonthDays = new Date(selectedYear, selectedMonth, 0).getDate();
        daysFromPrevMonth = Array.from({ length: firstDayOfMonth }, (_, i) => prevMonthDays - i).reverse();

        const totalDays = daysFromPrevMonth.length + daysInMonth;
        const nextMonthDaysCount = (7 - (totalDays % 7)) % 7;
        daysFromNextMonth = Array.from({ length: nextMonthDaysCount }, (_, i) => i + 1);


        const totalDisplayedDays = totalDays + daysFromNextMonth.length;
        const additionalDays = 42 - totalDisplayedDays;
        if (additionalDays > 0) {
            daysFromNextMonth = daysFromNextMonth.concat(Array.from({ length: additionalDays }, (_, i) => nextMonthDaysCount + i + 1));
        }
    }

    function isSelectedDate(day: number, month: number, year: number): boolean {
        return selectedDates.some(date =>
            date.date.getDate() === day &&
            date.date.getMonth() === month &&
            date.date.getFullYear() === year
        );
    }

    function getSelectedDateContent(day: number, month: number, year: number): string[] {
        const selectedDate = selectedDates.find(date =>
            date.date.getDate() === day &&
            date.date.getMonth() === month &&
            date.date.getFullYear() === year
        );
        return selectedDate ? selectedDate.content : [];
    }

    function prevMonth() {
        selectedMonth = (selectedMonth === 0) ? 11 : selectedMonth - 1;
        selectedYear -= (selectedMonth === 11) ? 1 : 0;
        updateCalendar();
    }

    function nextMonth() {
        selectedMonth = (selectedMonth === 11) ? 0 : selectedMonth + 1;
        selectedYear += (selectedMonth === 0) ? 1 : 0;
        updateCalendar();
    }

    // function handleMouseOver(event: MouseEvent, day: number) {
    //     const content = getSelectedDateContent(day, selectedMonth, selectedYear);
    //     if (content.length > 0) {
    //         hoveredContent = content;
    //         showPopup = true;
    //         popupX = event.clientX;
    //         popupY = event.clientY;
    //         selectedDate = new Date(selectedYear, selectedMonth, day); // Set the selected date
    //     }
    // }
    //
    // function handleMouseOut() {
    //     if (!isClicked) {
    //         showPopup = false;
    //     }
    // }

    function handleMouseClick(event: MouseEvent, day: number) {
        const content = getSelectedDateContent(day, selectedMonth, selectedYear);
        if (content.length > 0) {
            hoveredContent = content;
            showPopup = true;
            popupX = event.clientX;
            popupY = event.clientY;
            selectedDate = new Date(selectedYear, selectedMonth, day);
        }
    }
</script>

<div class="datepicker">
    <div class="datepicker-top">
        <div class="month-selector">
            <button class="arrow" on:click={prevMonth}><ChevronLeft /></button>
            <span class="month-name">{new Date(selectedYear, selectedMonth).toLocaleString('default', { month: 'long' })} {selectedYear}</span>
            <button class="arrow" on:click={nextMonth}><ChevronRight /></button>
        </div>
    </div>
    <div class="datepicker-calendar">
        <span class="day">Lu</span>
        <span class="day">Ma</span>
        <span class="day">Me</span>
        <span class="day">Je</span>
        <span class="day">Ve</span>
        <span class="day">Sa</span>
        <span class="day">Di</span>
        {#each daysFromPrevMonth as day}
            <button class="date faded" >{day}</button>
        {/each}
        {#each Array(daysInMonth).fill(0).map((_, i) => i + 1) as day}
            <button
                    class="date {isSelectedDate(day, selectedMonth, selectedYear) ? 'current-day' : ''}"
                    on:click={(event) => handleMouseClick(event, day)}
            >
                {day}
            </button>
        {/each}
        {#each daysFromNextMonth as day}
            <button class="date faded">{day}</button>
        {/each}

    </div>
</div>

{#if showPopup}
    <div class="popup" style="left: {popupX}px; top: {popupY}px;">
        <h4> {selectedDate?.toLocaleDateString()}</h4>
        {#each hoveredContent as content}
            <p>{content}</p>
        {/each}
        <button class="popup__close" on:click={() => showPopup = false}>X</button>
    </div>
{/if}

<style lang="scss">

  *, *:after, *:before {
    box-sizing: border-box;
  }

  :root {
    --c-theme-primary: #008FFD;
    --c-theme-primary-accent: #CBE8FF;
    --c-bg-primary: #D6DAE0;
    --c-bg-secondary: #EAEBEC;
    --c-bg-tertiary: #FDFDFD;
    --c-text-primary: #1F1F25;
    --c-text-secondary: #999FA6;
  }

  body {
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--c-bg-primary);
    color: var(--c-text-primary);
  }

  button {
    font: inherit;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }


  .datepicker {
    width: 350px;
    max-width: 350px;
    background-color: var(--c-bg-tertiary);
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(#000, .2), 0 5px 10px 0 rgba(#000, .1);
    padding: 1rem;
  }

  .datepicker-top {
    margin-bottom: 1rem;
  }

  .btn-group {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    margin-top: -.5rem;
  }

  .tag {
    margin-right: .5rem;
    margin-top: .5rem;
    border: 0;
    background-color: var(--c-bg-secondary);
    border-radius: 10px;
    padding: .5em .75em;
    font-weight: 600;
  }

  .month-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color:#FFF;
    border-radius: 12px;
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: 0 0 2px 0 rgba(#000,.25), 0 0 10px 0 rgba(#000, .15);
  }

  .month-name {
    font-weight: 600;
    color: var(--c-text-primary);
  }

  .datepicker-calendar {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 1rem;
  }

  .day, .date {
    justify-self: center;
  }

  .day {
    color: var(--c-text-secondary);
    font-size: .875em;
    font-weight: 500;
    justify-self: center;
  }

  .date {
    border: 0;
    padding: 0;
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-weight: 600;
    border: 2px solid transparent;
    background-color: transparent;
    cursor: pointer;
    color: var(--c-text-primary);

    &:focus {
      outline: 0;
      color: var(--c-theme-primary);
      border: 2px solid var(--c-theme-primary-accent);
    }
  }

  .faded {
    color: var(--c-text-secondary);
  }

  .current-day {
    color: #FFF;
    border-color: var(--c-theme-primary);
    background-color: var(--c-theme-primary);
    &:focus {
      background-color: var(--c-theme-primary-accent);
    }
  }

  .popup {
    position: fixed;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    color: black;
    border-radius: 8px;

    &__close {
      position: absolute;
      top: 0;
      right: 5px;
      background: none;
      border: none;
      padding: 5px;
      cursor: pointer;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }
</style>