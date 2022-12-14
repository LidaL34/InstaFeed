export var Attributes;
(function (Attributes) {
    Attributes["pp"] = "pp";
    Attributes["username"] = "username";
})(Attributes || (Attributes = {}));
class StoriesU extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            pp: null,
            username: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
        console.log("connected");
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
                
             <link href="./app/components/Stories/Stories.css" rel="stylesheet"> 

                    <div class="storie">
     
                        <li><img src="${this.pp}" alt="story"></li>
                        <img src="./app/img/StoryPost.png " alt="ring" class="ring">
                        <p>${this.username}</p>
              
                    </div>
     
             `;
        }
    }
}
customElements.define("my-storie", StoriesU);
export default StoriesU;
