export var Info;
(function (Info) {
    Info["pp"] = "pp";
    Info["username"] = "username";
    Info["name"] = "name";
    Info["followed"] = "followed";
})(Info || (Info = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            pp: null,
            username: null,
            name: null,
            followed: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

             <link href="./app/components/Suggestions/Suggest.css" rel="stylesheet">

                <section class="suggestions">

                    <div class="profile">
                        <img src="${this.pp}" alt="Pp">
                        <h1>${this.username}</h1>
                        <br>
                        <p>${this.name}</p>

                        <h2>Suggestions For You</h2>

                    </div>

                    <div class="profiles">
                        <img src="${this.pp}" alt="PSuggestion">
                        <p><b>${this.username}</b></p>
                        <p>${this.followed}</p>
                    </div>
        
                </section>
            `;
        }
    }
}
customElements.define("my-info", Suggestions);
export default Suggestions;
