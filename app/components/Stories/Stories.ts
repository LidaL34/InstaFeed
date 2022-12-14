export enum Attributes {
    'pp' = 'pp',
    'username' = 'username'
}

class StoriesU extends HTMLElement {
    pp?: string;
    username?: string;

    static get observedAttributes(){
        const attrs: Record <Attributes,null> = {
            pp: null,
            username: null
        };

        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
        console.log("connected");
    }

    attributeChangedCallback(propName: Attributes, oldValue: string | undefined, newValue: string | undefined){
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
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

customElements.define("my-storie",StoriesU);
export default StoriesU;