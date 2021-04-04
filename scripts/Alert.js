class Alert
{
    constructor() {
        document.querySelector("section").innerHTML += `
            <div class="alert hidden"></div>
        ` 
    }

    showAlert(texto) {
        document.querySelector(".alert").innerHTML = `
            <div class="alert_content">
                <div class="alert_header"></div>
                <div class="alert_body">
                    <div><p>${texto}</p></div>
                </div>
                <div class="alert_footer">
                    <button class="btn" id="ok">Ok</button>
                </div>
            </div>
        `
        document.querySelector(".alert").classList.remove("hidden")
        document.querySelector(".alert_footer #ok").addEventListener("click",this.hideAlert)
    }
    
    hideAlert() {
        document.querySelector(".alert").classList.add("hidden")
    }
}
const ALERT = new Alert()