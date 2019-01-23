export const Menu = client => {  return client.hoc({    state(props, store) {      return {        isMenuOpen: store.get('isMenuOpen'),      };    },    actions(props, store) {      return {        onClick: page => {          store.call('changeRoute', { page, action: 'replace' });          store.toggle('isMenuOpen');        },      };    },    classes: {      link: `        font-size: 20px;        padding: 20px;        cursor: pointer;        color: white;      `,    },    styles: {      menu: isMenuOpen => `        position: absolute;        display: flex;        flex-flow: column;        align-items: center;        width: 100%;        height: 100vh;        z-index: 10;        background: ${client.lib.Colors.GREY_BACKGROUND};        opacity: ${isMenuOpen ? 0.98 : 0};        pointer-events: ${isMenuOpen ? 'auto' : 'none'};        transition: opacity .4s ease;      `,    },    render({ actions, state, styles, classes }) {      const { onClick } = actions;      return client.html`        <div id='menu' style=${styles.menu(state.isMenuOpen)}>          <div class=${classes.link} @click=${() => onClick('home')}>Home</div>          <div class=${classes.link} @click=${() => onClick('agreements')}>Convenios</div>          <div class=${classes.link} @click=${() => onClick('faq')}>Preguntas Frecuentes</div>        </div>      `;    }  });};