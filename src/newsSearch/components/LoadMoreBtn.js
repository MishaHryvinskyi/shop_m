// Стани кнопки
// 1. Коли її немає на екрані
// 2. Неактивна(Loading...) - коли відбувається запит(відповідь ще не отримана)
// 3. Стан активна - коли можна зробити наступний запит


export default class LoadMoreBtn {
    constructor({ selector, isHidden = false, }) {
        this.button = this.getButton(selector);
        isHidden && this.hide();
    }

    getButton(selector) {
        return document.querySelector(selector);
    }

    disable() {
        this.button.disabled = true;
        this.button.textContent = "Loading...";
    }

    enable() {
        this.button.disabled = false;
        this.button.textContent = "Load more";
    }

    hide() {
        this.button.classList.add("hidden")
    }

    show() {
        this.button.classList.remove("hidden")
    }
}