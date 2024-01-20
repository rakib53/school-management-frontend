export const getAmountOfDaysInCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Adding 1 to get the actual month number
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();
    return lastDayOfMonth;
};

export const getAllDaysInCurrentMonth = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const totalDays = new Date(currentDate.getFullYear(), currentMonth, 0).getDate();
    return Array.from({ length: totalDays }, (_, index) => index + 1);
};

export const getDaysFrom1ToCurrentDay = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    return Array.from({ length: currentDay }, (_, index) => index + 1);
};